safeRequire = require("../utils").safeRequire
DataClient = require("client").DataClient

exports.initialize = initializeSchema = (schema, callback) ->
    s = schema.settings
    if schema.settings.url
        url = require("url").parse(schema.settings.url)
        s.host = url.hostname
        s.port = url.port
        s.database = url.pathname.replace(/^\//, "")
        s.username = url.auth and url.auth.split(":")[0]
        s.password = url.auth and url.auth.split(":")[1]
    s.host = s.host or "localhost"
    s.port = parseInt(s.port or "30000", 10)
    s.database = s.database or "cozy"
    schema
  
DataSystem = (s, schema, callback) ->
    @_models = {}
    @client = DataClient s.host


DataSystem::exists = (model, id, callback) ->
    data =
        dataType: model
        id: id

    @client.post "get/", data, (err, resp) ->
        callback err, not err and resp

DataSystem::create = (model, data, callback) ->
    data.dataType = model
    @client.post "create/", data, (err, resp) ->
        callback err, (if err then null else resp._id.toString())

DataSystem::save = (model, data, callback) ->
  @collection(model).save
    _id: new ObjectID(data.id)
  , data, (err) ->
    callback err

DataSystem::find = find = (model, id, callback) ->
  @collection(model).findOne
    _id: new ObjectID(id)
  , (err, data) ->
    data.id = id  if data
    callback err, data

DataSystem::updateOrCreate = updateOrCreate = (model, data, callback) ->
  adapter = this
  return @create(data, callback)  unless data.id
  @find model, data.id, (err, inst) ->
    return callback(err)  if err
    if inst
      adapter.updateAttributes model, data.id, data, callback
    else
      delete data.id

      adapter.create model, data, (err, id) ->
        return callback(err)  if err
        if id
          data.id = id
          delete data._id

          callback null, data
        else
          callback null, null

DataSystem::destroy = destroy = (model, id, callback) ->
  @collection(model).remove
    _id: new ObjectID(id)
  , callback

DataSystem::all = all = (model, filter, callback) ->
  filter = {}  unless filter
  query = {}
  if filter.where
    Object.keys(filter.where).forEach (k) ->
      cond = filter.where[k]
      spec = false
      if cond and cond.constructor.name is "Object"
        spec = Object.keys(cond)[0]
        cond = cond[spec]
      if spec
        if spec is "between"
          query[k] =
            $gte: cond[0]
            $lte: cond[1]
        else
          query[k] = {}
          query[k]["$" + spec] = cond
      else
        if cond is null
          query[k] = $type: 10
        else
          query[k] = cond
  cursor = @collection(model).find(query)
  if filter.order
    m = filter.order.match(/\s+(A|DE)SC$/)
    key = filter.order
    reverse = false
    if m
      key = key.replace(/\s+(A|DE)SC$/, "")
      reverse = true  if m[1] is "DE"
    if reverse
      cursor.sort [ [ key, "desc" ] ]
    else
      cursor.sort key
  cursor.limit filter.limit  if filter.limit
  if filter.skip
    cursor.skip filter.skip
  else cursor.skip filter.offset  if filter.offset
  cursor.toArray (err, data) ->
    return callback(err)  if err
    callback null, data.map((o) ->
      o.id = o._id.toString()
      delete o._id

      o
    )

DataSystem::destroyAll = destroyAll = (model, callback) ->
  @collection(model).remove {}, callback

DataSystem::count = count = (model, callback, where) ->
  @collection(model).count where, (err, count) ->
    callback err, count

DataSystem::updateAttributes = updateAttrs = (model, id, data, cb) ->
  @collection(model).findAndModify
    _id: new ObjectID(id)
  , [ [ "_id", "asc" ] ],
    $set: data
  , {}, (err, object) ->
    cb err, object

DataSystem::disconnect = ->
  @client.close()
