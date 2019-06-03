import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})

export class PersonsService {
  persons: string[] = ['Max', 'Dilshod', 'Nodira'];

  addPerson(name: string) {
    this.persons.push(name);
  }
}
