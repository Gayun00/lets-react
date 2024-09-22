const updateDOM = (dom, props) => {
  Object.keys(props).forEach((name) => {
    if (name === "children") return;
    if (name === "textContent") {
      dom.textContent = props[name];
    } else {
      dom.setAttribute(name, props[name]);
    }
  });
};

/**
 *
 * @param fiberNode
 * @returns
 */

const createDOM = (fiberNode: { type: string; props: any }) => {
  const { type, props } = fiberNode;
  let DOM = null;

  if (type === "TEXT") {
    DOM = document.createTextNode("");
  } else if (typeof type === "string") {
    DOM = document.createElement(type);
  }

  if (DOM !== null && props) {
    updateDOM(DOM, props);
  }

  return DOM;
};

/**
 * [ ] 재귀 호출이 되어야 합니다.
 * [ ] 재귀 호출이 될 때마다 각각의 노드를 인자로 받는 createDOM()을 호출해 DOM으로 만들어야 합니다.
 * [ ] 만들어진 DOM은 container 요소에 순서대로 자식 요소로 삽입되어야 합니다.
 * @param element
 * @param container
 */

export const render = (element, container) => {
  const DOM = createDOM(element);
  if (Array.isArray(element.children)) {
    for (const child of element.children) {
      render(child, DOM);
    }
  }

  container.appendChild(DOM);
};
