var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  console.log("this in makeBlinkyDancer:", this);
  Dancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.oldStep = makeBlinkyDancer.prototype.step;

makeBlinkyDancer.prototype.step = function(){
  makeBlinkyDancer.prototype.oldStep();
  this.$node.toggle();
};

//var blinkyDancer = new makeBlinkyDancer(500, 500, 1000);
//console.log('blinkyDancer is : ', happyDancer);