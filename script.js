function getRandomTimoutValue(){
	return Math.floor(Math.random() * 5000)
}

function appelerAPI_A(){
	return new Promise(function(resolve, reject) {
		var timeout = getRandomTimoutValue();
		setTimeout(function(){
			console.log("API A respond after " + timeout + "s");
			return resolve(timeout);
		}, timeout);
	});
}
function appelerAPI_B(){
	return new Promise(function(resolve, reject) {
		var timeout = getRandomTimoutValue();
		setTimeout(function(){
			console.log("API B respond after " + timeout + "s");
			return reject(timeout);
		}, timeout);
	});
}
function appelerAPI_C(){
	return new Promise(function(resolve, reject) {
		var timeout = getRandomTimoutValue();
		setTimeout(function(){
			console.log("API C respond after " + timeout + "s");
			return resolve(timeout);
		}, timeout);
	});
}


function doJob(){
	appelerAPI_A();
	appelerAPI_B();
	appelerAPI_C();
}

var promises = [];
promises.push(appelerAPI_A());
promises.push(appelerAPI_B());
promises.push(appelerAPI_C());


Promise.all(promises).then(function AcceptHandler(result) {
	console.log("======>result.ok:", result);
}, function(err) {
	console.log("======>result.error:", err);
});
