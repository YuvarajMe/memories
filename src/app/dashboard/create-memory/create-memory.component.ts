import { Component } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-create-memory',
  templateUrl: './create-memory.component.html',
  styleUrls: ['./create-memory.component.css']
})
export class CreateMemoryComponent {

  @Input() name;
  url;

  constructor(public activeModal: NgbActiveModal) {}

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
