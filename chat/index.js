// import { Configuration, OpenAIApi } from 'openai';

const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    apiKey: Appkey
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const { message } = req.body;
    // const completion = await openai.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages: [{role: "user", content: message}],
    // });
    const completion = await openai.createImage({
        prompt: message,
        size: '256x256'
    });

    console.log(completion.data.data[0]);
    if (completion.data) {
        res.json({
            message: completion.data.data[0].url
        })

    }
})

app.listen(port, () => {
    console.log('Example app port: ' + port);
})
