var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  console.log("this in makeBlinkyDancer:", this);
  Dancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  //debugger;
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  // setTimeout(this.step.bind(this), this.timeBetweenSteps)
  //debugger;
};

//var blinkyDancer = new makeBlinkyDancer(500, 500, 1000);
//console.log('blinkyDancer is : ', happyDancer);