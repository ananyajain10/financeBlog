require('dotenv').config();
const mongoose = require('mongoose');

const dbUrl = process.env.url;






async function main() {
    await mongoose.connect(dbUrl);
}

main().then(res => console.log("connected to db"))
main().catch(err => console.log("not connected to db", e))

