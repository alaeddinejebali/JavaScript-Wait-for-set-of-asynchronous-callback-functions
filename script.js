function getRandomTimoutValue(){
	return Math.floor(Math.random() * 5000)
}

function callApi_A(){
	return new Promise(function(resolve, reject) {
		var timeout = getRandomTimoutValue();
		setTimeout(function(){
			console.log("API A respond after " + timeout + "s");
			return resolve(timeout);
		}, timeout);
	});
}
function callApi_B(){
	return new Promise(function(resolve, reject) {
		var timeout = getRandomTimoutValue();
		setTimeout(function(){
			console.log("API B respond after " + timeout + "s");
			return reject(timeout);
		}, timeout);
	});
}
function callApi_C(){
	return new Promise(function(resolve, reject) {
		var timeout = getRandomTimoutValue();
		setTimeout(function(){
			console.log("API C respond after " + timeout + "s");
			return resolve(timeout);
		}, timeout);
	});
}


function doJob(result){
	console.log("Doing my job...");
	console.log("result:", result);
}

var promises = [];
promises.push(callApi_A());
promises.push(callApi_B());
promises.push(callApi_C());

Promise.all(promises).then(function AcceptHandler(result) {
	console.log("All API have respond.");
	doJob(result);
}, function(err) {
	console.log("At least one API encountered an error: ", err);
});
