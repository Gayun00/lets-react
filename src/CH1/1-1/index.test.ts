import { describe, it, expect } from "vitest";
import { render } from ".";

const domTree = {
  type: "div",
  props: { id: "root" },
  children: [
    { type: "h1", props: { textContent: "Hello, World!" }, children: [] },
    {
      type: "p",
      props: { textContent: "This is a simple example" },
      children: [],
    },
  ],
};

describe("render function", () => {
  it("should traverse the DOM tree and collect the correct node types", () => {
    const expectedTypes = ["div", "h1", "p"];
    const actualTypes = render(domTree);

    expect(actualTypes).toEqual(expectedTypes);
  });
});
