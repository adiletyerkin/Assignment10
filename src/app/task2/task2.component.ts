import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {


  @ViewChild('task2Form') task2Form: NgForm | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(task2Form: NgForm) {
    // @ts-ignore
    console.log(this.task2Form.value);
  }


}
