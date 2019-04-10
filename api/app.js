const bodyParser = require('body-parser');
const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

const PORT = 8000;

app.post('/api/submit-alg', (req, res) => {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let newAlg = req.files.algorithm;
    newAlg.mv(`./db/${newAlg.name}`, function (err) {
        if (err)
            return res.status(500).send(err);

        res.status(200).send('File Sent!')
    });
});

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

module.exports = app