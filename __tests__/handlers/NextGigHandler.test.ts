import { HandlerInput } from 'ask-sdk-core';
import { NextGigHandler } from '../../skill/handlers/NextGigHandler';
import { GigService } from '../../skill/services/GigService';

jest.mock('../../skill/services/GigService', () => ({
  GigService: jest.fn(() => ({ getGigMessageFor: jest.fn((artist) => `mock message. Artist: ${artist}`) })),
}));

describe('NextGigHandler', () => {
  const handler = new NextGigHandler(new GigService());

  const fakeInput = {
    requestEnvelope: {
      request: {
        type: 'IntentRequest',
        intent: {
          name: 'NextGigIntent',
          slots: {
            MusicGroup: {
              value: 'mogwai',
            },
          },
        },
      },
    },
    responseBuilder: {
      speak: jest.fn(() => ({ getResponse: jest.fn() })),
    },
  } as unknown as HandlerInput;

  it('should handle NextGigIntents', () => {
    expect(handler.canHandle(fakeInput)).toBe(true);
  });

  it('should return message about the next gig', async () => {
    await handler.handle(fakeInput);

    expect(fakeInput.responseBuilder.speak).toBeCalledTimes(1);
    expect(fakeInput.responseBuilder.speak).toHaveBeenCalledWith('mock message. Artist: mogwai');
  });
});
