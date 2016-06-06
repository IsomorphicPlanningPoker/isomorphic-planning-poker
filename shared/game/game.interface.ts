import { Player } from '../player/player.interface';

export interface Game {
  _id: string;
  name: string;
  // activeStory: string;
  owner: Player;
  players: Array<Player>;
}
