const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: GhF");
    conn.write("Move: up");
  });
  // conn.on('connect', () => {
  //   setInterval(() => {conn.write("Move: up");}, 2000);
  // });

  return conn;
};

exports.connect = connect
