# AGENTS.md — Modernism.js + Alienese.js

> 이 파일은 monorepo 루트에 있다. 루트 `package.json` 이 `private: true` 이므로 npm 배포 아티팩트에 포함되지 않는다. 서브 `packages/*` 디렉터리의 publish 와도 무관 (각 서브 패키지의 파일만 publish 됨).

이 워크스페이스는 EstreUI.js 생태계의 **Modernism + Alienese 모노레포 (`mod-ali`)** 파트이다. 두 독립 npm 패키지(`modernism`, `alienese`) 를 하나의 리포에서 관리.
파트 간 조율은 별도 워크스페이스인 **"EstreUI.js common workspace"** 에서 관리된다.

## 허브 진입

- 허브 이름: `EstreUI.js common workspace`
- 읽을 파일:
  - 허브 AGENTS.md (허브 루트)
  - 이 파트의 메타: `.agent/parts/modernism-alienese.md` (허브 내)
  - 현재 작업 보드: `.agent/_coordination/STATE.md` (허브 내)

## 허브에 위임하는 것

- 파트 간 인터페이스 계약 (`_contracts/`)
- 동시 작업 조율 (`_coordination/`)
- 파트 간 비동기 질의 (`_questions/`)
- 파트 공통 교훈 (`_lessons/`)

## 이 워크스페이스에서 관리

- `packages/modernism/` — npm `modernism` 패키지 (폴리필)
- `packages/alienese/` — npm `alienese` 패키지 (짧은 식별자·패치)
- `test.js`, `README.md`, `LICENSE`
- monorepo 루트 `package.json` (private, workspaces 선언)

## 배포 프로세스

각 서브 패키지는 개별 publish:

```bash
# modernism
cd packages/modernism
npm publish

# alienese
cd packages/alienese
npm publish
```

서브 패키지 publish 시 해당 디렉터리의 파일만 포함됨. 루트의 `AGENTS.md` 등은 자동으로 제외됨 — 별도 `.npmignore` 불필요.

## 언어

대화·문서는 한국어. 허브 규약은 허브 AGENTS.md 참조.

## 커밋 규약

이 워크스페이스는 자체 git 리포를 보유. 커밋 시 `[ModAli][태그] 제목` 형식 권장.
