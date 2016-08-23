import test from 'ava';
import fn from './';

test(t => {
	t.true(fn(new Date()));
	t.false(fn({}));
	t.false(fn([]));
	t.false(fn(null));
});
