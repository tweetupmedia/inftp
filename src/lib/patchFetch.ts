// Polyfill/guard to ensure window.fetch has both a getter and setter.
// This prevents "TypeError: Cannot set property fetch of #<Window> which has only a getter"
// in sandboxed iframes, browser extensions, or preview containers that attempt to wrap or stub window.fetch.

if (typeof window !== 'undefined') {
  try {
    const nativeFetch = window.fetch;
    let _currentFetch: any = typeof nativeFetch === 'function' ? nativeFetch.bind(window) : nativeFetch;

    const patchTarget = (target: any) => {
      if (!target) return;
      try {
        const descriptor = Object.getOwnPropertyDescriptor(target, 'fetch');
        if (!descriptor || descriptor.configurable !== false) {
          Object.defineProperty(target, 'fetch', {
            get() {
              return _currentFetch;
            },
            set(newVal: any) {
              _currentFetch = newVal;
            },
            configurable: true,
            enumerable: true
          });
        }
      } catch {
        // Ignore descriptor restrictions
      }
    };

    patchTarget(window);
    if (typeof Window !== 'undefined' && Window.prototype) {
      patchTarget(Window.prototype);
    }
  } catch {
    // Fail-safe
  }
}

export {};
