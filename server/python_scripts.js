const spawn = require('child_process').spawn;

module.exports.runTest = async function(oid,n,callback){

    const ls = spawn('python', ['recommend.py', oid, n]);
    ls.stdout.on('data', (data) => {
        callback(data.toString())
    });
}