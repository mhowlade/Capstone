const spawn = require('child_process').spawn;

module.exports.runTest = async function(callback){

    const ls = spawn('python', ['recommend.py', 'test', 'arg2']);
    let out = ''
    ls.stdout.on('data', (data) => {
        out = data;
        callback(data)
    });
}