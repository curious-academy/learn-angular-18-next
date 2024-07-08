import { Observable } from "rxjs";

export interface GetAll<T> {
  getAll(): Observable<T>;
}
