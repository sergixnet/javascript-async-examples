const error = false // dont do this in production

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

// sleep(1000)
//   .then(ms => console.log(`I was sleeping for ${ms} ms`))
//   .catch(err => console.warn(err.msg))

// Promise.all([sleep(1000), sleep(2000), sleep(300)])
//   .then(responses =>
//     console.log(`Finished ${responses.length} steps in parallel.`)
//   )
//   .catch(err => console.warn(err.msg))

Promise.race([sleep(1000), sleep(1200), sleep(300)])
  .then(ms => console.log(`The winner of the race in ${ms} ms.`))
  .catch(err => console.warn(err.msg))
