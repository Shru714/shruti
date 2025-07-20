const http=require('http');
const { parse } = require('path');
const url=require('url');

let server=http.createServer((req,res)=> {
    let parseurl=url.parse(req.url,true);
    let path=parseurl.pathname;
    let query=parseurl.query;
    console.log(parseurl);

    res.setHeader('content-type','text/html')
 if(path==='/'){
        res.end('<h1>Home Page</h1>');
    }else if(path==='/about'){
        res.end('<h1>About Page</h1>');

    }else if(path==='/welcome'){
     res.end('<h1>welcome ${query.name}</h1>');
    }else{
        res.end(`<h1>404 Page Not Found</h1>`);
    }

})
server.listen(4000,()=>{
        console.log('server is running on port 4000');
    
})
//http://localhost:4000