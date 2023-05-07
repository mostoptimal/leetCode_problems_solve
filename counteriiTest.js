describe('createCounter function', () => {
    test('increment should increase the counter by 1', () => {
      const counter = createCounter(0);
      expect(counter.increment()).toBe(1);
      expect(counter.increment()).toBe(2);
    });

    test('decrement should decrease the counter by 1', () => {
      const counter = createCounter(5);
      expect(counter.decrement()).toBe(4);
      expect(counter.decrement()).toBe(3);
    });

    test('reset should set the counter to the initial value', () => {
      const counter = createCounter(10);
      counter.increment();
      counter.increment();
      expect(counter.reset()).toBe(10);
    });
  });
