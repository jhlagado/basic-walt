import makeCounter from './walt/counter.walt'

makeCounter().then(wasmModule => {
    const v = 400000;
    timing('count', () => wasmModule.instance.exports.count(v));
    timing('countjs', () => countjs(v));
})

function countjs(v) {
    let j = v;
    while (j > 0) {
      j -= 1;
      let i = v;
      while (i > 0) {
          i -= 1;
      }
    }
    return 0;
  }

function timing(name, func) {
    let t0 = performance.now();
    let result = func();
    let t1 = performance.now();
    console.log(`Call to ${name} took ${t1 - t0} milliseconds.`);
    console.log(`Result ${result}`);
}