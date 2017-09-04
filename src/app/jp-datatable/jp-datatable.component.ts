import { Component, Input, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { JpDatatable } from './jp-datatable.definitions';

@Component({
  selector: 'jp-datatable',
  templateUrl: './jp-datatable.component.html',
  styleUrls: ['./jp-datatable.component.css']
})
export class JpDatatableComponent implements OnInit {
  //@Input() dataObservable: any;
  @Input() datatableDefinition: JpDatatable;
  dataSource: JpDataSource | null;

  ngOnInit() {
    this.dataSource = new JpDataSource(this.datatableDefinition.dataSource);
  }

}

export class JpDataSource extends DataSource<any> {
  constructor(private dataObservable: any) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Array<any>> {
    return this.dataObservable;  
  }

  disconnect() {}
}