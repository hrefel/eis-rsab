import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { defaultSort, TuiComparator } from '@taiga-ui/addon-table';
import { isPresent, tuiReplayedValueChangesFrom } from '@taiga-ui/cdk';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, filter, map, share, startWith, switchMap } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';
import { InfoKunjunganRajal } from '../dashboard-pelayanan.interface';
type Key = 'batalregistrasi' | 'belumperiksa' | 'diperiksa' | 'total' | 'namaruangan';

@Component({
  selector: 'app-info-kedatangan-pasien-rajal',
  templateUrl: './info-kedatangan-pasien-rajal.component.html',
  styleUrls: ['./info-kedatangan-pasien-rajal.component.scss']
})
export class InfoKedatanganPasienRajalComponent implements OnInit {
  ColumnMode = ColumnMode;
  resultInfoKunjunganRajal: InfoKunjunganRajal[];
  columns = [
    { prop: 'namaruangan', name: "Poli" },
    { prop: 'belumperiksa', name: 'Belum Diperiksa	' },
    { prop: 'diperiksa', name: 'Diperiksa' },
    { prop: 'batalregistrasi', name: 'Batal Registrasi' },
    { prop: 'total', name: 'Total' }
  ];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getInfoKunjunganRawatJalan();
  }

  getInfoKunjunganRawatJalan() {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-info-kunjungan-rawatjalan`).subscribe((response: InfoKunjunganRajal[]) => {
      // console.log("info kunjungan rajal => ", response);
      this.resultInfoKunjunganRajal = [...response];
    })
  }

}
