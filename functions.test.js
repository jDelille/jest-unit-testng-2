const functions = require("./functions");

// to be
test("Testing add function", () => {
  expect(functions.add(2, 4)).toBe(6);
});

// to be null
test("Is null", () => {
  expect(functions.isNull()).toBeNull();
});

// to be falsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
// can't use toBe for objects, need to use toEqual
test("User should be Justin Delille object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Justin",
    lastName: "Delille",
  });
});

// less than / greater than
// can put logic in seperate file or this file
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

// Arrays
test("Admin should be in username", () => {
  usernames = ["justin", "jackblack", "admin"];
  expect(usernames).toContain("admin");
});

// working with async data

// Promise
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async Await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
