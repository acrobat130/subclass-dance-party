var PsychedelicDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.toggleCount = 0;
};

PsychedelicDancer.prototype = Object.create(Dancer.prototype);
PsychedelicDancer.prototype.constructor = PsychedelicDancer;

PsychedelicDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.toggleCount++;
  this.$node.toggle();
  console.log("count before if",this.toggleCount);
  // if (this.toggleCount % 2 === 0) { // change every 2 toggles
  //   var styleSettings = {
  //     border: "25px solid purple",
  //     "border-radius": "25px"
  //   };
  //   this.$node.css(styleSettings);  //consider else?
  // };
  if (this.toggleCount % 5 === 0) { //|| 75 < this.toggleCount < 500) {
    var dancerColorR = Math.floor(Math.random()*255);
    var dancerColorG = Math.floor(Math.random()*255);
    var dancerColorB = Math.floor(Math.random()*255);
    var randomColor = "rgb(" + dancerColorR + ", " + dancerColorG + ", " + dancerColorB + ")";
    var styleSettings = {
      // border: "10px",
      "border-radius": "10px",
      "border-color" : randomColor
    };
    this.$node.css(styleSettings);  //consider else?
  }
};



