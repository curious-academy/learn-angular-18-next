/**
 * Un jeu géré dans ma vidéothèque
 */
export interface VideoGame {
  nom: string;
  dateSortie: Date
}

export type VideoGames = VideoGame[];
