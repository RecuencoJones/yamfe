# Yet another Microfrontend PoC

## Goals

- Deploy modules independently
- Lazy loading/activation of components

Inspired by [`single-spa`](https://single-spa.js.org/) module.

## About the example

There are 4 microfrontends served separately here:

- [`navbar`](./apps/navbar): Global header for all app
- [`landing`](./apps/landing): Landing page
- [`browse`](./apps/browse): Browse products page
- [`product`](./apps/product): Single product page (also loads nested `browse` page in the footer)

These microfrontends are loaded on demand by the parent [`orchestrator`](./orchestrator) application.

A common library for loading microfrontend was extracted and created bindings for both react and vue:

- [`commons/module-loader`](./commons/module-loader)
- [`commons/module-loader-react`](./commons/module-loader-react)
- [`commons/module-loader-vue`](./commons/module-loader-vue)

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

Requires `caddy` v2 (check https://github.com/caddyserver/caddy/releases)

```
wget -O caddy2 https://github.com/caddyserver/caddy/releases/download/v2.0.0-beta.13/caddy2_beta_13_<your-distribution>
chdmod +x ./caddy2
```

Then run

```
./caddy2 run
```
