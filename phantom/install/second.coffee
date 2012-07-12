casper = require('casper').create()

casper.start "file:///home/leo/Documents/Cours/Stage/cozy-notes/phantom/install/test.html", ->
        @test.assertExists "input[class='jstree-rename-input']", 'found'

casper.then ->
        @fill "input[value='New Node']", {q:  "Cozy"}

casper.then ->
        @capture "second.png", {
                top: 0,
                left: 0,
                width: 400,
                height: 300
        }
        
casper.run ->
        @echo("done").exit();