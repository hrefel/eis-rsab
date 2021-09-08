export interface JumlahPasien {
    igd: number,
    jumlah: number,
    laboratorium: number,
    operasi: number,
    radiologi: number,
    rawat_inap: number,
    rawat_jalan: number,
    rehab_medik: number,
}

export interface TrendKunjunganPasienRajal {
    batalregistrasi: number,
    belumperiksa: number,
    diperiksa: number,
    tanggal: string,
    tglregistrasi: string,
    totalterdaftar: number,
    length: number,
}

export interface InfoKunjunganRajal {
    batalregistrasi: number,
    belumperiksa: number,
    diperiksa: number,
    kdruangan: number,
    total: number,
    namaruangan: string,
}

export interface KunjunganRSByJenisPasien {
    jumlah: number,
    kelompokpasien: string
}

export interface TempatTidurTerpakai {
    all: number,
    anaklaki: number,
    anakperempuan: number,
    balitalaki: number,
    balitaperempuan: number,
    perempuandewasa: number,
    geriatri: number,
    jumlah: number
}

export interface DetailPasien {
    namapasien: string,
    namaruangan: string,
    nocm: string,
    noregistrasi: string,
    tglpulang: string,
    tglregistrasi: string,
}
