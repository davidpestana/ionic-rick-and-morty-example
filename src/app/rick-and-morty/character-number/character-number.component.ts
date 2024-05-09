import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-number',
  templateUrl: './character-number.component.html',
  styleUrls: ['./character-number.component.scss'],
})
export class CharacterNumberComponent {
  @Input() value?: number | null;
  constructor() { }
}
