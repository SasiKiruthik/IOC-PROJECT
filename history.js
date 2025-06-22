import express from 'express';
import { getHistory, addHistory } from '../controllers/historyController.js';
const router = express.Router();

router.get('/', getHistory);
router.post('/add', addHistory);

export default router;
