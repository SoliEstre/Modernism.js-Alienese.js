## Korean

# Modernism.js & Alienese.js

## 개요
Modernism.js와 Alienese.js는 JavaScript 코드를 더 간결하고 효율적으로 작성할 수 있게 도와주는 유틸리티 라이브러리입니다.   
2025년 Estre Soliette(SoliEstre)에 의해 EstreUI.js의 구성요소로서 작성되었으며 동일하게 MIT 라이센스로 제공됩니다.

## Modernism.js

### 소개
Modernism.js는 JavaScript 코드 작성 방식을 현대화하고 인라인 프로세싱을 위한 다양한 바이패스와 몽키 패치를 제공하는 라이브러리입니다.   
이 라이브러리는 JavaScript 코드를 더 간결하고 표현력 있게 작성하여 코드가 장황해지지 않도록 도와줍니다.   
~~사실 Kotlin에서 잘 쓰던게 없어서 만들었습니다.~~

### 주요 기능
1. **타입 관련 상수**: 기본 타입에 대한 명확한 상수 정의 (`undefined`, `null`, `function` 등)
2. **조건부 실행 유틸리티**: `executeIf`, `ifReturn` 등 조건부 코드 실행을 간소화
3. **반복문 유틸리티**: `forZeroToBefore`, `forBackward`, `forin` 등 다양한 루프 패턴 지원
4. **타입 비교 함수**: `typeOf`, `typeMatch`, `isObject` 등 타입 검사 간소화
5. **케이스 매칭**: `matchCase`, `equalCase`, `typeCase` 등 다양한 조건 분기 패턴
6. **객체 조작 도구**: `copy`, `patch`, `revert` 등 객체 조작 유틸리티
7. **프로토타입 확장**: `it`, `let`, `also` 등 메서드 체이닝을 위한 프로토타입 확장

### 사용 예시
```javascript
// 조건부 실행
let result = executeIf(hour > 10, () => {
    console.log("10시가 지났으므로 알람을 실행합니다.");
    return executeAlarm();
}, () => hour);

// 메서드 체이닝
"Hello".let(it => it.toUpperCase()).let(it => it + "!"); // "HELLO!"

// 타입 케이스 매칭
const result = value.typeCase({
    [STRING]: v => `문자열: ${v}`,
    [NUMBER]: v => `숫자: ${v}`,
    [OBJECT]: v => `객체: ${JSON.stringify(v)}`,
    [UNDEFINED]: _ => "정의되지 않음",
    [NULL]: _ => "null 값",
    [DEFAULT]: v => `기타: ${v}`
});
```

## Alienese.js

### 소개
Alienese.js는 Modernism.js의 확장 라이브러리로, Modernism JS 코드를 더 짧고 간결하게 작성할 수 있도록 다양한 별칭(alias)을 제공합니다.   
코드를 더 암묵적으로 만들어 코드 크기를 줄이고 타이핑에 소요되는 시간을 줄이는 것이 목표입니다.   
~~코드 타이핑하는 시간도 아까워서 만들었습니다. 급할 때 일단 쓰고 나중에 Long name으로 바꾸세요.~~

### 주요 기능
1. **기본 타입 별칭**: `u`(undefined), `n`(null), `t`(true), `f`(false) 등 짧은 별칭
2. **프로토타입 별칭**: `fnc`(Function), `str`(String), `num`(Number) 등
3. **클래스명 별칭**: `ra`(Array), `sa`(Set), `ma`(Map) 등
4. **자주 사용하는 객체 타입**: `DT`(Date), `RA`(Array), `SA`(Set) 등
5. **바이패스 함수 별칭**: `ifx`(executeIf), `val`(valet) 등
6. **루프 함수 별칭**: `ff`(forForward), `fb`(forBackward) 등
7. **정규식 빌더**: `rx`, `reg`, `ri` 등 정규식 생성 유틸리티
8. **특수문자 상수**: `lt`(<), `gt`(>), `eq`(=) 등 특수문자 상수

### 사용 예시
```javascript
// 기본 타입 별칭 사용 (타입 상수)
if (x === u) return n;

// 타입 검사 예시
if (typeOf(value) === STR) {
    console.log("문자열입니다");
}

// 루프 함수 사용
ff(array, (i, v) => {
    console.log(i, v);
});

// 정규식 빌더 사용
const regex = ri(value + "pattern"); // new RegEx(value + pattern, "i")와 동일

// 객체 메서드 바로가기
const keys = ok(myObject); // Object.keys(myObject)와 동일

// 빠른 실행 큐 발생 & 빠른 현재 날짜/시간 획득
pq(time => runZeroDelayed(), dt.n);
// setTimeout(time => runZeroDelayed(), 0, new Date())와 동일
```

## 설치 및 사용법
1. Modernism.js와 Alienese.js(옵션) 파일을 프로젝트에 포함
2. Modernism.js를 먼저 로드한 후 Alienese.js를 로드
3. 필요한 함수와 별칭을 사용하여 코드 작성

