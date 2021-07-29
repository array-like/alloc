import test from 'ava';

import {_calloc} from '../../src/index.js';

const macro = (t, TypedArray, n) => {
	const calloc = _calloc(TypedArray);

	const a = calloc(n);

	t.is(a.length, n, 'check length');
	t.true(a instanceof TypedArray, 'check type');
};

macro.title = (title, TypedArray, n) =>
	title ?? `_calloc(${TypedArray.name})(${n})`;

test(macro, Uint8Array, 10);
test(macro, Uint16Array, 133);
test(macro, Int32Array, 27);
