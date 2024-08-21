import { GameConsole } from "../../game-consoles/models";

/**
 * Un jeu géré dans ma vidéothèque
 */
export interface VideoGame {
  label: string;
  releaseDate: Date,
  console: GameConsole
}

export type VideoGames = VideoGame[];
