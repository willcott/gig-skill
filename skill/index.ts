import * as Alexa from 'ask-sdk';
import { NextGigHandler } from './handlers/NextGigHandler';

export const handler = Alexa.SkillBuilders.custom().addRequestHandlers(new NextGigHandler()).lambda();
