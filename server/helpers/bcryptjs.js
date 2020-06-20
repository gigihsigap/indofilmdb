const bcryptjs = require('bcryptjs');

function hashPassword(inputPass) {
    let count = 10;
    let salt = bcryptjs.genSaltSync(count);
    return bcryptjs.hashSync(inputPass, salt);
}

function checkPassword(inputPass, hashedPass) {
    return bcryptjs.compareSync(inputPass, hashedPass); // returns true or false
}

module.exports = {hashPassword, checkPassword};
