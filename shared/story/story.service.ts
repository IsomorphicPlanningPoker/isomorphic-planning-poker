/// <reference path="../../typings/index.d.ts"/>

import { Story } from './story.interface';
import { Vote } from './../vote';

export class StoryService {

  static addVote(state: Story, vote: Vote) {
    if (state.name !== vote.story.name)
      return state;

    return Object.assign({}, state, { votes: [ ...state.votes, vote ] });
  }

  static editVote(state: Story, vote: Vote) {
    if (state.name !== vote.story.name)
      return state;

    return Object.assign({}, state, {
      votes: [ ...state.votes.filter((stateVote) => stateVote.player.name !== vote.player.name), vote ]
    });
  }
}
