import * as Alexa from 'ask-sdk';
import { NextGigHandler } from './handlers/NextGigHandler';
import { GigRepository } from './repositories/GigRepository';
import { DateService } from './services/DateService';
import { GigService } from './services/GigService';

const gigRepostitory = new GigRepository();
const dateService = new DateService();
const gigService = new GigService(gigRepostitory, dateService);

const handlers = [
  new NextGigHandler(gigService)
];

export const handler = Alexa.SkillBuilders.custom().addRequestHandlers(...handlers).lambda();
