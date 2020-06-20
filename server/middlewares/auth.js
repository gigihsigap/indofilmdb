const {Film} = require('../models');
const {verifyToken} = require('../helpers/jsonwebtoken.js');

function authentication(req, res, next) {
    try {
        let decoded = verifyToken(req.headers.token)
        req.userData = decoded
        next()
    } catch(err) {
        next(err)
    }
}

// function authorization(req, res, next) {
//     Film.findOne({ where: { id: req.params.id }})
//         .then(film => {
//             if (!film) {
//                 throw { status: 404, message: 'Error 404: data not found' }
//             } else if (film.UserId == req.userData.id) {
//                 next()
//             } else {
//                 throw { status: 403, message: 'You are not authorized to do that!' }
//             }
//         })
//         .catch(next)
// }

// function adminAuth(req, res, next) {
//     try {
//         if (req.userData.role == 'admin') {
//             next()
//         } else {
//             next({ status: 401, message: 'Only admin is allowed!' })
//         }
//     }
//     catch(err) {
//         next({ status: 401, message: err })
//     }
// }

// function memberAuth(req, res, next) {
//     try {
//         if (req.userData.role == 'member') {
//             next()
//         } else {
//             next({ status: 401, message: 'Only member is allowed!' })
//         }
//     }
//     catch(err) {
//         next({ status: 401, message: err })
//     }
// }

module.exports = { authentication };
