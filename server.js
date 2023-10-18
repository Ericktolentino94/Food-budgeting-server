const app = require("./app.js")

require("dotenv").config

const PORT = process.env.PORT || 8484;

app.listen(PORT, () => {
    console.log(`LISTENING ON PORT 8484`)
})