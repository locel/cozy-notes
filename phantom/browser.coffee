exports.Browser = require("phantom")


        ###
        it "Then Todo note title an path are displayed", ->
                @page.test.assertExists "#note-full-title", 'found todo title'
                @browser.fetchText("#note-full-title").should.equal "todo"
                @test.assertExists "#note-full-breadcrump", \
                        'found todo breadcrump'
                @browser.fetchText("#note-full-breadcrump").should.equal "All / todo"
                
        it "When I click on recipe note", (done) ->
                @test.assertExists "li#tree-node-all-recipe-dessert", \
                        'found dessert'
                @click "#tree-node-all-recipe-dessert a"

        it "Then Recipe note title and path are displayed", ->
                @browser.test.assertExists "#note-full-title", 'found dessert title'
                @browser.fetchText("#note-full-title").should.equal "dessert"
                @browser.test.assertExists "#note-full-breadcrump", 'found dessert breadcrump'
                @browser.fetchText("#note-full-breadcrump").should.equal "All / recipe / dessert"

        ###