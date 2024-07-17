/**
 * Un jeu géré dans ma vidéothèque
 */
export interface VideoGame {
  nom: string;
  releaseDate: Date
}

export type VideoGames = VideoGame[];
