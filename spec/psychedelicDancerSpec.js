describe("psychedelicDancer", function() {

  var psychedelicDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    psychedelicDancer = new PsychedelicDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(psychedelicDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(psychedelicDancer.$node, 'toggle');
    psychedelicDancer.step();
    expect(psychedelicDancer.$node.toggle.called).to.be.true;
  });

it("should have an initial toggle counter of 0", function(){
    expect(psychedelicDancer.toggleCount === 0).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(psychedelicDancer, "step");
      expect(psychedelicDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(psychedelicDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(psychedelicDancer.step.callCount).to.be.equal(2);
    });
  });

describe("color", function(){
    it("should call step and reassign a new color", function(){
      sinon.spy(psychedelicDancer, "step");
      expect(psychedelicDancer.randomColorGenerator).to.be.an.instanceof(Function); 
    });
  });

});
