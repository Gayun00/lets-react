## CH1. render 함수 구현해보기

<br>

### 1. 리액트의 render 함수 이해하기

최종 목표:
render 함수가 무엇인지 이해하고, 이를 구현하는 것이 최종 목표입니다. 이 함수는 Virtual DOM을 실제 DOM으로 변환하여 웹 페이지에 렌더링하는 역할을 합니다.

#### 1.1. 리액트의 render 함수는 어떻게 동작하는가?

먼저, 리액트에서 사용되는 기본 렌더링 방식을 간단히 살펴봅니다.

리액트에서 페이지를 렌더링하기 위해서 render함수를 사용하는 것을 본 적 있나요?
빈 html 요소에 동적으로 요소를 그리기 위해 리액트가 가장 첫 번째로 하는 것은, render 함수의 인자로 렌더링할 최상위 페이지 컴포넌트(보통 App.tsx)와 이 컴포넌트를 렌더링할 html요소를 넣어주는 것입니다.

```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('root'));

```

여기서 중요한 부분은 ReactDOM.render입니다. 이 함수가 Virtual DOM을 실제 DOM에 렌더링합니다.

이 render 함수는 어떻게 이 두 개의 인자값으로 페이지를 렌더링하는 걸까요?

이 첫 번째 궁금증부터 해결해봅시다.

<br>

### 1.2. render 함수 구현하기

트리 구조를 재귀적으로 순회하기: render 함수는 재귀적으로 DOM 트리 구조를 순회해야 합니다. 이를 위해 DOM 트리의 각 노드를 처리하는 과제를 수행할 것입니다.
과제 목표: 주어진 DOM 트리 구조를 순회하여 각 노드를 출력하는 재귀 함수를 구현합니다.

DOM 트리 예시: 아래의 트리 구조를 재귀적으로 순회하여 각 노드를 출력하는 함수를 작성하세요.

리액트는 fiber 아키텍처를 사용하는데, 이 fiber 노드들을 탐색하며 DOM을 생성하게 됩니다. 그리고 요소가 변경되었을 때도 동일한 방식으로 가상 DOM을 만든 뒤 실제 DOM에 반영하게 됩니다.

🧐 fiber가 무엇인지는 나중에 더 자세히 알아보기로 해요!

지금은 이 fiber아키텍처로 만들어진 노드들을 DOM으로 만드는 것이 render함수의 역할이고, 이를 위해서는 재귀적인 동작이 필요하다는 것만 알려줄게요.

쉽고 간단하게 시작해봅시다!

render 함수가 예시로 주어진 노드를 재귀적으로 탐색하도록 로직을 작성해보세요.

```
const domTree = {
  type: 'div',
  props: { id: 'root' },
  children: [
    { type: 'h1', props: { textContent: 'Hello, World!' }, children: [] },
    {
      type: 'p',
      props: { textContent: 'This is a simple example' },
      children: []
    }
  ]
};
```

<br>

### 과제

위의 트리 구조를 재귀적으로 순회하는 renderTree 함수를 작성하고, 각 노드의 type과 props를 출력해보세요.

✅ 테스트 코드를 통과하는지 확인해보세요.
재귀 함수가 제대로 동작하는지 확인해봅니다. 모든 노드를 순회하고, 그 노드의 타입과 속성을 출력하는 것이 목표입니다.
순회 과정: 트리 구조의 루트 노드부터 자식 노드까지 순차적으로 내려가며 작업이 수행되는지 확인합니다.
