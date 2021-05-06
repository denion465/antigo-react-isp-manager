import { parseISO } from 'date-fns';
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CommitmentsRepository from '../repositories/CommitmentsRepository';
import CreateCommitmentService from '../service/CreateCommitmentService';

const commitmentsRouter = Router();

commitmentsRouter.get('/', async (req, res) => {
  const commitmentsRepository = getCustomRepository(CommitmentsRepository);
  const commitments = await commitmentsRepository.find();

  return res.json(commitments);
});

commitmentsRouter.post('/', async (req, res) => {
  try {
    const { provider, date } = req.body;

    // Convert date
    const parsedDate = parseISO(date);

    // access appointment
    const createCommitments = new CreateCommitmentService();

    const commitments = await createCommitments.execute({
      date: parsedDate,
      provider,
    });

    return res.json(commitments);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default commitmentsRouter;
