var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list) {

	list.forEach(function (fichier) {
		if (path.extname(fichier) == '.' + process.argv[3]) {
			console.log(fichier);
		}
	})
});