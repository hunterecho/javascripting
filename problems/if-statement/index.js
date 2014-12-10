var path = require('path');
var getFile = require('../../get-file');
var run = require('../../run-solution');

exports.problem = getFile(path.join(__dirname, 'problem.md'));

exports.solution = getFile(path.join(__dirname, 'solution.md'));

exports.fail = getFile(path.join(__dirname, 'troubleshooting.md'));

exports.verify = function (args, cb) {
  run(args[0], function (err, result) {
    if (/^The fruit name has more than five characters.\n$/.test(result)) cb(true);
    else cb(false);
  });
};

exports.run = function (args) {
  require(path.resolve(process.cwd(), args[0]));
};
