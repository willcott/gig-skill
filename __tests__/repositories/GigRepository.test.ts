import { GigRepository } from '../../skill/repositories/GigRepository';

jest.mock('axios', () => ({
  get: jest.fn(() => ({
    data: [{
      artist: {
        name: 'artist name',
      },
      venue: {
        name: 'venue name',
        location: 'venue location',
      },
      datetime: '2022-01-27T19:00:00',
    }]
  })),
}));

describe('GigRespository', () => {
  const gigRepostitory = new GigRepository();

  it('calls api and returns desired results', async () => {
    const response = await gigRepostitory.fetchNextGigDetailsFor('band');

    expect(response).toEqual({
      artistName: 'artist name',
      eventName: 'venue name',
      eventLocation: 'venue location',
      eventDate: '2022-01-27T19:00:00',
    });
  });
});
