export const render = (node: Node, types: string[] = []) => {
  if (node) types.push(node.type);

  if (node.children && node.children.length > 0) {
    node.children.forEach((child) => render(child, types));
  }

  return types;
};
