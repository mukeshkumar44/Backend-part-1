let http = require("node:http");
let server=http.createServer(function(req,res){
    if(req.url=='/getParasData')
    {
        res.end("this data is send by paras")
    }
    res.end("this is the port 7777 and here is running your code");
});
server.listen(7777);