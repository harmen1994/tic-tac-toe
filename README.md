# tic-tac-toe

## Introduction

This is a simple tic-tac-toe game implemented in Svelte. It is a bot vs bot game.
The UI is implemented using Svelte and the game logic is implemented in TypeScript/JavaScript.
All TypeScript logic will be tested trough Vitest, since we will use that in our upcoming project

## How it was set up

Since I want to reuse this documentation for future projects, I documented the setup process here.

### Install Svelte

```bash
npm create vite@latest . -- --template svelte-ts
# Ignore files and continue
```

### Add vitest

```bash
npm install --save-dev vitest @testing-library/svelte
```