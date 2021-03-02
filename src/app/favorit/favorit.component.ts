import { Component, OnInit } from "@angular/core";
import { VarGlobalNoteService } from "../var-global-note.service";

@Component({
  selector: "app-favorit",
  templateUrl: "./favorit.component.html",
  styleUrls: ["./favorit.component.css"]
})
export class FavoritComponent implements OnInit {
  textNama = "";
  textIsi = "";
  textTanggal: Date;
  textFavorite = "";

  constructor(public globalVar: VarGlobalNoteService) {
    this.textNama = String(this.globalVar.getNama());
    this.textIsi = String(this.globalVar.getIsi());
    this.textTanggal = this.globalVar.getTanggal();
    this.textFavorite =
      "Status Favorite : " + String(this.globalVar.getFavorit());
  }

  ngOnInit() {}
}
