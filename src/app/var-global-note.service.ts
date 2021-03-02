import { Injectable } from '@angular/core';

@Injectable()
export class VarGlobalNoteService {

  private dataNama : String = "";
  private dataIsi : String = "";
  private dataTanggal : Date;

  private dataFavorite : String = "";
  constructor() { }

  public getNama()
  {
    return this.dataNama;
  }
  public getIsi()
  {
    return this.dataIsi;
  }
  public getTanggal()
  {
    return this.dataTanggal;
  }
  public getFavorit()
  {
    return this.dataFavorite;
  }

  public setNama(nama : String)
  {
    this.dataNama = nama;
  }
  public setIsi(isi : String)
  {
    this.dataIsi = isi;
  }
  public setTanggal(tanggal : Date)
  {
    this.dataTanggal = tanggal;
  }
  public setFavorit(favorit : String)
  {
    this.dataFavorite = favorit;
  }
}