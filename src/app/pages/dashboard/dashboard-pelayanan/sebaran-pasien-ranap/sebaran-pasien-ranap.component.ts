import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';

@Component({
  selector: 'app-sebaran-pasien-ranap',
  templateUrl: './sebaran-pasien-ranap.component.html',
  styleUrls: ['./sebaran-pasien-ranap.component.scss']
})
export class SebaranPasienRanapComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    // this.getKunjunganRawatInap();
  }

  getKunjunganRawatInap() {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-kunjungan-rawatinap`).subscribe((response: Response) => {
      // console.log("kunjungan ranap => ", response);
    })
  }

}
