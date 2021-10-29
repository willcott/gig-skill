import { HandlerInput } from 'ask-sdk';
import { Response } from 'ask-sdk-model';

export interface RequestHandler {
  canHandle(request: HandlerInput): boolean;
  handle(request: HandlerInput): Response | Promise<Response>;
}
