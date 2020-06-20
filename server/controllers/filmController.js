const { Film } = require('../models');

class Controller {

    static create(req, res, next) {
        const obj = {
            titleID: req.body.titleID,
            titleEN: req.body.titleEN,
            plotID: req.body.plotID,
            plotEN: req.body.plotEN,
            poster: req.body.poster,
            genre: req.body.genre,
            year: req.body.year,
            director: req.body.director,
            cast: req.body.cast,
        }

        Film.create(obj)
        .then(data => res.status(201).json(data))
        .catch(next)
    }

    static findAll(req, res, next) {
        Film.findAll()
        .then(data => res.status(200).json(data))
        .catch(next)
    }

    static findOne(req, res, next) {
        const option = { where: { id: req.params.id }}
        Film.findOne(option)
        .then((data) => {
            if (data) {
                res.status(200).json(data)
            } else {
                throw {status: 404, message: 'Data not found'}
            }
        })
        .catch(next)
    }

    static update(req, res, next) {
        const obj = {
            titleID: req.body.titleID,
            titleEN: req.body.titleEN,
            plotID: req.body.plotID,
            plotEN: req.body.plotEN,
            poster: req.body.poster,
            genre: req.body.genre,
            year: req.body.year,
            director: req.body.director,
            cast: req.body.cast,
        }

        const option = { where: { id: req.params.id }}
        Film.update(obj, option)
        .then((data) => res.status(200).json(data))
        .catch(next)
    }

    static destroy(req, res, next) {
        const option = { where: { id: req.params.id }}
        Film.findOne(option)
        .then(current => {
            if (current) {
                Film.destroy(option)
                .then((data) => res.status(200).json(data))
                .catch(next)
            } else {
                throw {status: 404, message: 'Data not found!'}
            }
        })
        .catch(next)
    }
}

module.exports = Controller;
