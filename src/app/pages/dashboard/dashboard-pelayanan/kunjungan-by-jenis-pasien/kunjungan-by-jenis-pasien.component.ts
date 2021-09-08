import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';
import { KunjunganRSByJenisPasien } from '../dashboard-pelayanan.interface';

@Component({
  selector: 'app-kunjungan-by-jenis-pasien',
  templateUrl: './kunjungan-by-jenis-pasien.component.html',
  styleUrls: ['./kunjungan-by-jenis-pasien.component.scss']
})
export class KunjunganByJenisPasienComponent implements OnInit {
  activeItemIndex = 0;
  dataAllLoaded = false;

  dataAll: any[] = [];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#ACFFAD', '#50CB93', '#28FFBF', '#035397']
  };

  dataDetail: any[] = [];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;

  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Instalasi';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Jumlah';

  colorSchemeDetail = {
    domain: ['#28FFBF', '#BCFFB9', '#F5FDB0', '#F7E6AD', '#F2E1C1']
  };
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getKunjunganPerjenisPasien();
  }

  getKunjunganPerjenisPasien() {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-kunjungan-perjenispasien`).subscribe((response: any) => {
      for (let i = 0; i < response.dataAll.length; i++) {
        this.dataAll.push({
          name: response.dataAll[i].kelompokpasien,
          value: response.dataAll[i].jumlah
        });
      }

      for (let ii = 0; ii < response.data.length; ii++) {
        this.dataDetail.push({
          name: response.data[ii].namadepartemen,
          series: [
            {
              name: "BPJS",
              value: response.data[ii].jmlBPJS
            },
            {
              name: "Umum/Pribadi",
              value: response.data[ii].jmlUmum
            },
            {
              name: "Perusahaan",
              value: response.data[ii].jmlPerusahaan
            },
            {
              name: "Asuransi Lain",
              value: response.data[ii].jmlAsuransiLain
            },
            {
              name: "Perjanjian",
              value: response.data[ii].jmlPerjanjian
            }
          ]
        })
      
      }

      this.dataAllLoaded = true;
    })
  }

}
