import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';

@Component({
  moduleId: module.id,
  selector: 'http-http',
  templateUrl: 'http.component.html',
  styleUrls: ['http.component.css'],
  providers: [HttpService]
})
export class HttpComponent implements OnInit{
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getData()
    .subscribe(
      (data: any) => console.log(data)
    );
  }
}
