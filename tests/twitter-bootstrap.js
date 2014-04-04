// it should do nothing but showing OK
module.exports = {
	path: '/bootstrap/2.3.2/',
	test: function(sandbox, window, document) {
		setTimeout(function() {
			sandbox.done();
		}, 1000);
	}
};