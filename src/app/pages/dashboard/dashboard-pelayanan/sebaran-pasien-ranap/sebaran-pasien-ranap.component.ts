import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';

@Component({
  selector: 'app-sebaran-pasien-ranap',
  templateUrl: './sebaran-pasien-ranap.component.html',
  styleUrls: ['./sebaran-pasien-ranap.component.scss'],
})
export class SebaranPasienRanapComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          console.log(value, ctx);
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    },
  };
  public pieChartData: number[] = [];
  public pieChartLabels: Label[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(40, 255, 191, 0.4)',
        'rgba(0, 31, 108, 0.3)',
        'rgb(0, 255, 255)',
        'rgb(135, 252, 77)',
        'rgb(245, 255, 45)',
        'rgb(226, 25, 52)',
        '#150050',
        '#150050',
        '#D4ECDD',
        '#E2C2B9',
        '#FFB344',
        '#6F69AC',
        '#80ED99',
        '#38A3A5',
        '#57CC99',
        '#8FC1D4',
        '#444941',
        '#5C3D2E',
        '#DAD5AB',
        '#BD4B4B',
        '#716F81',
        '#5089C6',
        '#055052',
        '#FF6767',
        '#F1ECC3',
      ],
    },
  ];
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getKunjunganRawatInap();
  }

  getKunjunganRawatInap() {
    this.http
      .get(`${BASE_URL.urlBaseTransaksi}eis/get-kunjungan-rawatinap`)
      .subscribe((response: any) => {
        for (let i = 0; i < response.length; i++) {
          this.pieChartData.push(response[i].jumlah);
          this.pieChartLabels.push(response[i].namaruangan);
        }
      });
  }
}
