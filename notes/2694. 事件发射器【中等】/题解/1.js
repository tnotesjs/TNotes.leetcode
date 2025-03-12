class EventEmitter {
  constructor() {
    this.handlers = []
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    const eventId = Math.random().toString().slice(2)
    this.handlers.push({eventName, callback, eventId})

    return {
      unsubscribe: () => {
        this.handlers = this.handlers.filter(h => h.eventId !== eventId)
      }
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    const ans = []
    const handlers = this.handlers.filter(h => h.eventName === eventName)
    const len = handlers.length
    if (len === 0) return ans
    for (let i = 0; i < len; i++) ans.push(handlers[i].callback(...args))
    return ans
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */