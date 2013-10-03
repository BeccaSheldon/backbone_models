describe("DummyView", function () {
  var dummyView;

  beforeEach(function () {
    dummyView = new DummyView();
  });

  it("has an initialized value", function () {
    expect( dummyView.bar ).toEqual('init val');
  });

});
