import { Card } from 'src/app/models/card';
import { CardService } from './../services/card.service';
import { CardModalComponent } from './card-modal/card-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  cards!: Card[];

  constructor(public dialog: MatDialog, private cardService: CardService) {}

  ngOnInit(): void {
    this.getCards();
  }
  openAddCardModal(): void {
    this.dialog.open(CardModalComponent, {
      width: '400px',
    });
  }
  getCards(): void {
    this.cardService.getCards().subscribe((res: Card[]) => {
      this.cards = res;
    });
  }
}
