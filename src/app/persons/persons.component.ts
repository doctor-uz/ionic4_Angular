import {Component, OnInit, OnDestroy } from '@angular/core';
import {PersonsService} from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  isLoading = false;
  private personListSubs: Subscription;
  //private personService: PersonsService;

  constructor(private prsService: PersonsService ) {
    //this.personList = prsService.persons;
    //this.personService = prsService;
  }

ngOnInit() {
  //this.personList = this.prsService.persons;
  this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
    this.personList = persons;
    this.isLoading = false;
  });
  this.isLoading = true;
    this.prsService.fetchPersons();
}

onRemovePerson(personName: string) {
  this.prsService.removePerson(personName);
}

ngOnDestroy() {
  this.personListSubs.unsubscribe();
}

}
