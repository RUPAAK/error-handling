describe("testing first", () => {
  test("if 2 same as 2", () => {
    expect(2).toEqual(2);
  });

  it("should sho that ram isnot same as Ram", () => {
    expect("ram").not.toEqual("Ram");
  });
});
