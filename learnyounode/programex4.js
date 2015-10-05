var fs = require('fs');

fs.readFile(process.argv[2], function(err, buf) {
	var lignes = buf.toString().split('\n').length - 1;
	console.log(lignes);
});