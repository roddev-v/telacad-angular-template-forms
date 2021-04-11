import {Component, ViewChild} from '@angular/core';
import {FormDataModel} from './models/formDataModel';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm', null) form: NgForm;

  formData = new FormDataModel();

  reset() {
    this.form.reset();
    this.form.form.markAsPristine();
  }

  submit() {
    console.log(this.form.value);
  }
}
