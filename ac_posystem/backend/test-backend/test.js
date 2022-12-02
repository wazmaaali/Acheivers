import { check } from "../dummy-function.js";
import { dataCheckVal } from "../dummy-function.js";
import { value } from "../dummy-function.js";
import { subCatvalue } from "../dummy-function.js";

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

test("GET /categories", async () => {
  const res = await request(app).get("/categories");
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBeGreaterThan(0);
});
