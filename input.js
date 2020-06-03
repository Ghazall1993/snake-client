
function handleUserInput(c) {
  const dataHex = Buffer.from(c, 'ascii').toString('hex');
  const ctrlCHex = '03';c
  if (dataHex === ctrlCHex) {
    process.exit();
  }
}
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

exports.setupInput = setupInput;