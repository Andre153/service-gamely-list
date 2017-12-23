const User = require('../models').User;
const UUID = require('uuid/v4');

module.exports = {

    createUser(userData) {
        return new Promise((resolve, reject) => {
            User.create({
                uuid: UUID(),
                password: userData.password,
                name: userData.name,
                surname: userData.surname,
                mobile: userData.mobile,
                email: userData.email,
                location: userData.location
            }).then(user => resolve(user))
                .catch(err => reject(err))
        })
    }
};