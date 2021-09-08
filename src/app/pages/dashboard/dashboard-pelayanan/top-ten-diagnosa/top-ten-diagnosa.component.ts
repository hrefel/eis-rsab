import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';

@Component({
  selector: 'app-top-ten-diagnosa',
  templateUrl: './top-ten-diagnosa.component.html',
  styleUrls: ['./top-ten-diagnosa.component.scss']
})
export class TopTenDiagnosaComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    // this.getTopTenDiagnosa();
  }

  getTopTenDiagnosa() {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-topten-diagnosa`).subscribe((response: Response) => {
      console.log("top 10 diagnosa => ", response);
    })
  }

}
