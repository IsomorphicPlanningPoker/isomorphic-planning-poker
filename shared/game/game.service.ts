import { Player } from './../player/player.interface';
import { Story } from './../story/story.interface';

export class GameService {

  static addPlayer(state: any, player: Player): any {
    return [...state.players, player];
  }

  static removePlayer(state: any, player: Player) {
    return Object.assign({}, state, { players: state.players.filter((p) => {
      p.name !== player.name;
    })});
  }

  static addStory(state, story: Story): any {
    return Object.assign({}, state, { stories: [...state.stories, story] });
  }

}
