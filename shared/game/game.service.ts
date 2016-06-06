import { Player } from './../player/player.interface';
import { Story } from './../story/story.interface';

export class GameService {

  static addStory(state, story: Story): any {
    return Object.assign({}, state, { stories: [...state.stories, story] });
  }

  static removeStory(state: any, story: Story) {
    return Object.assign({}, state, { stories: state.stories.filter((s) => {
      s.name !== story.name;
    })});
  }

}
