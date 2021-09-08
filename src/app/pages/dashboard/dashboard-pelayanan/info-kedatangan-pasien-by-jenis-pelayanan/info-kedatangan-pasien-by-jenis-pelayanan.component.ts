import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';

@Component({
  selector: 'app-info-kedatangan-pasien-by-jenis-pelayanan',
  templateUrl: './info-kedatangan-pasien-by-jenis-pelayanan.component.html',
  styleUrls: ['./info-kedatangan-pasien-by-jenis-pelayanan.component.scss']
})
export class InfoKedatanganPasienByJenisPelayananComponent implements OnInit {
  colorSchemeDetail = {
    domain: ['#28FFBF', '#BCFFB9', '#F5FDB0', '#F7E6AD', '#F2E1C1']
  };
  dataLoaded = false;
  data: any[] = [];
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getKunjunganJenisLayanan();
  }

  getKunjunganJenisLayanan(): void {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-kunjungan-jenis-pelayanan`).subscribe((response: any) => {
      for (let i = 0; i < response.data.length; i++) {

        // this.data = response;
        this.data.push({
          name: response.data[i].namadepartemen,
          series: [{
            name: "Reguler",
            value: response.data[i].reguler
          }, {
            name: "Eksekutif",
            value: response.data[i].eksekutif
          }]
        })
        this.dataLoaded = true;
      }
    })
  }



}
