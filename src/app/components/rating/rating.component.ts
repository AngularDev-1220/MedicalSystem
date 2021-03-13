import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {


  books = [
    { name: 'Book 1' },
    { name: 'Book 2' },
    { name: 'Book 3' },
    { name: 'Book 4' },
    { name: 'Book 5' }
  ];

  form = new FormGroup({
    book: new FormControl(this.books[0], Validators.required),
    rating: new FormControl('', Validators.required),
  });

  submit(): void {
    console.log(JSON.stringify(this.form.value));
    this.form.reset();
  }
  constructor() { }

  ngOnInit(): void {
  }



}
