function f1({ p1, p3, ...rest }) {
  console.log({ p1, p3, rest });
}
f1({ p1: 'a', p3: 'b' });
f1({ p1: 'a', p2: 'b', p3: 'c', p4: 'd' });

// { p1: 'a', p3: 'b', rest: {} }
// { p1: 'a', p3: 'c', rest: { p2: 'b', p4: 'd' } }
