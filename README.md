# Yet another Microfrontend PoC

## Goals

- Deploy modules independently
- Lazy loading/activation of components

Inspired by [`single-spa`](https://single-spa.js.org/) module.

## About the example

There are 5 microfrontends served separately here:

- [`navbar (vue)`](./apps/navbar): Global header for all app
- [`product (vue)`](./apps/product): Single product page (also loads nested `browse` page in the footer)
- [`browse (react)`](./apps/browse): Browse products page
- [`landing (react)`](./apps/landing): Landing page
- [`basket (svelte)`](./apps/basket): Basket page

These microfrontends are loaded on demand by the parent [`orchestrator`](./orchestrator) application.

A common library for loading microfrontend was extracted and created bindings for both `react` and `vue`:

- [`commons/module-loader`](./commons/module-loader)
- [`commons/module-loader-react`](./commons/module-loader-react)
- [`commons/module-loader-vue`](./commons/module-loader-vue)

## Building

```
npm install
npm run build
```

## Serve

### Shipped caddy

```
npm run serve:front
```

Then, on another terminal run:

```
npm run serve:back
```

### Own Caddy binary

Requires `caddy` v2 (check https://github.com/caddyserver/caddy/releases)

```
wget -O caddy2 https://github.com/caddyserver/caddy/releases/download/v2.0.0-beta.13/caddy2_beta_13_<your-distribution>
chdmod +x ./caddy2
```

Then run

```
./caddy2 run
```

Then, on another terminal run:

```
npm run serve:back
```
