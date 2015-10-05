var rslt = 0;

for (var i = 2 ; i < process.argv.length ; i++) {
	rslt = rslt + Number(process.argv[i]);
};

console.log(rslt);