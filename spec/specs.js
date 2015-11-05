describe('pingPongOutput', function() {
  it("is the number for most input numbers", function() {
    expect(pingPongOutput(2)).to.equal(2);
  });

  it("is 'ping' for numbers divisible by 3", function() {
    expect(pingPongOutput(6)).to.equal("ping");
  });

  it("is 'pong' for numbers divisible by 5", function() {
    expect(pingPongOutput(5)).to.equal("pong");
  });

  it("is 'pingpong' for numbers divisible by 3 and 5", function() {
    expect(pingPongOutput(15)).to.equal("pingpong");
  });
});
