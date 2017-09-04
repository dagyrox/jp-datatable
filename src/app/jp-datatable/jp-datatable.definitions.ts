import {Observable} from 'rxjs/Observable';

export interface JpDatatableColumn {
    key: string,
    label: string,
    sortable?: boolean,
    filterable?: boolean,
    dateFormat?: string,
    width?: string
}

export interface JpDatatable{
    dataColumns: JpDatatableColumn[],
    dataSource: Observable<any[]>,
    headerColumns: string[]
}
