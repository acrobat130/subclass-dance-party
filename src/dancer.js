// Creates and returns a new Dancer object that can step

var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
}

Dancer.prototype.step = function(){
// the basic Dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
  setTimeout(this.step, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
// Use css top and left properties to position where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  console.log('this.$node is: ', this.$node);
  this.$node.css(styleSettings);
};

var happyDancer = new Dancer(500, 500, 1000);
console.log('happyDancer is : ', happyDancer);



