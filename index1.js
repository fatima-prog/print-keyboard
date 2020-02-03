var asciify = require('asciify-image');
 
var options = {
  fit:    'box',
  width:  50,
  height: 25
}
 
asciify('./island-3542290__340.jpg', options)
  .then(function (asciified) {
    // Print asciified image to console
    console.log(asciified);
  })
  .catch(function (err) {
    // Print error to console
    console.error(err);
  });