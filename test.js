

var exec = require("child_process").exec;

exec('hostname', function (err, stdout, stderr) {

    console.log(stdout);
    console.log(stderr);

});


