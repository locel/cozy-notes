// Generated by CoffeeScript 1.3.3

/**
@class note
*/


(function() {
  var async, helpers;

  async = require("async");

  helpers = require('../../client/app/helpers');

  /**
  DestroyNote corresponding to given condition
  TODO optimise deletion : each deletion requires on request.
  @method destroySome
  @param {Object} condition
  @param {Function} callback
  */


  Note.destroySome = function(condition, callback) {
    var done, error, wait;
    wait = 0;
    error = null;
    done = function(err) {
      error = error || err;
      if (--wait === 0) {
        return callback(error);
      }
    };
    return Note.all(condition, function(err, data) {
      if (err) {
        return callback(err);
      }
      if (data.length === 0) {
        return callback(null);
      }
      wait = data.length;
      return data.forEach(function(obj) {
        return obj.destroy(done);
      });
    });
  };

  /**
  Delete all notes
  @method destroyAll
  @param {Function} callback
  */


  Note.destroyAll = function(callback) {
    return Note.destroySome({}, callback);
  };

  /**
  Return notes which live under given path.
  @method allForPath
  @param {Object} path
  @param {Function} callback
  */


  Note.allForPath = function(path, callback) {
    var regExp;
    regExp = helpers.getPathRegExp(path);
    return Note.all({
      where: {
        path: {
          regex: regExp
        }
      }
    }, callback);
  };

  /**
  Destroy notes which live under given path.
  @method destroyFarPath
  @param {Object} path
  @param {Function} callback
  */


  Note.destroyForPath = function(path, callback) {
    var regExp;
    regExp = helpers.getPathRegExp(path);
    return Note.destroySome({
      where: {
        path: {
          regex: regExp
        }
      }
    }, callback);
  };

  /**
  Change path for every note which are children of given path to the 
  new given one.
  It is the result of moving notes inside tree.
  @method updatePath
  @param {Object} path
  @param {Object} newPath
  @param {String} newName
  @param {Function} callback
  */


  Note.updatePath = function(path, newPath, newName, callback) {
    return Note.allForPath(path, function(err, notes) {
      var done, humanNames, nodeIndex, note, wait, _i, _len, _results;
      if (err) {
        return callback(err);
      }
      if (notes.length === 0) {
        return callback(new Error("No note for this path"));
      }
      wait = notes.length;
      done = function(err) {
        var error;
        error = error || err;
        if (--wait === 0) {
          return callback(error);
        }
      };
      nodeIndex = path.split("/").length - 2;
      _results = [];
      for (_i = 0, _len = notes.length; _i < _len; _i++) {
        note = notes[_i];
        note.path = newPath + note.path.substring(path.length);
        humanNames = note.humanPath.split(",");
        humanNames[nodeIndex] = newName;
        note.humanPath = humanNames;
        _results.push(note.save(done));
      }
      return _results;
    });
  };

  /**
  When a node is moved, all notes that are linked to this node are
  updated : sub-path are replaced by new node path.
  @method movePath
  @param {Object} path
  @param {String} dest
  @param {String} humanDest
  @param {Function} callback
  */


  Note.movePath = function(path, dest, humanDest, callback) {
    return Note.allForPath(path, function(err, notes) {
      var done, humanNames, i, nodeIndex, note, parentPath, pathLength, wait, _i, _j, _len, _ref, _results;
      if (err) {
        return callback(err);
      }
      if (notes.length === 0) {
        return callback(new Error("No note for this path"));
      }
      wait = notes.length;
      done = function(err) {
        var error;
        error = error || err;
        if (--wait === 0) {
          return callback(error);
        }
      };
      parentPath = path.split("/");
      parentPath.pop();
      pathLength = parentPath.join("/").length;
      nodeIndex = parentPath.length - 1;
      _results = [];
      for (_i = 0, _len = notes.length; _i < _len; _i++) {
        note = notes[_i];
        note.path = dest + note.path.substring(pathLength);
        humanNames = note.humanPath.split(",");
        for (i = _j = 0, _ref = nodeIndex - 1; 0 <= _ref ? _j <= _ref : _j >= _ref; i = 0 <= _ref ? ++_j : --_j) {
          humanNames.shift();
        }
        humanNames = humanDest.concat(humanNames);
        note.humanPath = humanNames;
        _results.push(note.save(done));
      }
      return _results;
    });
  };

}).call(this);
