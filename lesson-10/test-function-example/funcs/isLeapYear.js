// const moment = require("moment");
// const dateFns = require("date-fns");

const isLeapYear = (year)=> {

    if(year === undefined) {
        throw new Error('year must be exist')
    }

    if(typeof year !== "number") {
        throw new Error('year must be number')
    }

    if(!Number.isInteger(year)) {
        throw new Error('year must integer')
    }

    if(year < 42) {
        throw new Error('year must be 42 or more')
    }

    const date = new Date(year, 2, 0);
    const days = date.getDate();
    return (days === 29);
}

module.exports = isLeapYear;
