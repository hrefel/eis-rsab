const _BASELOCAL = `http://192.168.12.3`,
  _BASEPROD = 'https://smart.rsabhk.co.id',
  _BASE = _BASEPROD;

const _PORTDEV = "2222",
  _PORT_PROD = "2222",
  _PORTJava = "8080",
  _PORT_PHP = '5555',
  _PORT = _PORT_PROD;

const _BASE_URL = `${_BASE}:${_PORT}`;

export const BASE_URL = {
  baseURL: `${_BASE_URL}/service/`,
  authLogin: `${_BASE}:${_PORT_PROD}/simrs_harkit/service/auth/sign-in`,
  authLogout: `${_BASE_URL}/service/auth/sign-out`,

  masterURL: `${_BASE_URL}/service/master/`,

  sdmService: `${_BASE}:${_PORTJava}/jasamedika-sdm/`,
  genericService: `${_BASE}:${_PORTJava}/jasamedika-sdm/service/list-generic/?`,

  urlBaseTransaksi: `${_BASE_URL}/simrs_harkit/service/transaksi/`,
  urlBaseMaster: `${_BASE_URL}/service/master/`,
};
