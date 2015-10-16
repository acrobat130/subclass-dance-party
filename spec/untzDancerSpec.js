describe("untzDancer", function() {

  var untzDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    untzDancer = new UntzDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(untzDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(untzDancer.$node, 'toggle');
    untzDancer.step();
    expect(untzDancer.$node.toggle.called).to.be.true;
  });

it("should have an initial toggle counter of 0", function(){
    expect(untzDancer.toggleCount === 0).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(untzDancer, "step");
      expect(untzDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(untzDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(untzDancer.step.callCount).to.be.equal(2);
    });
  });

});
