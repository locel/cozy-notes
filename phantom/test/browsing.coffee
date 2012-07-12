should = require("should")
helpers = require("../../client/test/helpers")
app = require("../../server")
phantom = require("phantom")


                                

describe "Browsing", ->

        
        before (done) ->
                app.listen 8001
                helpers.init ->
                        done()
                        
             

        
        describe "une première page web", ->
           pageTitle  = ""
           it "on ouvre la page et on récupère les infos", (done) ->
                phantom.create (ph) ->
                        ph.createPage (page) ->
                                page.open "http://localhost:3000", ->
                                        page.evaluate (-> document.title), (result) ->
                                                pageTitle = result
                                                done()

                                        
           it "le titre est bien celui attendu", (done) ->
                pageTitle.should.equal "Cozy Notes"
                done()                                     
                
                                                        
               
      