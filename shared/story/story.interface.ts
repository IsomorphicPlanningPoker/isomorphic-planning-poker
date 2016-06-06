/// <reference path="../../typings/index.d.ts"/>

import { Vote } from './../vote/';

export interface Story {
  _id: string;
  name: string;
  // flipped: boolean;
  votes?: Array<Vote>;
}
