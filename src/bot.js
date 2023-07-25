import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const create = (prompt) => openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 15,
    temperature: 0,
});


