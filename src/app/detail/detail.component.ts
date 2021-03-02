import { Component, OnInit } from "@angular/core";
import { VarGlobalNoteService } from "../var-global-note.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  textNama: String;
  textIsi: String;
  textTanggal: Date;
  constructor(public globalVar: VarGlobalNoteService) {
    this.textNama = String(this.globalVar.getNama());
    this.textIsi = String(this.globalVar.getIsi());
    this.textTanggal = this.globalVar.getTanggal();
  }

  ngOnInit() {}

  setFavorite() {
    this.globalVar.setFavorit("Yes");
  }
  notFavorite() {
    this.globalVar.setFavorit("No");
  }
}
