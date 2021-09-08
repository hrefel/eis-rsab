import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';

@Component({
  selector: 'app-daftar-registrasi-pasien-cara-daftar',
  templateUrl: './daftar-registrasi-pasien-cara-daftar.component.html',
  styleUrls: ['./daftar-registrasi-pasien-cara-daftar.component.scss']
})
export class DaftarRegistrasiPasienCaraDaftarComponent implements OnInit {
  resultDaftarRegistrasiPasienMenurutCD: any = {
    do: {
      rajal: 0,
      ranap: 0,
      rehab: 0,
      igd: 0,
      lab: 0,
      rad: 0,
    },
    lp: {
      rajal: 0,
      ranap: 0,
      rehab: 0,
      igd: 0,
      lab: 0,
      rad: 0,
    },
  };
activeItemIndex = 0;
public pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'top',
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        console.log(value, ctx)
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
  }
};
public pieChartLabels: Label[] = ["Loket Pendaftaran", "Daftar Online"];
public pieChartData: number[] = [];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartColors = [
  {
    backgroundColor: ['rgba(40, 255, 191, 0.4)', 'rgba(0, 31, 108, 0.3)'],
  },
];
// #endregion

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getPasienPerjenisPenjadwalan();
  }

  // #DONE
  getPasienPerjenisPenjadwalan() {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-pasien-perjenis-penjadwalan`).subscribe((response: any) => {
      // console.log("pasien perjenis penjadwalan => ", response.data);
      this.pieChartData[0] = response.data[0].jumlah;
      this.pieChartData[1] = response.data[1].jumlah;
      this.resultDaftarRegistrasiPasienMenurutCD = {

        do: {
          rajal: response.data[0].rawatjalan,
          ranap: response.data[0].rawat_inap,
          rehab: response.data[0].rehab_medik,
          igd: response.data[0].igd,
          lab: response.data[0].laboratorium,
          rad: response.data[0].radiologi
        },
        lp: {
          rajal: response.data[1].rawatjalan,
          ranap: response.data[1].rawat_inap,
          rehab: response.data[1].rehab_medik,
          igd: response.data[1].igd,
          lab: response.data[1].laboratorium,
          rad: response.data[1].radiologi
        }
      }
    })
  }

}
