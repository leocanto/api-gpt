import express from "express"
import { create } from "./bot.js"


const app = express()

app.get("/", async (req, res) => {
    try {
        const { data } = await create("")
        const { choices } = data
        res.send(choices[0].text)
    } catch (e) {
        console.log(e)
    }
})

app.listen(4006)