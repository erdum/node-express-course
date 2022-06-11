const express = require("express");
const app = express();

const mockUserData = [
	{name:'Mark'},
	{name:'Jill'}
];

app.get("/users", (req, res) => {
	res.json({
		success: true,
		message: "success",
		data: mockUserData,
	});
});

app.listen(3000, () => {
	console.log("server started on port 3000");
});
