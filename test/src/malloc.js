import test from 'ava';

import {malloc} from '../../src/index.js';

test('malloc', (t) => {
	const a = malloc(10);

	t.is(a.byteLength, 10, 'check length');
	t.true(a instanceof ArrayBuffer, 'check type');
});
