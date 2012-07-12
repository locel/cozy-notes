getLinks = ->
  links = document.querySelectorAll "h3.r a"
  Array::map.call links, (e) -> e.getAttribute "href"

links = []
casper = require('casper').create()

casper.start "http://google.fr/", ->
  # search for 'casperjs' from google form
  @fill "form[action='/search']", q: "casperjs"

casper.then ->
        @capture "example.png", {
                top: 0,
                left: 0,
                width: 400,
                height: 300
        }
        

casper.then ->
  # aggregate results for the 'casperjs' search
  links = @evaluate getLinks
  # search for 'phantomjs' from google form
  @fill "form[action='/search']", q: "phantomjs", true

casper.then ->
  # concat results for the 'phantomjs' search
  links = links.concat @evaluate(getLinks)

casper.run ->
  # display results
  @echo links.length + " links found:"
  @echo(" - " + links.join("\n - ")).exit()