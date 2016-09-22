import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the TrainDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/train-details/train-details.html',
})
export class TrainDetailsPage {

  details

  constructor(private navCtrl: NavController,  private navParams: NavParams) {
    this.details = this.navParams.get('stationDetails');
  }

}
