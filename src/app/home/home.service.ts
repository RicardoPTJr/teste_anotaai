import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {
  public cacheCardList: Card[] = [];

  constructor(private _httpClient: HttpClient) { }

  public getCardList(): Observable<any> {
    return this._httpClient.get('http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json').pipe(take(1));
  }
}

export interface Card {
  id?: number,
  title?: string,
  description?: string,
  img?: string,
  type?: string
}