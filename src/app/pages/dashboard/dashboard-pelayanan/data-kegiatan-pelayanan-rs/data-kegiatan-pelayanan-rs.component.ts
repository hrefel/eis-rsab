import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';
import { Format } from 'src/utils/format';

@Component({
  selector: 'app-data-kegiatan-pelayanan-rs',
  templateUrl: './data-kegiatan-pelayanan-rs.component.html',
  styleUrls: ['./data-kegiatan-pelayanan-rs.component.scss'],
})
export class DataKegiatanPelayananRsComponent implements OnInit {
  periode: any = Format.toDateWithFormat(new Date(), 'DD MMMM YYYY');
  dataKegiatanRS: any = {
    alos: 0,
    bor: 0,
    bto: 0,
    bulan: Format.toDateWithFormat(new Date(), 'DD MMMM YYYY'),
    gdr: 0,
    ndr: 0,
    tahun: new Date().getFullYear(),
    toi: 0,
  };
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getBorLosToi();
  }

  getBorLosToi() {
    this.http
      .get(`${BASE_URL.urlBaseTransaksi}eis/get-borlostoi`)
      .subscribe((response: any) => {
        this.dataKegiatanRS = response[0];
      });
  }
}
