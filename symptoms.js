import express from 'express';
import { checkSymptoms } from '../controllers/symptomController.js';
const router = express.Router();

router.post('/', checkSymptoms);

export default router;
