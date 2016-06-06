/// <reference path="../../typings/index.d.ts"/>

import { Story } from '../story/story.interface';
import { Player } from '../player/player.interface';

export interface Game {
  _id: string;
  name: string;
  // activeStory: string;
  owner?: Player;
  stories: Array<Story>;
}
