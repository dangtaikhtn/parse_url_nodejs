import express from 'express';
// Set up the express app
const app = express();
// get all todos
var youtubedl = require('youtube-dl');

// Optional arguments passed to youtube-dl.
var options = ['--username=user', '--password=hunter2'];

app.get('/api/v1/getStream', (req, res) => {
    var id = req.query.id;
    var url = 'http://www.youtube.com/watch?v=' + id;
    youtubedl.getInfo(url, options, function(err, info) {
        if (err) {
            res.status(400).send({
                message: "Bad request",
            })
        };
       
        console.log('id:', info.id);
        console.log('title:', info.title);
        console.log('url:', info.url);
        console.log('thumbnail:', info.thumbnail);
        console.log('description:', info.description);
        console.log('filename:', info._filename);
        console.log('format id:', info.format_id);
        res.status(200).send({
            code: 200,
            message: 'Success',
            data: {
                url: info.url,
            }
        })
    });
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});