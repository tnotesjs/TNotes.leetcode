type F = (x: number) => number;

function compose(functions: F[]): F {

	return function(x) {
    let ans: number = 0, i = functions.length - 1

    while (i >= 0) {
      const func = functions[i]
      ans = ans ? func(ans) : func(x)
      i--
    }

    return ans ? ans : x
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */