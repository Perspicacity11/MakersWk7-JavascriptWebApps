/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const CounterModel = require("./counterModel");
const CounterView = require("./counterView");

describe("Counter view", () => {
  document.body.innerHTML = fs.readFileSync("./index.html");

  it("displays initial value 0", () => {
    const model = new CounterModel();
    const view = new CounterView(model);
    view.display();

    expect(document.querySelector("#counter").textContent).toBe("0");
  });

  it("displays value 2 after 2 clicks", () => {
    const model = new CounterModel();
    const view = new CounterView(model);
    view.display();

    document.querySelector("#increment-btn").click();
    document.querySelector("#increment-btn").click();

    expect(document.querySelector("#counter").textContent).toBe("2");
  });
});
