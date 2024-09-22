interface Node {
  type: string;
  props: {
    [key: string]: any;
  };
  children: Node[];
}

export const render = (node: Node, types: string[] = []) => {
  // render 함수가 재귀적으로 동작하도록 만들어야 합니다.
  // 테스트를 통과하도록 내부로직을 작성해보세요.
  if (node) types.push(node.type);

  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      render(child, types);
    }
  }

  return types;
};
