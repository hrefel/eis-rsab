import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BASE_URL } from 'src/app/shared/url.config';

@Component({
  selector: 'app-ketersediaan-tempat-tidur-perkelas',
  templateUrl: './ketersediaan-tempat-tidur-perkelas.component.html',
  styleUrls: ['./ketersediaan-tempat-tidur-perkelas.component.scss']
})
export class KetersediaanTempatTidurPerkelasComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getTempatTidurPerkelas();
  }

  getTempatTidurPerkelas() {
    this.http.get(`${BASE_URL.urlBaseTransaksi}eis/get-tempattidur-perkelas`).subscribe((response: Response) => {
      // console.log("tempat tidur perkelas => ", response);
    })
  }

}
