import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';
import { DetailPasien, JumlahPasien } from '../dashboard-pelayanan.interface';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
@Component({
  selector: 'app-pasien-terlayani',
  templateUrl: './pasien-terlayani.component.html',
  styleUrls: ['./pasien-terlayani.component.scss']
})
export class PasienTerlayaniComponent implements OnInit {
  dataDetailPasien: DetailPasien[] = [];
  resultJumlahPasien:any = {
    rajal: 0,
    ranap: 0,
    rehab: 0,
    radiologi: 0,
    operasi: 0,
    laboratorium: 0,
    igd: 0,
    farmasi: 0,
  }
  constructor(private http: HttpService, private dialogService:TuiDialogService) { }

  ngOnInit(): void {
    // this.countPasien();
    this.countPasienTerlayani();
  }

  countPasienTerlayani() {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-count-pasien-terlayani`).subscribe((response: any) => {
      console.log("count pasien terlayani => ", response);

      this.resultJumlahPasien = {
        rajal:response.data.rawat_jalan,
        ranap: response.masihDirawat,
        rehab: response.data.rehab_medik,
        radiologi: response.data.radiologi,
        operasi: response.data.operasi,
        laboratorium: response.data.laboratorium,
        igd: response.data.igd,
        farmasi: response.farmasi
      }
    })
  }

  getDetail(content, id) {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/detail-pasien-rj?idRuangan=${id}`).subscribe((res: any) => {
      this.dataDetailPasien = res.data;
      this.showDialog(content);
    })
  }

  showDialog(content: PolymorpheusContent<TuiDialogContext>) {
    this.dialogService.open(content, {
      dismissible: true,
      size: 'page',
    }).subscribe();
  }

}
