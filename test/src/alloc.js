import test from 'ava';

import {alloc} from '#module';

test('alloc', (t) => {
	const a = alloc(10);

	t.is(a.length, 10, 'check length');
	t.true(Array.isArray(a), 'check type');
});
