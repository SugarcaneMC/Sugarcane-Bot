const sqlite3 = require('sqlite3');
const logdb = new sqlite3.Database('logs.db');
module.exports.db = logdb;
logdb.exec('CREATE TABLE IF NOT EXISTS logs ("timestamp" TEXT NOT NULL, log TEXT);');
module.exports.log = (message, critical) => {
    var timestamp = new Date().toISOString();
    var newLog = logdb.prepare("INSERT INTO logs VALUES (?,?)");
    newLog.run(timestamp, message);
    newLog.finalize((err) => {
        if (critical) process.exit(1);
    });
};