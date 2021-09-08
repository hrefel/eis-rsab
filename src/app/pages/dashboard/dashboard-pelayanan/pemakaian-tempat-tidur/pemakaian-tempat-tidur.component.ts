import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';
import { TempatTidurTerpakai } from '../dashboard-pelayanan.interface';

@Component({
  selector: 'app-pemakaian-tempat-tidur',
  templateUrl: './pemakaian-tempat-tidur.component.html',
  styleUrls: ['./pemakaian-tempat-tidur.component.scss']
})
export class PemakaianTempatTidurComponent implements OnInit {
  resultData: TempatTidurTerpakai = {
    all: 0,
    anaklaki: 0,
    anakperempuan: 0,
    balitalaki: 0,
    balitaperempuan: 0,
    perempuandewasa: 0,
    geriatri: 0,
    jumlah: 0
  };
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getTempatTidurTerpakai();
  }

  getTempatTidurTerpakai() {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-tempattidur-terpakai`).subscribe((response: TempatTidurTerpakai) => {
      this.resultData = response;
    })
  }
}
