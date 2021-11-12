import { DateService } from '../../skill/services/DateService';

describe('DateService', () => {
  it('formats ISO 8601 dates', () => {
    const dateService = new DateService();

    expect(dateService.format('2022-01-27T19:00:00')).toBe('27th of January, 2022');
    expect(dateService.format('2021-11-12T16:40:26Z')).toBe('12th of November, 2021');
    expect(dateService.format('2021-11-01T16:40:26Z')).toBe('1st of November, 2021');
    expect(dateService.format('2021-11-02T16:40:26Z')).toBe('2nd of November, 2021');
    expect(dateService.format('2021-11-03T16:40:26Z')).toBe('3rd of November, 2021');
  });
});
