export default function tester(inFunc) => {
  const assersions = [
    ['1twothreefour5', [1, 5]],
['awodiioj2', [2, 2]],
['zeroneighthree', [0, 3]],
['123four', [1, 4]]
  ]


assersions.forEach((v, i) => {
  console.log(`Test ${i}: ${inFunc(v[0]) === v[1] ? 'Passed' : 'Failed'}`)
});

}
