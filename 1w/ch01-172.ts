function doSomthing(cb: unknown) {
  if (typeof cb === 'function') {
    cb();
    return;
  }
  
  throw new Error("cb 은 함수여야 합니다!");
}

doSomthing(1);