const { User } = require('../models');
const { checkPassword } = require('../helpers/bcryptjs.js');
const { generateToken } = require('../helpers/jsonwebtoken.js');

class Controller {

    static register(req, res, next) {
        console.log('HAHAHAH', req.body)
        let obj = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role || 'member',
        }
        User.create(obj)
        .then(data => {
            res.status(201).json({ data, message: 'Successfully registered new user' })
        })
        .catch(next)
    }

    static login(req, res, next) {
        let obj = {
            email: req.body.email,
            password: req.body.password,
        }
        if (!obj.email) throw { status: 400, message: 'Please insert a valid email' }
        if (!obj.password) throw { status: 400, message: 'Please insert a password' }
        let option = {
            where: { email: obj.email }
        }
        User.findOne(option)
        .then(user => {
            if (!user) throw {status: 400, message: 'Wrong email/password'}

            let inputPass = obj.password
            let userPass = user.password
            let compare = checkPassword(inputPass, userPass)

            if (!compare) throw {status: 400, message: 'Wrong email/password'}

            let userProfile = {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
            let token = generateToken(userProfile)
            console.log('Token:', token)
            res.status(200).json({ token, userProfile, message: 'Log in successful' })
        })
        .catch(next)
    }

    static getProfile(req, res, next) {
        console.log('Get profile with ID:')
        console.log(req.userData.id)
        User.findOne({ where: { id: req.userData.id }})
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                throw {status: 404, message: 'Data not found'}
            }
        })
        .catch(next)
    }

    // static updateProfile(req, res, next) {
    //     let obj
    //     let option = { where: { id: req.params.id }}
    //     User.update(obj, option)
    //     .then(current => {
    //         if (!current) throw {}
    //     })
    //     .catch(next)
    // }

    // static destroyProfile(req, res, next) {
    //     let option = { where: { id: req.params.id }}
    //     User.destroy(option)
    //     .then(data => res.status(200).json({ data }))
    //     .catch(next)
    // }
}

module.exports = Controller;
