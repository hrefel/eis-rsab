import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';
import { DetailPasien, JumlahPasien } from '../dashboard-pelayanan.interface';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-pasien-mendaftar',
  templateUrl: './pasien-mendaftar.component.html',
  styleUrls: ['./pasien-mendaftar.component.scss']
})
export class PasienMendaftarComponent implements OnInit, OnDestroy {
  dataDetailPasien: DetailPasien[] = [];
  resultJumlahPasien: BehaviorSubject<JumlahPasien>;
  constructor(private http: HttpService, private dialogService: TuiDialogService) { }

  ngOnInit(): void {
    this.countPasien();

    this.resultJumlahPasien
  }

  countPasien() {
    let defaultData = {
      igd: 0,
      jumlah: 0,
      laboratorium: 0,
      operasi: 0,
      radiologi: 0,
      rawat_inap: 0,
      rawat_jalan: 0,
      rehab_medik: 0,
    }
    this.resultJumlahPasien = new BehaviorSubject<JumlahPasien>(defaultData);
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-count-pasien`).subscribe((response: JumlahPasien) => {
      this.resultJumlahPasien.next(response);
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

  ngOnDestroy() {
    console.log("1", this.resultJumlahPasien);
    this.resultJumlahPasien.unsubscribe();

    console.log("2", this.resultJumlahPasien);
  }
}
