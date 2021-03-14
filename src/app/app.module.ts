import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DialogModule } from '@ngneat/dialog';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { BootstrapFormComponent } from './components/bootstrap-form/bootstrap-form.component';
import { BootstrapTableComponent } from './components/bootstrap-table/bootstrap-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './components/rating/rating.component';
import { BoystoolbarDirective } from './directives/boystoolbar.directive';
import { MydialogComponent } from './components/mydialog/mydialog.component';



@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    BootstrapFormComponent,
    BootstrapTableComponent,
    RatingComponent,
    BoystoolbarDirective,
    MydialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DialogModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
