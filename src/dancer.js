// Creates and returns a new Dancer object that can step

var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  console.log("this in Dancer:",this);
  this.step();
  this.setPosition(top, left);
}

Dancer.prototype.step = function(){
// the basic Dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
// Use css top and left properties to position where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(top, left){
  this.top = 0;
  this.left = 0;
};

// var happyDancer = new Dancer(500, 500, 1000);
// console.log('happyDancer is : ', happyDancer);



