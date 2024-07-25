import { Observable } from "rxjs";

/**
 *
 */
export interface GetAll<T> {
  getAll(): Observable<T>;
}

/**
 *
 */
export type StatePanel = 'success' | 'failed';
