import { Component } from '@angular/core';

import { HttpService } from './http.service';

@Component({
  moduleId: module.id,
  selector: 'http-http',
  templateUrl: 'http.component.html',
  styleUrls: ['http.component.css'],
  providers: [HttpService]
})
export class HttpComponent {
  constructor(private httpService: HttpService) {}

  onSubmit(username: string, email: string) {
    this.httpService.sendData({username:username, email: email})
    .subscribe(
      data => console.log(data)
      
    );
  }
}
