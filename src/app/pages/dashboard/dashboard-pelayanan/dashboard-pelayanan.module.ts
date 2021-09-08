import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPelayananComponent } from './dashboard-pelayanan.component';
import { RouterModule } from '@angular/router';
import { UIModule } from 'src/app/shared';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrendPengunjungPasienRajalComponent } from './trend-pengunjung-pasien-rajal/trend-pengunjung-pasien-rajal.component';
import { DaftarRegistrasiPasienCaraDaftarComponent } from './daftar-registrasi-pasien-cara-daftar/daftar-registrasi-pasien-cara-daftar.component';
import { InfoKedatanganPasienRajalComponent } from './info-kedatangan-pasien-rajal/info-kedatangan-pasien-rajal.component';
import { KunjunganByJenisPasienComponent } from './kunjungan-by-jenis-pasien/kunjungan-by-jenis-pasien.component';
import { PemakaianTempatTidurComponent } from './pemakaian-tempat-tidur/pemakaian-tempat-tidur.component';
import { InfoKedatanganPasienByJenisPelayananComponent } from './info-kedatangan-pasien-by-jenis-pelayanan/info-kedatangan-pasien-by-jenis-pelayanan.component';
import { TopTenAsalPerujukPasienBpjsComponent } from './top-ten-asal-perujuk-pasien-bpjs/top-ten-asal-perujuk-pasien-bpjs.component';
import { SebaranPasienRanapComponent } from './sebaran-pasien-ranap/sebaran-pasien-ranap.component';
import { TopTenDiagnosaComponent } from './top-ten-diagnosa/top-ten-diagnosa.component';
import { DataKegiatanPelayananRsComponent } from './data-kegiatan-pelayanan-rs/data-kegiatan-pelayanan-rs.component';
import { KetersediaanTempatTidurPerkelasComponent } from './ketersediaan-tempat-tidur-perkelas/ketersediaan-tempat-tidur-perkelas.component';
import { PasienMendaftarComponent } from './pasien-mendaftar/pasien-mendaftar.component';
import { PasienTerlayaniComponent } from './pasien-terlayani/pasien-terlayani.component';

@NgModule({
  declarations: [
    DashboardPelayananComponent,
    TrendPengunjungPasienRajalComponent,
    DaftarRegistrasiPasienCaraDaftarComponent,
    InfoKedatanganPasienRajalComponent,
    KunjunganByJenisPasienComponent,
    PemakaianTempatTidurComponent, 
    InfoKedatanganPasienByJenisPelayananComponent,
    TopTenAsalPerujukPasienBpjsComponent,
    SebaranPasienRanapComponent,
    TopTenDiagnosaComponent,
    DataKegiatanPelayananRsComponent,
    KetersediaanTempatTidurPerkelasComponent,
    PasienMendaftarComponent,
    PasienTerlayaniComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: DashboardPelayananComponent,
      },
    ]),
    ...UIModule,
    SharedModule,
  ],

  bootstrap: [DashboardPelayananComponent],
})
export class DashboardPelayananModule { }
