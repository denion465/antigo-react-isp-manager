import { EntityRepository, Repository } from 'typeorm';

import Commitment from '../models/Commitment';

@EntityRepository(Commitment)
class CommitmentsRepository extends Repository<Commitment> {
  public async findByDate(date: Date): Promise<Commitment | null> {
    const findCommitment = await this.findOne({
      where: { date },
    });

    return findCommitment || null;
  }
}

export default CommitmentsRepository;
