const { Service } = require('feathers-mongoose');
const { sign } = require("jsonwebtoken")

exports.Users = class Users extends Service {
    async create(data) {
        const { username, password, email } = data
        const user = await super.create({
            username, password, email
        })
        return { user, token: sign({ id: user._id }, '06S5awe1VCIKOY4bt6LgTkFR6Rg=') }
    }
};
