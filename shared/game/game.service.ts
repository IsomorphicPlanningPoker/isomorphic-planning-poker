/// <reference path="../../typings/index.d.ts"/>

import { Game } from './game.interface';
import { Story } from './../story/story.interface';

export class GameService {

  static addStory(state: Game, story: Story): Game {
    return Object.assign({}, state, { stories: [ ...state.stories, story ] });
  }

  static removeStory(state: Game, story: Story): Game {
    return Object.assign({}, state, {
      stories: state.stories.filter((stateStory) => stateStory.name !== story.name)
    });
  }

}
