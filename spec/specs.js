describe('pingPongOutput', function() {
  it("is the number for most input numbers", function() {
    expect(pingPongOutput(2)).to.equal(2);
  });

  it("is 'ping' for numbers divisible by 3", function() {
    expect(pingPongOutput(6)).to.equal("ping");
  });
});
