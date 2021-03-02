import { Component, OnInit } from '@angular/core';
import { VarGlobalNoteService } from '../var-global-note.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private router : Router, public globalVar : VarGlobalNoteService) { }
  textNama = "";
  textIsi =  "";
  textTanggal : Date;
  ngOnInit() {
  }

  saveData()
  {
    this.globalVar.setNama(this.textNama);
    this.globalVar.setIsi(this.textIsi);
    this.globalVar.setTanggal(this.textTanggal);
  }
}