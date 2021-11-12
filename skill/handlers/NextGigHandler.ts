import { getIntentName, getRequestType, HandlerInput } from 'ask-sdk';
import { Response } from 'ask-sdk-model';
import { GigService } from '../services/GigService';
import { RequestHandler } from './RequestHandler';

export class NextGigHandler implements RequestHandler {
  gigService: GigService

  constructor(gigService: GigService) {
    this.gigService = gigService
  }

  canHandle({ requestEnvelope }: HandlerInput): boolean {
    return getRequestType(requestEnvelope) === 'IntentRequest' &&
      getIntentName(requestEnvelope) === 'NextGigIntent';
  }
  async handle({ responseBuilder, requestEnvelope }: HandlerInput): Promise<Response> {
    console.log(JSON.stringify(requestEnvelope.request));

    // @ts-ignore
    console.log(requestEnvelope.request.intent.slots.MusicGroup.value);

    // console.log(request.requestEnvelope.request.intent.slots);

    // @ts-ignore
    const artist = requestEnvelope.request.intent.slots.MusicGroup.value;

    const message = await this.gigService.getGigMessageFor(artist);

    return responseBuilder.speak(message).getResponse();
  }
}
