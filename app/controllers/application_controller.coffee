###*
@class application_controller
controls the application
###

if app.settings.env == "production"
    before 'check authenticated', ->
        if req.isAuthenticated() then next() else send 403

#before 'protect from forgery', ->
#    protectFromForgery '014bab01fb364db464d3f1c9a4c4fe8e4032ed0b'

