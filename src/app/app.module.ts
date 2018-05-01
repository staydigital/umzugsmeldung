import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CenterComponent } from './center/center.component';
import { FooterComponent } from './footer/footer.component';
import { SucheComponent } from './suche/suche.component';
import { VorgaengeComponent } from './vorgaenge/vorgaenge.component';
import { VnsucheComponent } from './vnsuche/vnsuche.component';

import { VnService } from './services/vn.service';
import { VertragService } from './services/vertrag.service';
import { AdresseService } from './services/adresse.service';

import { Vertrag } from './model/vertrag';
import { VertragsucheComponent } from './vertragsuche/vertragsuche.component';
import { VertragsviewComponent } from './vertragsview/vertragsview.component';
import { VnviewComponent } from './vnview/vnview.component';
import { AdresseditorComponent } from './component/adresseditor/adresseditor.component';
import { AdressviewerComponent } from './component/adressviewer/adressviewer.component';

library.add(faCoffee);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CenterComponent,
    FooterComponent,
    SucheComponent,
    VorgaengeComponent,
    VnsucheComponent,
    VertragsucheComponent,
    VertragsviewComponent,
    VnviewComponent,
    AdresseditorComponent,
    AdressviewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule.forRoot(),
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      {
        path: 'suche',
        component: SucheComponent
      },
      {
        path: 'vorgaenge',
        component: VorgaengeComponent
      },
      {
        path: 'versicherungsnehmer',
        component: VnviewComponent
      },
      {
        path: 'vertraege',
        component: VertragsviewComponent
      }
    ])
  ],
  providers: [VnService, VertragService, AdresseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
