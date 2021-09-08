import { Injectable } from "@angular/core";
import { Ng2IzitoastService } from 'ng2-izitoast';


@Injectable()
export class AlertService {
    constructor(private ng2IziToast: Ng2IzitoastService) {}

    error(content:string, position: string, title:string) {
        title = title ? title : "Error"
        this.ng2IziToast.error({
            title: title,
            message: content,
            position: position
          });
    }

    warning(content:string, position: string, title:string) {
        title = title ? title : "Perhatian"
        this.ng2IziToast.warning({
            title: title,
            message: content,
            position: position
          });
    }

    info(content:string, position: string, title?:string) {
        title = title ? title : "Informasi"
        this.ng2IziToast.info({
            title: title,
            message: content,
            position: position
          });
    }

    success(content:string, position: string, title:string) {
        title = title ? title : "Sukses"
        this.ng2IziToast.success({
            title: title,
            message: content,
            position: position
          });
    }

  
}
