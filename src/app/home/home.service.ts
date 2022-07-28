import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HomeService {
  public cacheCardList: Card[] = []/* [
    {
      "id": 1,
      "title": "Árvore",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      "img": "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-01.jpg",
      "type": "1"
    },
    {
      "id": 2,
      "title": "Flor",
      "description": "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      "img": "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-02.jpg",
      "type": "2"
    },
    {
      "id": 3,
      "title": "Fatia de pizza",
      "description": "Type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      "img": "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-03.jpg",
      "type": "3"
    },
    {
      "id": 4,
      "title": "Girassol",
      "description": "It has survived not only five centuries, but also the leap into electronic typesetting.",
      "img": "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-04.jpg",
      "type": "2"
    },
    {
      "id": 5,
      "title": "Pizza",
      "description": "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      "img": "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-05.jpg",
      "type": "3"
    },
    {
      "id": 6,
      "title": "Pizza inteira",
      "description": "Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
      "img": "http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/assets/img-test-06.jpg",
      "type": "3"
    }
  ] */;
  
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