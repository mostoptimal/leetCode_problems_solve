function once(fn) {
  let result;
  let hasBeenCalled = false;

  return function () {
    if (!hasBeenCalled) {
      result = fn.apply(this, arguments);
      hasBeenCalled = true;
      return result;
    }
  };
}
