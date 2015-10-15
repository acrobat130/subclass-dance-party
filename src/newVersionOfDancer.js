// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = ('<span class="dancer"></span>');

}

Dancer.prototype.step = function(){
// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
  setTimeout(dancer.step, timeBetweenSteps);
}(); // parens immediately invoke step function