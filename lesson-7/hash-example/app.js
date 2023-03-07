const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    // const salt = await bcrypt.genSalt(10);
    // console.log(salt);
    const result = await bcrypt.hash(password, 10);
    // console.log(result);
    const compareREsult1 = await bcrypt.compare(password, result);
    console.log(compareREsult1);
    const compareREsult2 = await bcrypt.compare("123457", result);
    console.log(compareREsult2);
}

hashPassword("123456")