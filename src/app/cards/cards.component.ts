import { CardModalComponent } from './card-modal/card-modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardItem = {
    title:'Front-end',
    name:'Muhsin Polat Uçar',
    phone:'555 444 33 22',
    email:'info@mpumpumpu.com',
    address:'Ankara/Etimesgut'   
  }

  constructor(
    public dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }
  openAddCardModal():void{
    this.dialog.open(CardModalComponent,{
      width:'400px'
    })
  }

}
