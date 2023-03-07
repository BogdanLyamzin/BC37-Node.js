const jwt = require("jsonwebtoken");
require("dotenv").config();

const {SECRET_KEY} = process.env;

const payload = {
    id: "64076aed48b48cfe8cfd1b90",
}

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    const {id} = jwt.verify(token, SECRET_KEY);
    console.log(id);
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDc2YWVkNDhiNDhjZmU4Y2ZkMWI5MCIsImlhdCI6MTY3ODIwODg0MSwiZXhwIjoxNjc4MjkxNjQxfQ.3MbYYR7KBaaykvzNA1mNkA9RyZItoUpjxIYdm2rb-Ma";
    jwt.verify(invalidToken, SECRET_KEY);
}
catch(error) {
    console.log(error.message);
}