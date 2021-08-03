import Router from 'express';

import { getTracks, createTrack } from '../controllers/trackerController';

const router = new Router();

//Add routes for tracker entity
router.get('/', getTracks);
router.post('/lesson', createTrack);

export default router;
