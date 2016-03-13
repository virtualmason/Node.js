////Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

var profile = require("./profile.js");
var users = ["floydorr","chalkers","joykesten2","davemcfarland"];
users.forEach(profile.get);

