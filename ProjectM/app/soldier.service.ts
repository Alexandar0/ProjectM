import { Injectable } from '@angular/core';
import { Soldier } from './soldier';
import { FOOTSOLDIERS } from './mock-footsoldiers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SoldierService {

  constructor(private messageService: MessageService) { }

  getFootsoldiers(): Observable<Soldier[]> {
    this.messageService.add('SoldierService: fetched footsoldiers');
    return of(FOOTSOLDIERS);
  }

  getSoldier(id: number): Observable<Soldier> {
    this.messageService.add(`SoldierService: fetched soldier id=${id}`);
    return of(FOOTSOLDIERS.find(soldier => soldier.id === id));
  }

}
