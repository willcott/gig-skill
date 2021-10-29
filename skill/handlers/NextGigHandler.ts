import { HandlerInput } from 'ask-sdk';
import { Response } from 'ask-sdk-model';
import { GigService } from '../services/GigService';
import { RequestHandler } from './RequestHandler';

export class NextGigHandler implements RequestHandler {
  canHandle(request: HandlerInput): boolean {
    return true;
  }
  async handle(request: HandlerInput): Promise<Response> {
    const { responseBuilder, requestEnvelope } = request;

    const gigService = new GigService();

    console.log(JSON.stringify(requestEnvelope.request));

    // @ts-ignore
    console.log(requestEnvelope.request.intent.slots.MusicGroup.value);

    // console.log(request.requestEnvelope.request.intent.slots);

    // @ts-ignore
    const artist = requestEnvelope.request.intent.slots.MusicGroup.value;

    const message = await gigService.getGigMessageFor(artist);

    return responseBuilder.speak(message).getResponse();
  }
}
