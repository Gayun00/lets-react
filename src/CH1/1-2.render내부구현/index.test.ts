import { describe, it, expect, beforeEach } from "vitest";
import { render } from ".";

const virtualDomTree = {
  type: "div",
  props: { id: "root" },
  children: [
    {
      type: "h1",
      props: { textContent: "Hello, World!" },
      children: [],
    },
    {
      type: "p",
      props: { textContent: "This is a simple example" },
      children: [],
    },
  ],
};

let container: HTMLDivElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

describe("render function", () => {
  it("should correctly render a virtual DOM tree into real DOM", () => {
    render(virtualDomTree, container);
    const div = container.querySelector("#root");
    expect(div).not.toBeNull();

    const h1 = div.querySelector("h1");
    expect(h1.textContent).toBe("Hello, World!");

    const p = div.querySelector("p");
    expect(p.textContent).toBe("This is a simple example");
  });
});
