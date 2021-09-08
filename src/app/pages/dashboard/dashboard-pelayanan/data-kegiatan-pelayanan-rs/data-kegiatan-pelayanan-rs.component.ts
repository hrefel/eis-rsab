import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';

@Component({
  selector: 'app-data-kegiatan-pelayanan-rs',
  templateUrl: './data-kegiatan-pelayanan-rs.component.html',
  styleUrls: ['./data-kegiatan-pelayanan-rs.component.scss']
})
export class DataKegiatanPelayananRsComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }

  getBorLosToi() {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-borlostoi`).subscribe((response: Response) => {
      console.log("borlostoi => ", response);
    })
  }

}
