import express from 'express';
import { getVets, updateVetStatus } from '../controllers/vetController.js';
const router = express.Router();

router.get('/', getVets);
router.post('/status', updateVetStatus);

export default router;
