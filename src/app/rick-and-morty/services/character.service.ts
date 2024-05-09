import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  url = 'https://rickandmortyapi.com/api/character?page=';
  page = 1;
  private _characters = new BehaviorSubject<Character[]>([]);

  constructor(private http:HttpClient) { }

  getFirst() {
    this.http.get(this.url+this.page)
      .subscribe(({results}:any) => this._characters.next(results));
  }

  getMore() {
    this.http.get(this.url+(++this.page))
      .subscribe(({results}:any) => this._characters.next([...this._characters.value].concat(results)));
  }

  get characters(): Observable<Character[]> {
    return this._characters.asObservable()
  }

  get value(): Observable<number> {
    return this.characters
      .pipe(
        map((characters: Character[]) => {return characters.length})
      )
  }

}
