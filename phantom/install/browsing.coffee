

casper = require('casper').create()

casper.start "http://localhost:3000/#note/all", ->
        @test.assertExists "li#tree-node-all-todo", 'found todo'
        @click "#tree-node-all-todo a"

casper.then ->
        @test.assertExists "#note-full-title", 'found todo title'
        name = @fetchText "#note-full-title"
        @test.assertEquals name, "todo"

casper.then ->
        @test.assertExists "#note-full-breadcrump", 'found todo breadcrump'
        name = @fetchText "#note-full-breadcrump"
        @test.assertEquals name, "All / todo"

casper.then ->
        @test.assertExists "li#tree-node-all-recipe-dessert", 'found dessert'
        @click "#tree-node-all-recipe-dessert a"

casper.then ->
        @test.assertExists "#note-full-title", 'found dessert title'
        name = @fetchText "#note-full-title"
        @test.assertEquals name, "dessert"

casper.then ->
        @test.assertExists "#note-full-breadcrump", 'found dessert breadcrump'
        name = @fetchText "#note-full-breadcrump"
        @test.assertEquals name, "All / recipe / dessert"

casper.run ->
        @echo("done").exit();