import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularHalModule } from 'angular4-hal';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';

import { ExternalConfigurationService } from './external-configuration-service';

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
import { UmzugsmeldungService } from './services/umzugsmeldung.service';
import { ExecutorService} from './service/executor.service';
import { ContextService } from './services/context.service';
import { BeratungsprotokollService } from './services/beratungsprotokoll.service';

import { Vertrag } from './model/vertrag';
import { VertragsucheComponent } from './vertragsuche/vertragsuche.component';
import { VertragsviewComponent } from './vertragsview/vertragsview.component';
import { VnviewComponent } from './vnview/vnview.component';
import { AdresseditorComponent } from './component/adresseditor/adresseditor.component';
import { AdressviewerComponent } from './component/adressviewer/adressviewer.component';
import { HeaderInterceptor } from './header-interceptor';
import { VertragviewerComponent } from './component/vertragviewer/vertragviewer.component';
import { VertrageditorComponent } from './component/vertrageditor/vertrageditor.component';
import { HausrateditorComponent } from './component/vertrageditor/hausrateditor/hausrateditor.component';
import { KfzeditorComponent } from './component/vertrageditor/kfzeditor/kfzeditor.component';
import { LveditorComponent } from './component/vertrageditor/lveditor/lveditor.component';

library.add(faCoffee);


const appRoutes: Routes = [
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
];


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
    AdressviewerComponent,
    VertragviewerComponent,
    VertrageditorComponent,
    HausrateditorComponent,
    KfzeditorComponent,
    LveditorComponent
  ],
  imports: [
    AngularHalModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MatAutocompleteModule,
    MatFormFieldModule,
    CdkTableModule,
    MatInputModule,
    MatProgressBarModule,
    MatTableModule,
    RouterModule.forRoot(
      appRoutes, {
        onSameUrlNavigation: 'reload'
      }
    )
  ],
  providers: [VnService, VertragService, AdresseService, UmzugsmeldungService, ExecutorService, ContextService, BeratungsprotokollService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: 'ExternalConfigurationService',
      useClass: ExternalConfigurationService
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
