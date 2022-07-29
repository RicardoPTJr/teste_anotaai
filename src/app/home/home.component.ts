import { Component, OnInit } from '@angular/core';
import { Card, HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _delaySearch: any;

  public cardList: Card[] = [];
  public cardTipoBg = ['blue', 'red', 'gold'];

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this._homeService.getCardList().subscribe({
      next: (res: any) => {
         console.log(res);
         this._homeService.cacheCardList = res;
         this.cardList = this._homeService.cacheCardList;
      },
      error(err) {
        console.log(err);
      }
    });
  }

  public closeCard(cardId: number | undefined): void {
    console.log(cardId);
    if (cardId) {
      const card = document.getElementById(`card-${cardId.toString()}`);
      if (card) {
        card.style.display = 'none';
      }
    }
  }

  public cardTipo(cardType: string | undefined): string {
    switch (cardType) {
      case '1': return 'Paisagem';
      case '2': return 'Flor';
      case '3': return 'Pizza';
    
      default: return '';
    }
  }

  public searchCardKeyDown() {
    clearTimeout(this._delaySearch);
    // Pequeno delay para não ficar disparando buscas direto ao servidor
    // Tempo para pessoa terminar de digitar a busca
    this._delaySearch = setTimeout(() => this._searchCard(), 500);
  }

  private _searchCard() {
    this.cardList = this._homeService.cacheCardList;
    let searchValue = (document.getElementById('inputSearchCardId') as HTMLInputElement).value;
    if (searchValue !== '') {
      const filteredList = this.cardList.filter(
        (card: any) => card.title.includes(searchValue) || card.description.includes(searchValue)
      );

      if (filteredList.length > 0) {
        this.cardList = filteredList;
      } else {
        alert('Nenhum resultado para busca ' + searchValue);
      }
    }
  }

  public toInt(value: string | undefined) {
    return value ? parseInt(value, 10) : 0;
  }

}
