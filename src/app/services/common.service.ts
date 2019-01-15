import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loader: any;
  toast: any;
  data:any = null;
  postList = [];

  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  async showLoader(msg) {
    this.loader = await this.loadingController.create({
      message: msg,
      translucent: true
    });
    return await this.loader.present();
  }

  async showToast(msg) {
    this.toast = await this.toastController.create({
      message: msg,
      showCloseButton: false,
      position: 'bottom',
      duration: 2000
    });
    this.toast.present();
  }

  dismissLoader(){
    this.loader.dismiss();
  }


}
