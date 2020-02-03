# Yet another Microfrontend PoC

## Goals

- Deploy modules independently
- Lazy loading/activation of components

Inspired by [`single-spa`](https://single-spa.js.org/) module.

## Building

### Commons

```
alias _pack="npm install && npm build && npm pack"
cd commons/module-loader
_pack
cd ../module-loader-react
_pack
cd ../module-loader-vue
_pack
```

### Apps

```
alias _build="npm install && npm build"
cd apps/browse
_build
cd apps/landing
_build
cd apps/navbar
_build
cd apps/product
_build
```

### Orchestrator

```
cd orchestrator
npm install
npm build
```

## Serve

```
caddy2 run
```
