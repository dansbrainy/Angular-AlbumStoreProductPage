import { Injectable } from '@angular/core';

import { Http, Respone } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private_albumUrl = '../assets/album.json';

  constructor(private_http: Http) { }

getAlbum(id: number) {
  return this.http.get(this._albumUrl).map((response) => response.json());
}
}
