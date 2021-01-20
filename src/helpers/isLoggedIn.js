const Cookies = require("js-cookie");

const isLoggedIn = (req, res, next) => {
	console.log("isloggedin", Cookies.get());
	const alreadyLoggedIn = req.headers.cookie;

	if (alreadyLoggedIn) {
		res.status(400).json({
			status: "unsuccessfull",
			message: "User already loggedIn!!!",
		});
	} else {
		next();
	}
};

module.exports = isLoggedIn;
