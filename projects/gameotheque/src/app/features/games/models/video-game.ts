/**
 * Un jeu géré dans ma vidéothèque
 */
export interface VideoGame {
  label: string;
  releaseDate: Date
}

export type VideoGames = VideoGame[];
