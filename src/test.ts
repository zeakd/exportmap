import test from 'ava';
import { resolve, normalize, validate } from './index.js';

test('foo', t => {
	t.pass();
});

test('resolve', async t => {
	t.is(resolve('asdf'), 'asdf');
});

test('normalize', async t => {
	t.is(normalize('asdf'), 'asdf');
});

test('validate', async t => {
	t.is(validate('adsf'), false);
});
