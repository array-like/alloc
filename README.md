:seat: [@array-like/alloc](https://array-like.github.io/alloc)
==

`ArrayLike` allocation helper functions for JavaScript.
See [docs](https://array-like.github.io/alloc/index.html).

```js
import {alloc, malloc, _calloc} from '@array-like/alloc';

alloc(10); // Array
malloc(10); // ArrayBuffer
const calloc = _calloc(Int32Array);
calloc(10); // Int32Array
```

[![License](https://img.shields.io/github/license/array-like/alloc.svg)](https://raw.githubusercontent.com/array-like/alloc/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@array-like/alloc.svg)](https://www.npmjs.org/package/@array-like/alloc)
[![Tests](https://img.shields.io/github/actions/workflow/status/array-like/alloc/ci.yml?branch=main&event=push&label=tests)](https://github.com/array-like/alloc/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/array-like/alloc.svg)](https://github.com/array-like/alloc/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/array-like/alloc.svg)](https://github.com/array-like/alloc/issues)
[![Downloads](https://img.shields.io/npm/dm/@array-like/alloc.svg)](https://www.npmjs.org/package/@array-like/alloc)

[![Code issues](https://img.shields.io/codeclimate/issues/array-like/alloc.svg)](https://codeclimate.com/github/array-like/alloc/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/array-like/alloc.svg)](https://codeclimate.com/github/array-like/alloc/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/array-like/alloc/main.svg)](https://codecov.io/gh/array-like/alloc)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/array-like/alloc.svg)](https://codeclimate.com/github/array-like/alloc/trends/technical_debt)
[![Documentation](https://array-like.github.io/alloc/badge.svg)](https://array-like.github.io/alloc/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@array-like/alloc)](https://bundlephobia.com/result?p=@array-like/alloc)
