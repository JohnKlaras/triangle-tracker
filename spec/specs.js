describe('triangle', function() {
  it("determines if 3 sides create a valid triangle", function() {
    expect(triangle(2,2,10)).to.equal("This is not a triangle")
  });

  it("is equilateral if all sides are equal", function() {
    expect(triangle(4,4,4)).to.equal("Thats an equilateral triangle.")
  });

  it("is scalene if no sides are equal", function() {
    expect(triangle(4,5,6)).to.equal("That's a scalene triangle!")
  });

  it("is isosceles if exactly two sides are equal", function() {
    expect(triangle(4,4,6)).to.equal("Thats an isosceles triangle.")
  });
});
