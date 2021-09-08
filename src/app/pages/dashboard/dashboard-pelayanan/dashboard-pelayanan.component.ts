import { Component, Inject, OnInit } from '@angular/core';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';
import { DetailPasien, JumlahPasien } from './dashboard-pelayanan.interface';


@Component({
  selector: 'app-dashboard-pelayanan',
  templateUrl: './dashboard-pelayanan.component.html',
  styleUrls: ['./dashboard-pelayanan.component.scss']
})
export class DashboardPelayananComponent implements OnInit {
  activeItemIndexTabJmlPasien = 0;
  constructor(private http: HttpService, @Inject(TuiDialogService) private readonly dialogService: TuiDialogService) { }

  ngOnInit(): void {
    this.getKunjunganRS();
  }
  
  getKunjunganRS() {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-kunjungan-rs`).subscribe((response: Response) => {
      // console.log("kunjungan RS => ", response);
    })
  }

  
}
