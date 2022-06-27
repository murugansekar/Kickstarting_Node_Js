/* Deliverable:-
1.Make the similar form like the youtuber does which writes to a file and redirects too with 302 response.
2.What is the use of having buffers and streams? When would you use it?.
Ans: A stream is an abstract interface used to work along with the streaming data in Node.js. There are many stream objects,Node.js offers us like Readable Streams, Writable Streams, Duplex Streams, Transform Streams.  A buffer represents a chunk of memory that is allocated on our computer. The size of the buffer, once set, cannot be changed. A buffer is used to store bytes. a buffer is like a bus which allows us to hold multiple chunks and work with them before they are released

Project:-
1.I want you to read all the messages from the file and show it at the top of the form.
2.Everytime you add a new message it should show at the top of the form.*/
const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res) => {
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
});
server.listen(4000)