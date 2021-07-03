const sqlite3 = require('sqlite3');
const logdb = new sqlite3.Database('logs.db');
logdb.exec('CREATE TABLE IF NOT EXISTS logs ("timestamp" TEXT NOT NULL, log TEXT);');
logdb.exec('CREATE TABLE IF NOT EXISTS errors ("timestamp" TEXT NOT NULL, error TEXT);')
module.exports.log = (type, message, critical) => {
    var timestamp = new Date().toISOString();
    switch (type) {
        case "err":
            var newLog = logdb.prepare("INSERT INTO errors VALUES (?,?)");
            newLog.run(timestamp, message);
            newLog.finalize((err) => {
                if (err) return console.log(`LOG ERROR\nFailed to log error to file!`)
                console.log(`Error: ${timestamp} | ${message}`)
                if(critical) process.exit(1);
            });
            break;
        case "log":
            var newLog = logdb.prepare("INSERT INTO logs VALUES (?,?)");
            newLog.run(timestamp, message);
            newLog.finalize((err) => {
                if (err) return console.log(`LOG ERROR\nFailed to log info to file!`)
                console.log(`${timestamp} | ${message}`)
            });
            break;
    }

}