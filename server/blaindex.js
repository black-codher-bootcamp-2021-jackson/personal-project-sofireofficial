require('dotenv').config();
        const fs = require('fs');
const express = require('express');
        const app = express();
        const path = require('path');
        const port = 8000;
const bodyParser = require('body-parser');
        const { v4: uuidv4 } = require('uuid');
        const profilesFilePath = process.env.BASE_JSON_PATH;
        let profiles = require(__dirname + profilesFilePath);
        console.log(__dirname + profilesFilePath);
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        app.use(express.raw());
        app.use(bodyParser.json());

        app.use("/static", express.static(path.join(__dirname, "public"))); // all static files will be served with the prefix /content

        app.get("/", (_, res) => {
        res.status(200).sendFile("./public/index.html", { root: __dirname });
        });


        app.get('/shop', (_, res) => { 
                res.header("Content-Type","application/json");
                res.sendFile(profilesFilePath, { root: __dirname });
        console.log('todos hereeeee:', profiles)
        res.status(200).json(profiles) // send/end/Json!
        });




        app.listen(port, function () {
            console.log(`Node server is currently running... http://localhost:${port}`);
        });

        module.exports = app;