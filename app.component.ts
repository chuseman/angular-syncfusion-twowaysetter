import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent {
  form = this.formBuilder.group({
    showCheckBox: [true],
    checkBox: [true],
    showNumericTextBox: [true],
    numericTextBox: [10],
    showRadio: [true],
    radio: ["a"],
    showTextBox: [true],
    textBox: ["text"]
  });

  constructor(private formBuilder: FormBuilder) {}

  resetForm() {
    this.form.patchValue({
      radio: "a",
      checkBox: true,
      textBox: "text",
      numericTextBox: 10
    });
  }
}
