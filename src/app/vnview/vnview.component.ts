import { Component, OnInit, DoCheck } from '@angular/core';

import { Vn } from '../model/vn';
import { Adresse } from '../model/adresse';
import { Vertrag } from '../model/vertrag';
import { Umzugsmeldung } from '../model/umzugsmeldung';

import { AdresseService } from '../services/adresse.service';
import { VertragService } from '../services/vertrag.service';
import { UmzugsmeldungService } from '../services/umzugsmeldung.service';
import { tap, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-vnview',
  templateUrl: './vnview.component.html',
  styleUrls: ['./vnview.component.css']
})
export class VnviewComponent implements OnInit {

  selectedVn: Vn = new Vn();

  selectedAdresse: Adresse;

  serverAdresse: Adresse;

  selectedVertraege: Vertrag[];

  editorMode: Boolean = false;

  constructor(private adresseService: AdresseService, private vertragService: VertragService,
    private umzugsmeldungService: UmzugsmeldungService) { }

  ngOnInit() {
    this.getChildData();
  }

  getChildData() {
    if (this.selectedVn.kundennummer) {
      this.selectedVn.getRelation(Adresse, 'adresse').subscribe(
        success => {
          this.selectedAdresse = success;
        }
      );
      this.selectedVn.getRelationArray(Vertrag, 'vertraege').subscribe(
        success => {
          this.selectedVertraege = success;
        }
      );
    }
  }

  onSelectVn(selectedVn) {
    this.selectedVn = selectedVn;
    this.getChildData();
  }

  toggleEditorMode() {
    this.editorMode = !this.editorMode;
  }

  cancelCB() {
    this.editorMode = false;
  }

  /*
 return this.http.get('/api/books/' + id)
    .map((res: any) => res.json())
    .flatMap((book: any) => {
      return this.http.get('/api/authors/' + book.author_id)
        .map((res: any) => res.json());
    });
    */
  saveCB(event) {
    this.adresseService.create(event)
    .map((res: any) => res)
    .flatMap((adresse: any) => {
      const request = new Umzugsmeldung();
      request.vnId = this.selectedVn.id;
      request.adresseId = adresse.id;
      return this.umzugsmeldungService.create(request);
    }).subscribe(
      success => {
        console.log('Created umzugsmeldung');
      }
    );
  }

}
