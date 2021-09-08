import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';

@Component({
  selector: 'app-top-ten-asal-perujuk-pasien-bpjs',
  templateUrl: './top-ten-asal-perujuk-pasien-bpjs.component.html',
  styleUrls: ['./top-ten-asal-perujuk-pasien-bpjs.component.scss']
})
export class TopTenAsalPerujukPasienBpjsComponent implements OnInit {
  legendPosition: LegendPosition = LegendPosition.Below;
  data: any[] = [];
  dataLoaded = false;
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Jumlah';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Rumah Sakit';

  colorScheme = {
    domain: ['#6F69AC', '#95DAC1', '#FFEBA1', '#FD6F96', '#22577A', '#57CC99' ]
  };

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getTopTenAsalPerujukBPJS();
  }

  getTopTenAsalPerujukBPJS() {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-topten-asalperujuk-bpjs`).subscribe((response: any) => {
      this.dataLoaded = true;
      for(let i = 0; i < response.length; i++) this.data.push({name: response[i].ppkrujukan, value: response[i].jumlah});
    })
  }

}
