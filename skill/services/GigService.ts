import ordinal from 'ordinal';
import { GigRepository } from '../repository/GigRepository';
import { DateService } from './DateService';

export class GigService {
  private gigRepostitory: GigRepository;

  constructor() {
    this.gigRepostitory = new GigRepository();
  }

  async getGigMessageFor(artist: string): Promise<string> {
    const gigDetails = await this.gigRepostitory.fetchLatestGigDetailsFor(artist);

    const dateService = new DateService();

    const formattedDate = dateService.format(gigDetails.eventDate);

    return `${gigDetails.artistName} is playing at ${gigDetails.eventName} in ${gigDetails.eventLocation} on the ${formattedDate}`;
  }
}
