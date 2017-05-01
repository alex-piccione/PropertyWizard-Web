"use strict";

var errorHandler;

if (process.env.NODE_ENV === "production")
{
    require("@google/cloud-trace").start();
    errorHandler = require("@google/cloud-errors").start();    
}

if (process.env.GCLOUD_PROJECT)
{
    require("@gppgle-cloud/debug-agent").start();
}

var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var google = require("googleapis");
var youtube = google.youtube("v3");

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("*", function(request, response){
    return response.sendFile(path.join(__dirname, "public/index.html"));
});

// Basic error logger/handler
app.use(function(err, request, response, next){
    reponse.status(500).send(err.message || "Something broke!");
    next(err || new Error("Something broke!"));
});
if (process.env.NODE_ENV === "production")
{
    app.use(errorHandler.express);
}

if (module === require.main)
{
    var server = app.listen(process.env.port || 8080, function(){    
        var port = server.address().port;

        console.log("App listening on port %s", port);
        console.log("Press CTRL+C to quit.");
    });
}

module.exports = app;