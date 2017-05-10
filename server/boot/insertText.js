module.exports = function(app) {

	var jsonArr = require('../hikes.json');

	var Hikes = app.models.Hikes;

	Hikes.destroyAll();

	// jsonArr.forEach(function(questionDict){
		Hikes.upsert(jsonArr, function(err, record) {
			if (err) return console.log(err);
		}); // insertMany if error for above
	// });
	console.log("Hikes inserted successfully");
};
