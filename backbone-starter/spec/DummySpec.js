describe("Dummy", function () {
  var dummy;

  beforeEach(function () {
    dummy = new Dummy();
  });

  it("has a default value", function () {
    expect( dummy.get('foo') ).toEqual('default val');
  });

});
