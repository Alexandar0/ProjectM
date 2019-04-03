import { Component, OnInit } from '@angular/core';
import { Soldier } from '../soldier';
import { SoldierService } from '../soldier.service';

@Component({
  selector: 'app-footsoldiers',
  templateUrl: './footsoldiers.component.html',
  styleUrls: ['./footsoldiers.component.css']
})
export class FootsoldiersComponent implements OnInit {
  footsoldiers: Soldier[];

  constructor(private soldierService: SoldierService) { }

  ngOnInit() {
    this.getFootsoldiers();
  }

  getFootsoldiers(): void {
    this.soldierService.getFootsoldiers()
    .subscribe(footsoldiers => this.footsoldiers = footsoldiers);
  }

}