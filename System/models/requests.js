/**
 * Created by thisura on 5/3/17.
 */
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/pharmacy");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Successfully connected to the database of requests");
    // we're connected!
});

var serverError = 500;
var statusSuccess = 200;
var statusAdded = 201;

var requestsSchema = mongoose.Schema({
    userID:String,
    requestID:String,
    drug:String,
    date:Date,
    unit:Number,
    by:String,
    department:String,
    actions:String

});

var Request = mongoose.model("Request", requestsSchema);

exports.getAllrequests = function (response) {
    Request.find(function (error, requests) {
        if (error) {
            response.status(serverError);
            response.json(error);
        }
        response.status(statusSuccess);
        response.json(requests);
    });
};

