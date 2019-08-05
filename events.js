const EventEmitter = require('events').EventEmitter

const pingPong = new EventEmitter()

setInterval(() => {
  pingPong.emit('channel6', { date: new Date() })
  pingPong.emit('sos', {msg: 'Help me!!'})
}, 1000)

pingPong.once('channel6', data => {
  console.log('Only Once', data)
})

pingPong.once('sos', data => {
  console.log(data.msg)
  console.log("I'm comming to the rescue!!")
})

pingPong.on('channel6', data => {
  console.log('Every second:', data)
})
