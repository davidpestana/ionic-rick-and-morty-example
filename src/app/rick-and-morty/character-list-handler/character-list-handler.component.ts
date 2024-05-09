import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-character-list-handler',
  templateUrl: './character-list-handler.component.html',
  styleUrls: ['./character-list-handler.component.scss'],
})
export class CharacterListHandlerComponent implements OnChanges  {
  @Input() characters: Character[] | null = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }

}
