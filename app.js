var a=require("express");
var e=a();

e.get("/",function(req,res)
			{
				res.send("Welcome to Node");
			}
	);

e.listen(5000);