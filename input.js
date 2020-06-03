let connection;

function handleUserInput(c) {
  const dataHex = Buffer.from(c, 'ascii').toString('hex');

  const ctrlCHex = '03';
  const wUp = '77';
  const aLeft = '61';
  const sDown = '73';
  const dRight = '64';

  const secret = '78';

  switch (dataHex) {
    case ctrlCHex:
      process.exit();
      break;
    case wUp:
      connection.write("Move: up");
      break;
    case aLeft:
      connection.write("Move: left");
      break;
    case sDown:
      connection.write("Move: down");
      break;
    case dRight:
      connection.write("Move: right");
      break;
    case secret:
      connection.write("Say: Heeey");
      break;
  }
}
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}


exports.setupInput = setupInput;