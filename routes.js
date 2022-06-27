const fs = require('fs')
const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === "/")
    {
        res.write('<html>')
        res.write('<head><title>Enter a message</title></head>')
        res.write('<body>')
        const flagsfile = "message.txt"
        let data = fs.readFileSync(flagsfile);
        res.write(data.toString())
        res.write('<div id="output"></div>')
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }

    if(url === '/message' && method === 'POST')
    {
        const body=[]
        req.on('data', (chunk) => {
            body.push(chunk)
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString()
            let msg = parseBody.split("=")[1]
            msg = '<li>'+msg+'</li>'
            msg += "\n";
            fs.appendFileSync('message.txt',msg)
        });
        
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end()
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html><head><title>First Page</title></head><body><h1>Hello from my Node JS Server!</h1></body></html>')
    res.end()
}

/*3.Also try exporting in all the 3 ways and check the output . You would be using this quite frequently
module.exports.handler = requestHandler
exports.handler = requestHandler
module.exports = { handler: requestHandler }*/
module.exports = requestHandler