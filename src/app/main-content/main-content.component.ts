import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  providers: [HttpService]
})
export class MainContentComponent {

  constructor(private httpService: HttpService) {}

  btnState = false;
  submit() {
    this.btnState ? this.btnState = false : this.btnState = true;
    this.httpService.postBtnState(this.btnState).subscribe();
  }
}
