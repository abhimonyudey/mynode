var a=require("express");
var e=a();

e.get("/",function(req,res)
			{
				res.send("Updated Welcome to Node");
			}
	);
var p=process.env.port || 3000;
e.listen(p);