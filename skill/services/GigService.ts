import ordinal from 'ordinal';
import { GigRepository } from '../repositories/GigRepository';
import { DateService } from './DateService';

export class GigService {
  private gigRepostitory: GigRepository;
  private dateService: DateService;

  constructor(gigRepostitory: GigRepository, dateService: DateService) {
    this.gigRepostitory = gigRepostitory
    this.dateService = dateService
  }

  async getGigMessageFor(artist: string): Promise<string> {
    const gigDetails = await this.gigRepostitory.fetchNextGigDetailsFor(artist);

    const formattedDate = this.dateService.format(gigDetails.eventDate);

    return `${gigDetails.artistName} is playing at ${gigDetails.eventName} in ${gigDetails.eventLocation} on the ${formattedDate}`;
  }
}
