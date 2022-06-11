const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const mockUserData = [
	{name:'Mark'},
	{name:'Jill'}
];

app.use(bodyParser.json());

app.get("/users/:id", (req, res) => {
	console.log(req.params.id);
	res.json({
		success: true,
		message: "success",
		data: mockUserData,
	});
});

app.post("/login", (req, res) => {
	const userName = req.body.username;
	const userPass = req.body.userpass;
	const mockName = "Erdum";
	const mockPass = "1234";

	if (userName === mockName && userPass === mockPass) {
		res.json({
			success: true,
			message: "success",
			data: mockUserData,
		});
	} else {
		res.jsoN({
			success: false,
			message: "password and username do not match",
		});
	}
});

app.listen(3000, () => {
	console.log("server started on port 3000");
});
