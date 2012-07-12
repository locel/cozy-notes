casper = require('casper').create()

casper.start "http://localhost:3000/#note/all", ->
        @test.assertExists "li#tree-node-all-todo", 'found todo'
        @click "#tree-node-all-todo a"
        @test.assertExists "#tree-create", 'found create'
        @click "#tree-create"
        @test.assertExists ".jstree-rename-input", 'found rename input'
        @fill ".jstree-rename-input",  'Cozy'

casper.then ->
        @capture "second.png", {
                top: 0,
                left: 0,
                width: 400,
                height: 300
        }

casper.run ->
        @echo("done").exit();