import { Component, OnInit } from '@angular/core';
import { Soldier } from '../soldier';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SoldierService }  from '../soldier.service';


@Component({
  selector: 'app-soldier-detail',
  templateUrl: './soldier-detail.component.html',
  styleUrls: ['./soldier-detail.component.css']
})
export class SoldierDetailComponent implements OnInit {
  soldier: Soldier;
  
  constructor(
    private route: ActivatedRoute,
    private soldierService: SoldierService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSoldier();
  }

  getSoldier(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.soldierService.getSoldier(id)
      .subscribe(soldier => this.soldier = soldier);
  }

  goBack(): void {
    this.location.back();
  }

}
