import { Component, OnInit, VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {  DialogService } from '@ngneat/dialog';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class AppComponent implements OnInit  {

  constructor(private dialog: DialogService) {}

  ngOnInit(): void {

  }


  async open(): Promise<void> {
    const { MydialogComponent } = await import (
      './components/mydialog/mydialog.component'
    );

    this.dialog.open(MydialogComponent);
  }
}
