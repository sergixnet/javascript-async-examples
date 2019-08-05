function step2() {
  console.log('Step 2, delayed in a callback...')
}
console.log('Step 1')
setTimeout(step2, 1000)
console.log('Step 3');
console.log('Finish??')