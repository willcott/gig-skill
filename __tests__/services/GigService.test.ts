import { GigRepository } from '../../skill/repositories/GigRepository';
import { DateService } from '../../skill/services/DateService';
import { GigService } from '../../skill/services/GigService';

jest.mock('../../skill/repositories/GigRepository', () => ({
  GigRepository: jest.fn(() => ({
    fetchNextGigDetailsFor: jest.fn((artist) => ({
      artistName: `mock ${artist} name`,
      eventName: `mock event name`,
      eventLocation: `mock event location`,
      eventDate: `mock event date`,
    })),
  })),
}));

jest.mock('../../skill/services/DateService', () => ({
  DateService: jest.fn(() => ({
    format: jest.fn((date) => date),
  })),
}));

describe('GigService', () => {
  const gigService = new GigService(new GigRepository(), new DateService());

  it('should format the results from the repo into message string', async () => {
    const response = await gigService.getGigMessageFor('band');

    expect(response).toBe(`mock band name is playing at mock event name in mock event location on the mock event date`);
  });
});
