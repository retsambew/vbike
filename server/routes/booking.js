import express from "express";
import {bookRide,cancelRide,rides} from '../controllers/booking.js'

const router= express.Router();

router.get('/',bookRide);
router.delete('/',cancelRide);
router.get('/rides',rides)

export default router;