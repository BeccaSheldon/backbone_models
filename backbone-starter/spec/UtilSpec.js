describe("utility functions", function () {

  describe("#uselessMath", function () {

    it("returns the sum and product", function () {
      var result = _.uselessMath(3, 4, 7);
      expect(result).toEqual(31);
    });
  });

});
