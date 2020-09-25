require("dotenv").config();
const server = require("./server.js");

const port = process.env.PORT || 4000;

// console.log(process.env);

server.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});
