import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListHandlerComponent } from './character-list-handler/character-list-handler.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CharacterNumberComponent } from './character-number/character-number.component';



@NgModule({
  declarations: [
    CharacterListHandlerComponent,
    CharacterNumberComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [CharacterListHandlerComponent, CharacterNumberComponent]
})
export class RickAndMortyModule { }
