import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';

@Component({
  selector: 'app-top-ten-diagnosa',
  templateUrl: './top-ten-diagnosa.component.html',
  styleUrls: ['./top-ten-diagnosa.component.scss'],
})
export class TopTenDiagnosaComponent implements OnInit {
  dataTopTenDiagnosa: any;
  listColor = [
    '#ECEFA4',
    '#F0E5CF',
    '#FAAD80',
    '#C9CCD5',
    '#F7E6AD',
    '#FFF7AE',
    '#FDD2BF',
    '#78DEC7',
    '#94D0CC',
    '#E98580',
  ];
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getTopTenDiagnosa();
  }

  getTopTenDiagnosa() {
    this.http
      .get(`${BASE_URL.urlBaseTransaksi}eis/get-topten-diagnosa`)
      .subscribe((response: any) => {
        for (let i = 0; i < response.length; i++) {
          response[i].color = this.listColor[i];
        }
        this.dataTopTenDiagnosa = response;
      });
  }
}
