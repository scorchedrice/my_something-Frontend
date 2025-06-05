import express from 'express';
import { delay } from '../utils/delay.js'

const router=express.Router();

router.get('/', async (req, res) => {
  try {
    await delay(500, 2000, 0.2); // 0.2 = 20% 실패 확률
    res.json({ id: 1, name: 'Mock User', email: 'mock@user.com' });
  } catch (error) {
    res.status(500).json({ error: 'Mock API Failure', message: (error).message });
  }
});

export default router;
