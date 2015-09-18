#!/usr/bin/env node

var Command = require('./command');

var arg = Command.getOperation();
// if the operation exists (add, or find), then Command[operation] will return a reference
// to the function that implements this command (see bracket notation for details)
if (Command[arg]){
    Command[arg](handleResult);
} else {
    console.log('Unknown command!');
}

// switch(Command.getOperation)) {
//   case 'add':
//       return Command.add(handleResult);
//   case 'find':
//       return Command.find(handleResult);
//   defaault:
//      return console.log('Unknown command!');
// }

function handleResult(err) {
    if (err) {
        console.log('Error!');
    } else {
        console.log( 'OK! Command ran successfully!' );
    }
}
