var UntzDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.toggleCount = 0;
};

UntzDancer.prototype = Object.create(Dancer.prototype);
UntzDancer.prototype.constructor = UntzDancer;

UntzDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.toggleCount++;
  this.$node.toggle();
  console.log("count before if",this.toggleCount);
  if (this.toggleCount % 2 === 0) { // change every 2 toggles
    var styleSettings = {
      border: "25px solid purple",
      "border-radius": "25px"
    };
    this.$node.css(styleSettings);  //consider else?
  };
  if (this.toggleCount % 3 === 0) {
    var styleSettings = {
      border: "10px solid red",
      "border-radius": "10px"
    };
    this.$node.css(styleSettings);  //consider else?
  }
};

// var awesomeInstanceofUntz = new UntzDancer (10, 20, 100);
// console.log('awesomeInstanceofUntz is: ',awesomeInstanceofUntz);