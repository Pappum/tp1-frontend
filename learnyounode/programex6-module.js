module.exports = function filterDir(args) {

	fs.readdir(process.argv[2], function(err, list) {
		list.forEach(function (fichier) {
			if (path.extname(fichier) == '.' + process.argv[3]) {
				console.log(fichier);
			}
		})
	});
	
}