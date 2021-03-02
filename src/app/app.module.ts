import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputComponent } from './input/input.component';
import { DetailComponent } from './detail/detail.component';
import { FavoritComponent } from './favorit/favorit.component';
import {RouterModule, Routes} from '@angular/router';
import { VarGlobalNoteService } from './var-global-note.service';

const ROUTES : Routes = [
  {path : 'input', component: InputComponent},
  {path : 'detail', component: DetailComponent},
  {path : 'favorit', component: FavoritComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, InputComponent, DetailComponent, FavoritComponent ],
  bootstrap:    [ AppComponent ],
  providers: [VarGlobalNoteService]
})
export class AppModule { }
