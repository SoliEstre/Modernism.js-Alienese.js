# Alienese.js

[English](#alienesejs) | [한국어](#alienesejs-한국어)

**Alienese.js** is an extreme alias library built on top of **Modernism.js**. It provides ultra-short, cryptic (Alienese-like) aliases for almost every common JavaScript keyword, type, and function defined in Modernism.

It is designed for developers who prefer **extreme brevity**, **implicitness**, or are participating in **code golf**. It serves as a form of "readable obfuscation" where code becomes incredibly dense but remains logically structured thanks to Modernism's foundation.

> **Dependency:** Installing `alienese` automatically installs and loads `modernism`.

## Installation

```bash
npm install alienese
```

## Features & Aliases

Alienese maps Modernism's verbose functions to 1-3 letter aliases.

### 1. Primitives & Constants
*   `U` = `UNDEFINED` ("undefined") / `u` = `undefined`
*   `N` = `NULL` ("null") / `n` = `null`
*   `T` = `TRUE` ("true") / `t` = `true`
*   `F` = `FALSE` ("false") / `f` = `false`

### 2. Types
*   `FNC` = `FUNCTION` ("function")
*   `STR` = `STRING` ("string")
*   `NUM` = `NUMBER` ("number")
*   `OBJ` = `OBJECT` ("object")
*   `BLE` = `BOOLEAN` ("boolean")

### 3. Type Checking
*   `to` = `typeOf`
*   `io` = `isObject`
*   `ia` = `isArray`
*   `is` = `isString`
*   `in` = `isNumber`
*   `en` = `isNully` (Undefined/Null)
*   `nn` = `isNotNully` (Not Undefined/Null)

### 4. Flow Control & Loops
*   `ifx` = `executeIf`
*   `dr` = `doAndReturn`
*   `fi` = `forin`
*   `fo` = `forof`
*   `w` = `whileIn`

### 5. Object Methods
*   `cp` = `copy`
*   `pc` = `patch`
*   `ok` = `keysOf`
*   `ov` = `valuesOf`
*   `oe` = `entriesOf`

### 6. Prototype Extensions (Shortcuts)
Objects inherit these short methods:
*   `.cp()` = `.copy()`
*   `.pc()` = `.patch()`
*   `.rv()` = `.revert()`
*   `.dr()` = `.doAndReturn()`

## Comparison

**Standard JavaScript / Modernism:**
```javascript
if (isObject(data) && isNotNully(data)) {
    const copy = copy(data);
    keysOf(copy).forEach(key => {
        console.log(key);
    });
}
```

**Alienese:**
```javascript
require('alienese');

if (io(data) && nn(data)) {
    const c = cp(data);
    ok(c).forEach(k => {
        console.log(k);
    });
}
```

## License

MIT License

---

# Alienese.js (한국어)

**Alienese.js**는 **Modernism.js**를 기반으로 구축된 극단적인 단축어(Alias) 라이브러리입니다. Modernism에 정의된 거의 모든 일반적인 자바스크립트 키워드, 타입, 함수들에 대해 외계어(Alienese)처럼 짧고 암호 같은 별칭을 제공합니다.

이 라이브러리는 **극도의 간결함**과 **함축성**을 선호하거나, **코드 골프(Code Golf)**를 즐기는 개발자를 위해 설계되었습니다. 코드가 믿을 수 없을 정도로 압축되어 "읽을 수 있는 난독화" 형태가 되지만, Modernism의 기반 덕분에 논리적인 구조는 유지됩니다.

> **의존성:** `alienese`를 설치하면 `modernism`이 자동으로 설치되고 로드됩니다.

## 설치

```bash
npm install alienese
```

## 기능 및 별칭 (Aliases)

Alienese는 Modernism의 긴 함수 이름들을 1~3글자의 별칭으로 매핑합니다.

### 1. 원시값 및 상수
*   `U` = `UNDEFINED` ("undefined") / `u` = `undefined`
*   `N` = `NULL` ("null") / `n` = `null`
*   `T` = `TRUE` ("true") / `t` = `true`
*   `F` = `FALSE` ("false") / `f` = `false`

### 2. 타입
*   `FNC` = `FUNCTION` ("function")
*   `STR` = `STRING` ("string")
*   `NUM` = `NUMBER` ("number")
*   `OBJ` = `OBJECT` ("object")
*   `BLE` = `BOOLEAN` ("boolean")

### 3. 타입 체크
*   `to` = `typeOf`
*   `io` = `isObject`
*   `ia` = `isArray`
*   `is` = `isString`
*   `in` = `isNumber`
*   `en` = `isNully` (Undefined나 Null)
*   `nn` = `isNotNully` (Undefined나 Null 아님)

### 4. 흐름 제어 및 루프
*   `ifx` = `executeIf`
*   `dr` = `doAndReturn`
*   `fi` = `forin`
*   `fo` = `forof`
*   `w` = `whileIn`

### 5. 객체 메서드
*   `cp` = `copy`
*   `pc` = `patch`
*   `ok` = `keysOf`
*   `ov` = `valuesOf`
*   `oe` = `entriesOf`

### 6. 프로토타입 확장 (단축형)
모든 객체는 다음의 짧은 메서드들을 상속받습니다:
*   `.cp()` = `.copy()`
*   `.pc()` = `.patch()`
*   `.rv()` = `.revert()`
*   `.dr()` = `.doAndReturn()`

## 비교 예시

**표준 자바스크립트 / Modernism:**
```javascript
if (isObject(data) && isNotNully(data)) {
    const copy = copy(data);
    keysOf(copy).forEach(key => {
        console.log(key);
    });
}
```

**Alienese:**
```javascript
require('alienese');

if (io(data) && nn(data)) {
    const c = cp(data);
    ok(c).forEach(k => {
        console.log(k);
    });
}
```

## 라이선스

MIT License
