import {Router} from 'express';
const user = require('../controllers/user_controller');
const router = Router();

// index
router.get('/', (req,res) => {
    res.send('Hello World')
})

// show

router.get('/:id', user.getUser());

// create

router.post('/', (req,res) => {

})

// update

router.patch('/:id', (req,res) => {

})

// delete

router.delete('/:id', (req,res) => {

})

export default router;