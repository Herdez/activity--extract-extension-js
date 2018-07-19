//getFileExtension function

function getFileExtension(str){
	var value = str.split(".");
	if (value.length > 1){
		return value[1];
	} else {
		return "NOT VALID";
	}
}




console.assert(getFileExtension("logos.sketch") === "sketch")
console.assert(getFileExtension("avatar.png") === "png")
console.assert(getFileExtension("noextension") === "NOT VALID")