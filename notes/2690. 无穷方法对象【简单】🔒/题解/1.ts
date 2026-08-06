function createInfiniteObject(): Record<string, () => string> {
  return new Proxy({}, {
    get(target, prop) {
      if (typeof prop === 'string') return () => prop
    }
  })
}

/**
 * const obj = createInfiniteObject();
 * obj['abc123'](); // "abc123"
 */