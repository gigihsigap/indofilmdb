const FilmController = require('../controllers/filmController');
const { authentication } = require('../middlewares/auth');
const router = require('express').Router();

router.get('/film', FilmController.findAll);
router.post('/film', FilmController.create);
router.put('/film/:id', FilmController.update);
router.delete('/film/:id', FilmController.destroy);

module.exports = router;
