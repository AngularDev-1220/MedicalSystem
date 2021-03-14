import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DialogService, DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-mydialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MydialogComponent implements OnInit {

  constructor(public ref: DialogRef) { }

  ngOnInit(): void {
  }

}
