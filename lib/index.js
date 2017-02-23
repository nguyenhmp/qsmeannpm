var quickstartmean = function(name){
	var exec = require('child_process').exec;
	var child;
	child = exec("git clone https://github.com/nguyenhmp/quickstartMEAN", function (error, stdout, stderr) {
	  // console.log('stdout: ' + stdout);
	  // console.log('stderr: ' + stderr);
	  if (error !== null) {
	    console.log('exec error1: ' + error);
	  }
	  console.log("Cloned startup project")
	  	var command = `rm -rf quickstartMEAN/.git` 
	  	if(process.argv[2]){
				command += `&& mv quickstartMEAN ${process.argv[2]}`
				child = exec(command, function(error, stdout, stderr){
		  	// console.log('stdout: ' + stdout);
		  	// console.log('stderr: ' + stderr);
					if(error !== null){
						console.log('exec err', error)
					}
					console.log("removing git folder")
					console.log("changed directory name")
					console.log("be sure to 'npm install' and 'bower install'")
					clearInterval(x)
				})
			}else{
				child = exec(command, function(error, stdout, stderr){
		  	// console.log('stdout: ' + stdout);
		  	// console.log('stderr: ' + stderr);
					if(error !== null){
						console.log('exec err', error)
					}
					console.log(stdout)
					console.log(stderr)
					console.log("removing git folder")
					console.log("be sure to 'npm install' and 'bower install'")
					clearInterval(x)
				})
			}
	});
	x = setInterval(function(){
		console.log(".")
	}, 1000)
};

// allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.quickstartmean = quickstartmean;
