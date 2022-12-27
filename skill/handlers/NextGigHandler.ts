import { getIntentName, getRequestType, getSlotValue, HandlerInput } from 'ask-sdk';
import { Response } from 'ask-sdk-model';
import { GigService } from '../services/GigService';
import { RequestHandler } from './RequestHandler';

export class NextGigHandler implements RequestHandler {
  gigService: GigService;

  constructor(gigService: GigService) {
    this.gigService = gigService;
  }

  canHandle({ requestEnvelope }: HandlerInput): boolean {
    return getRequestType(requestEnvelope) === 'IntentRequest' && getIntentName(requestEnvelope) === 'NextGigIntent';
  }
  async handle({ responseBuilder, requestEnvelope }: HandlerInput): Promise<Response> {
    const artist = getSlotValue(requestEnvelope, 'MusicGroup');

    const message = await this.gigService.getGigMessageFor(artist);

    return responseBuilder.speak(message).getResponse();
  }
}
