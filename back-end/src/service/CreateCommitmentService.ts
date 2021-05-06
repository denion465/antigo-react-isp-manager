import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import CommitmentsRepository from '../repositories/CommitmentsRepository';
import Commitment from '../models/Commitment';

interface Request {
  provider: string;
  date: Date;
}

class CreateCommitmentService {
  public async execute({ date, provider }: Request): Promise<Commitment> {
    const commitmentsRepository = getCustomRepository(CommitmentsRepository);

    const commitmentDate = startOfHour(date);

    const findCommitmentInSameDate = await commitmentsRepository.findByDate(
      commitmentDate,
    );

    if (findCommitmentInSameDate) {
      throw Error('This Commitments is already booked');
    }

    const commitment = commitmentsRepository.create({
      provider,
      date: commitmentDate,
    });

    await commitmentsRepository.save(commitment);

    return commitment;
  }
}

export default CreateCommitmentService;
