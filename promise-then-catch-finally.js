const error = true // this is to simulate an error, dont do it in production

function sleep(ms) {
  console.log('Sleeping...')
  return new Promise((resolve, reject) => {
    if (error) {
      return reject({ msg: 'there was an error' })
    } else {
      setTimeout(() => {
        resolve(ms)
      }, ms)
    }
  })
}

console.log('Step 1')

sleep(1500)
  .then(ms => console.log(`I was sleeping for ${ms} ms.`))
  .catch(err => console.log(err.msg))
  .finally(() => console.log('This executes finally'))

console.log('Step 2')
