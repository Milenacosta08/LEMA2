const { EventEmitter} = require('events')

const ev = new EventEmitter()


// on  ->  ouvir evento (fica sempre ouvindo)
ev.on('saySomething', (message) => console.log("Eu ouvi você: ", message))


// once  ->  Ouve uma única vez
ev.once('saySomething', (message) => console.log("Eu escutei você: ", message))

// emit  ->  Emitir evento
ev.emit('saySomething', 'Milena')
ev.emit('saySomething', 'Maria')


