import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  exampleDatabase = new ExampleDatabase();
  displayedColumns = {
    dataKeys: ['id', 'letter', 'thing'],
    columnLabels: ['ID', 'Letter', 'Thing']};
  }

// lets pretend we go out and get data.  we'll just pass he observable to the datatable
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  get data(): any[] { return this.dataChange.value; }

  constructor() {
    this.addUser();
  }

  /** Adds a new user to the database. */
  addUser() {
    this.dataChange.next([
      {
        id: 1,
        letter: 'a',
        thing: 'apple'
      },
      {
        id: 2,
        letter: 'b',
        thing: 'battery'
      },
      {
        id: 3,
        letter: 'c',
        thing: 'this thing is a really long thing, with alot of data in it.  i wonder how wide this thing could get.  like, i wonder, if this thing were a note, with alot of text, what would it look like?'
      }
    ]);
  }
}