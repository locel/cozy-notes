

casper = require('casper').create()

casper.start "http://localhost:3000/#note/all", ->
        @click "#tree-search"
        @test.assertExists "input[id='tree-search-field']", 'found'
        @fill "input[id='tree-search-field']", q:  "all"



casper.then ->
        @capture "first.png", {
                top: 0,
                left: 0,
                width: 400,
                height: 300
        }
        
casper.run ->
        @echo("done").exit();