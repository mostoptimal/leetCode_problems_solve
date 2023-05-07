describe('once function', () => {
  test('should call the original function only once', () => {
    const fn = jest.fn((a, b) => a + b);
    const fnOnce = once(fn);

    expect(fnOnce(1, 2)).toBe(3);
    expect(fnOnce(3, 4)).toBeUndefined();

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(1, 2);
  });
});
