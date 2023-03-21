// import { Configuration, OpenAIApi } from 'openai';

const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

app.use(bodyParser.json());
app.use(cors());

app.post('/createImage', async (req, res) => {
    const { message } = req.body;
    // const completion = await openai.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages: [{role: "user", content: message}],
    // });

    try {
        const completion = await openai.createImage({
            prompt: message,
            size: '512x512'
        });
        if (completion) {
            res.json({
                message: completion.data.data[0].url
            });
            console.log('success');
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
    // console.log(completion.data.data[0]);
});

app.post('/translate', async function (req, res) {
    let api_url = 'https://openapi.naver.com/v1/papago/n2mt';
    let request = require('request');
    const { message } = req.body;

    let options = {
        url: api_url,
        form: { 'source': 'ko', 'target': 'en', 'text': message },
        headers: { 'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret }
    };

    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.send(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response);
        }
    });
});

app.listen(port, () => {
    console.log('Example app port: ' + port);
})
// UI설계 -> UX 설계 -> API 설계
// UI구현(컴포넌트, App.css) -> API 구현(src/App.js, index.js)
