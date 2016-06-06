import { Story } from './';
import { Player } from './../player';
import { Vote } from './../vote';

export class StoryService {

  static addVote(state: Story, vote: Vote) {
    if (vote.story.name !== state.name)
      return state;

    return Object.assign({}, state, { votes: [
      ...state.votes,
      vote
    ]});
  }

  static editVote(state: Story, vote: Vote) {
    if (vote.story.name !== state.name)
      return state;

    return Object.assign({}, state, { votes: [
      ...state.votes.filter((v) => {
        return v.player.name !== vote.player.name }),
      vote
    ]});
  }
}
