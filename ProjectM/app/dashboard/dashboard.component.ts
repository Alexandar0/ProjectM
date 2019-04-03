import { Component, OnInit } from '@angular/core';
import { Soldier } from '../soldier';
import { SoldierService } from '../soldier.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  footsoldiers: Soldier[] = [];
 
  constructor(private soldierService: SoldierService) { }
 
  ngOnInit() {
    this.getFootsoldiers();
  }
 
  getFootsoldiers(): void {
    this.soldierService.getFootsoldiers()
      .subscribe(footsoldiers => this.footsoldiers = footsoldiers.slice(1, 5));
  }
}