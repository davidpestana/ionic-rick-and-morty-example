import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../rick-and-morty/services/character.service';
import { Observable, of } from 'rxjs';
import { Character } from '../rick-and-morty/models/character';

@Component({
  selector: 'app-character-collection',
  templateUrl: './character-collection.page.html',
  styleUrls: ['./character-collection.page.scss'],
})
export class CharacterCollectionPage {

  characters$: Observable<Character[]>;
  value$: Observable<number>;

  constructor(private characterService: CharacterService) {
    this.characters$ = this.characterService.characters;
    this.value$ = this.characterService.value;
  }


  probar() {
    this.characterService.getFirst();
  }

  probarmas() {
    this.characterService.getMore();
  }

}
