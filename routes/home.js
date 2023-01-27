//Import necessary modules
import express from 'express';
const router = express.Router();

//When the get request is made render the home page
router.get('/', (req, res) => {
    res.render('../view/home.ejs');
});

export default router;