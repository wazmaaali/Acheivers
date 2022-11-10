import { check } from "../db.js";
import { dataCheckVal } from "../db.js";
import { value } from "../db.js";
import { subCatvalue } from "../db.js";

const a = { id: 3, c_name: "MEAT", c_img: "category-3.png" };
test("if service instance is created", () => {
  expect(true).toBe(true);
});
test("the data is peanut butter", async () => {
  const data = await check();
  expect(data).toBe(true);
});

test("if service instance is created", () => {
  expect(dataCheckVal()).toBe(true);
});

test("if service instance is created", () => {
  expect(value().length).toEqual(6);
});

test("if service instance is created", () => {
  expect(value()[2]).toEqual(a);
});

test("if service instance is created", () => {
  expect(subCatvalue().length).toEqual(6);
});