## 주의사항
- Alienese.js 사용 시 반드시 Modernism.js를 먼저 로드해야 합니다.
- 간결한 코드 작성을 위한 라이브러리이므로 팀 내에서 사용 시 코드 규칙을 명확히 정의하는 것이 좋습니다.
- 짧은 별칭들은 코드 가독성에 영향을 줄 수 있으므로 사용에 주의가 필요합니다.   
준 난독화 용도에 관심이 없거나 짧은 변수명이 점유되는 것을 원치 않는 경우를 고려하여 Modernism.js만 사용할 수 있도록 분리되어 있습니다.

## 라이센스
MIT License (c) 2025 Estre Soliette (SoliEstre)

---
---

## English

# Modernism.js & Alienese.js

## Overview
Modernism.js and Alienese.js are utility libraries that help write JavaScript code more concisely and efficiently.  
They were created in 2025 by Estre Soliette (SoliEstre) as components of EstreUI.js and are also provided under the MIT license.

## Modernism.js

### Introduction
Modernism.js is a library that modernizes JavaScript code writing styles and provides various bypasses and monkey patches for inline processing.  
This library helps write JavaScript code more concisely and expressively, preventing code from becoming verbose.  
~~Actually, I created it because I missed features I used in Kotlin.~~

### Key Features
1. **Type-related constants**: Clear constant definitions for basic types (`undefined`, `null`, `function`, etc.)
2. **Conditional execution utilities**: Simplifies conditional code execution with `executeIf`, `ifReturn`, etc.
3. **Loop utilities**: Support for various loop patterns such as `forZeroToBefore`, `forBackward`, `forin`, etc.
4. **Type comparison functions**: Simplifies type checking with `typeOf`, `typeMatch`, `isObject`, etc.
5. **Case matching**: Various conditional branching patterns with `matchCase`, `equalCase`, `typeCase`, etc.
6. **Object manipulation tools**: Object manipulation utilities such as `copy`, `patch`, `revert`, etc.
7. **Prototype extensions**: Prototype extensions for method chaining such as `it`, `let`, `also`, etc.

### Usage Examples
```javascript
// Conditional execution
let result = executeIf(hour > 10, () => {
    console.log("It's past 10 o'clock, executing alarm.");
    return executeAlarm();
}, () => hour);

// Method chaining
"Hello".let(it => it.toUpperCase()).let(it => it + "!"); // "HELLO!"

// Type case matching
const result = value.typeCase({
    [STRING]: v => `String: ${v}`,
    [NUMBER]: v => `Number: ${v}`,
    [OBJECT]: v => `Object: ${JSON.stringify(v)}`,
    [UNDEFINED]: _ => "Undefined",
    [NULL]: _ => "Null value",
    [DEFAULT]: v => `Other: ${v}`
});
```

## Alienese.js

### Introduction
Alienese.js is an extension library for Modernism.js that provides various aliases to write Modernism JS code more shortly and concisely.  
Its goal is to make code more implicit, reducing code size and time spent on typing.  
~~I made this because I didn't want to waste time typing code. Use it when you're in a hurry, then change to long names later.~~

### Key Features
1. **Basic type aliases**: Short aliases like `u`(undefined), `n`(null), `t`(true), `f`(false), etc.
2. **Prototype aliases**: `fnc`(Function), `str`(String), `num`(Number), etc.
3. **Class name aliases**: `ra`(Array), `sa`(Set), `ma`(Map), etc.
4. **Commonly used object types**: `DT`(Date), `RA`(Array), `SA`(Set), etc.
5. **Bypass function aliases**: `ifx`(executeIf), `val`(valet), etc.
6. **Loop function aliases**: `ff`(forForward), `fb`(forBackward), etc.
7. **Regular expression builder**: Regular expression creation utilities like `rx`, `reg`, `ri`, etc.
8. **Special character constants**: Special character constants like `lt`(<), `gt`(>), `eq`(=), etc.

### Usage Examples
```javascript
// Basic type alias usage (type constants)
if (x === u) return n;

// Type checking example
if (typeOf(value) === STR) {
    console.log("This is a string");
}

// Loop function usage
ff(array, (i, v) => {
    console.log(i, v);
});

// Regular expression builder usage
const regex = ri(value + "pattern"); // Equivalent to new RegEx(value + pattern, "i")

// Object method shortcuts
const keys = ok(myObject); // Equivalent to Object.keys(myObject)

// Quick execution queue & fast current date/time acquisition
pq(time => runZeroDelayed(), dt.n);
// Equivalent to setTimeout(time => runZeroDelayed(), 0, new Date())
```

## Installation and Usage
1. Include Modernism.js and Alienese.js (optional) files in your project
2. Load Modernism.js first, then Alienese.js
3. Write code using the necessary functions and aliases

## Precautions
- When using Alienese.js, Modernism.js must be loaded first.
- As this is a library for concise code writing, it's advisable to clearly define code rules when used within a team.
- Short aliases can affect code readability, so caution is needed when using them.  
The libraries are separated so that you can use only Modernism.js if you're not interested in semi-obfuscation purposes or don't want short variable names to be occupied.

## License
MIT License (c) 2025 Estre Soliette (SoliEstre)