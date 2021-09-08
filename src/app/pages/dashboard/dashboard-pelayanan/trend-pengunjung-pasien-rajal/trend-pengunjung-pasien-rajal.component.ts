import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';

@Component({
  selector: 'app-trend-pengunjung-pasien-rajal',
  templateUrl: './trend-pengunjung-pasien-rajal.component.html',
  styleUrls: ['./trend-pengunjung-pasien-rajal.component.scss']
})
export class TrendPengunjungPasienRajalComponent implements OnInit {
 
  public barChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },

    annotation: {

    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public lineChartColors: Color[] = [
    {
      backgroundColor: '#F55C47',
      // borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      // borderWidth: 1
    },
    {
      backgroundColor: '#FF7600',
      // borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
      // borderWidth: 1
    },
    {
      backgroundColor: '#B5EAEA',
      // borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      // borderWidth: 1
    }
  ];
  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Belum Diperiksa' },
    { data: [], label: 'Batal Registrasi' },
    { data: [], label: 'Diperiksa' }
  ];
  //#endregion
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getTrendKunjunganRawatJalan();
  }

  getTrendKunjunganRawatJalan() {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-trend-kunjungan-rawatjalan`).subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        this.barChartLabels.push(response[i].tanggal);
        this.barChartData[0].data.push(response[i].belumperiksa);
        this.barChartData[1].data.push(response[i].batalregistrasi);
        this.barChartData[2].data.push(response[i].diperiksa);
      }
    })
  }

}
