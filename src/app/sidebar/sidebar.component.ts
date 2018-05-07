import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { ContextService } from '../services/context.service';
import { VertragService } from '../services/vertrag.service';
import { BeratungsprotokollService } from '../services/beratungsprotokoll.service';
import { Beratungsprotokoll } from '../model/beratungsprotokoll';
import { Router } from '@angular/router';

export interface Element {
  vsnr: string;
  sparte: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  displayedColumns = ['vsnr', 'sparte'];

  dataSource = new BeratungsprotokollDataSource(this.beratungsprotokollService);

  applyFilter(filterValue: string) {
    console.log('applyFilter');
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  }

  constructor(private contextService: ContextService, private beratungsprotokollService: BeratungsprotokollService,
    private vertragService: VertragService, private router: Router) {
    this.contextService.refreshSidebar$.subscribe(
      sucess => {
        this.refresh();
      }
    );
  }

  ngOnInit() {
    console.log(this.dataSource);
  }

  onRowClicked(row: Beratungsprotokoll) {
    this.vertragService.get(row.vertragId).subscribe(
      success => {
        this.contextService.setSelectedVertrag(success);
        this.router.navigateByUrl('/vertraege');
      }
    );
  }

  refresh() {
    this.dataSource = new BeratungsprotokollDataSource(this.beratungsprotokollService);
  }

}

export class BeratungsprotokollDataSource extends DataSource<any> {
  constructor(private beratungsprotokollService: BeratungsprotokollService) {
    super();
  }
  connect(): Observable<Beratungsprotokoll[]> {
    return this.beratungsprotokollService.getAll();
  }
  disconnect() {}
}
