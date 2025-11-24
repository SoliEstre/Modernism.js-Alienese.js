# Modernism.js

[English](#modernismjs) | [한국어](#modernismjs-한국어)

**Modernism.js** is a comprehensive JavaScript patch library that brings modern language features, utility shortcuts, and expressive "monkey patching" capabilities to standard JavaScript. It aims to make your code more concise, readable, and functional by providing a rich set of global aliases, prototype extensions, and helper functions.

> **Note:** This library modifies the global scope and built-in prototypes (`Object`, `Function`, etc.) to provide a seamless, "language-level" experience.

## Installation

```bash
npm install modernism
```

## Features

### 1. Global Type & Value Aliases
Standardize and shorten common values and type names.

*   **Values:** `UNDEFINED` ("undefined"), `NULL` ("null"), `TRUE` ("true"), `FALSE` ("false")
*   **Types:** `FUNCTION` ("function"), `BOOLEAN` ("boolean"), `STRING` ("string"), `NUMBER` ("number"), `OBJECT` ("object"), `SYMBOL` ("symbol"), `BIGINT` ("bigint")

### 2. Powerful Flow Control
Functional alternatives to standard control flow statements.

*   `executeIf(condition, action, args, elseAction)`
*   `ifReturn(condition, value, elseValue)`
*   `valet(value, processor)`: Process a value and return the result.

### 3. Loop Shortcuts
Concise helpers for common iteration patterns.

*   `forin(obj, (key, value) => ...)`
*   `forof(iterable, value => ...)`
*   `forZeroToBefore(n, i => ...)`: Loop from 0 to n-1.
*   `forToZeroFrom(n, i => ...)`: Loop from n down to 0.

### 4. Robust Type Checking
Consistent and reliable type checking functions.

*   `typeOf(value)`: Returns accurate type strings (handles `null` correctly as `"null"`).
*   `isObject(value)`, `isArray(value)`, `isString(value)`, `isNumber(value)`
*   `isNully(value)`: Checks for `null` or `undefined`.
*   `isEmpty(value)`: Checks for empty strings, arrays, objects, or specific numbers.

### 5. Object Manipulation & Copying
Advanced tools for handling objects.

*   `copy(obj, ...)`: Deep or shallow copy.
*   `patch(target, source, ...)`: Smart object patching/merging.
*   `revert(target, source, ...)`: Revert object state.
*   `keysOf(obj)`, `valuesOf(obj)`, `entriesOf(obj)`

### 6. Prototype Extensions (The "Modern" Touch)
Modernism extends `Object.prototype` to allow method chaining and functional patterns on *any* object.

*   **.let(callback)**: Scoping function. Executes callback with `this` and returns the result.
    ```javascript
    const result = { a: 1 }.let(it => it.a + 10); // 11
    ```
*   **.also(callback)**: Side-effect function. Executes callback and returns `this`.
    ```javascript
    const obj = { a: 1 }.also(it => console.log(it)); // logs obj, returns obj
    ```
*   **.copy()**: Instance method for copying.
*   **.if(condition, action)**: Conditional execution chain.
*   **.matchCase(cases)**: Pattern matching-like syntax.

## Usage Example

```javascript
require('modernism');

// Type checking
const data = { id: 1, name: "Estre" };
if (isObject(data) && isNotNully(data.name)) {
    console.log("Valid data");
}

// Functional chaining
const processed = data
    .copy() // Deep copy by default
    .also(it => it.updated = TRUE) // Modify copy
    .let(it => it.name); // Return name

console.log(processed); // "Estre"

// Pattern matching
const status = "active";
const message = matchCase(status, {
    "active": () => "System is running",
    "inactive": () => "System is down",
    [DEFAULT]: () => "Unknown status"
});
```

## License

MIT License

---

# Modernism.js (한국어)

**Modernism.js**는 표준 자바스크립트에 현대적인 언어 기능, 유틸리티 단축어, 그리고 표현력 있는 "몽키 패칭(Monkey Patching)" 기능을 제공하는 포괄적인 자바스크립트 패치 라이브러리입니다. 풍부한 전역 별칭, 프로토타입 확장, 헬퍼 함수들을 통해 코드를 더 간결하고 가독성 높게 만드는 것을 목표로 합니다.

> **참고:** 이 라이브러리는 전역 스코프와 내장 프로토타입(`Object`, `Function` 등)을 수정하여 마치 언어 차원에서 지원하는 듯한 매끄러운 경험을 제공합니다.

## 설치

```bash
npm install modernism
```

## 주요 기능

### 1. 전역 타입 및 값 별칭 (Global Aliases)
자주 사용되는 값과 타입 이름을 표준화하고 단축합니다.

*   **값:** `UNDEFINED` ("undefined"), `NULL` ("null"), `TRUE` ("true"), `FALSE` ("false")
*   **타입:** `FUNCTION` ("function"), `BOOLEAN` ("boolean"), `STRING` ("string"), `NUMBER` ("number"), `OBJECT` ("object"), `SYMBOL` ("symbol"), `BIGINT` ("bigint")

### 2. 강력한 흐름 제어 (Flow Control)
표준 제어문을 대체할 수 있는 함수형 도구들입니다.

*   `executeIf(조건, 동작, 인자, 대체동작)`
*   `ifReturn(조건, 값, 대체값)`
*   `valet(값, 처리기)`: 값을 가공하여 반환합니다.

### 3. 루프 단축 (Loop Shortcuts)
반복적인 루프 패턴을 위한 간결한 헬퍼입니다.

*   `forin(객체, (키, 값) => ...)`
*   `forof(반복가능객체, 값 => ...)`
*   `forZeroToBefore(n, i => ...)`: 0부터 n-1까지 반복.
*   `forToZeroFrom(n, i => ...)`: n부터 0까지 역순 반복.

### 4. 강력한 타입 체크 (Type Checking)
일관성 있고 신뢰할 수 있는 타입 검사 함수들입니다.

*   `typeOf(값)`: 정확한 타입 문자열을 반환합니다 (`null`을 `"null"`로 정확히 처리).
*   `isObject(값)`, `isArray(값)`, `isString(값)`, `isNumber(값)`
*   `isNully(값)`: `null` 또는 `undefined`인지 확인.
*   `isEmpty(값)`: 빈 문자열, 배열, 객체 또는 특정 숫자인지 확인.

### 5. 객체 조작 및 복사 (Object Manipulation)
객체를 다루기 위한 고급 도구들입니다.

*   `copy(객체, ...)`: 깊은(Deep) 또는 얕은(Shallow) 복사.
*   `patch(대상, 소스, ...)`: 스마트한 객체 병합/패치.
*   `revert(대상, 소스, ...)`: 객체 상태 되돌리기.
*   `keysOf(객체)`, `valuesOf(객체)`, `entriesOf(객체)`

### 6. 프로토타입 확장 (Prototype Extensions)
Modernism은 `Object.prototype`을 확장하여 *모든* 객체에서 메서드 체이닝과 함수형 패턴을 사용할 수 있게 합니다.

*   **.let(콜백)**: 스코핑 함수. `this`를 인자로 콜백을 실행하고 결과를 반환합니다.
    ```javascript
    const result = { a: 1 }.let(it => it.a + 10); // 11
    ```
*   **.also(콜백)**: 부수 효과(Side-effect) 함수. 콜백을 실행하고 `this`를 다시 반환합니다.
    ```javascript
    const obj = { a: 1 }.also(it => console.log(it)); // obj 출력, obj 반환
    ```
*   **.copy()**: 인스턴스 복사 메서드.
*   **.if(조건, 동작)**: 조건부 실행 체인.
*   **.matchCase(케이스)**: 패턴 매칭과 유사한 문법.

## 사용 예시

```javascript
require('modernism');

// 타입 체크
const data = { id: 1, name: "Estre" };
if (isObject(data) && isNotNully(data.name)) {
    console.log("유효한 데이터");
}

// 함수형 체이닝
const processed = data
    .copy() // 기본적으로 깊은 복사
    .also(it => it.updated = TRUE) // 복사본 수정
    .let(it => it.name); // 이름 반환

console.log(processed); // "Estre"

// 패턴 매칭
const status = "active";
const message = matchCase(status, {
    "active": () => "시스템 가동 중",
    "inactive": () => "시스템 중지됨",
    [DEFAULT]: () => "알 수 없는 상태"
});
```

## 라이선스

MIT License
