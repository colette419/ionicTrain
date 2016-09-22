import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrainDetailsPage } from '../train-details/train-details';


/*
  Generated class for the TrainTimesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/train-times/train-times.html',
})
export class TrainTimesPage {


timesDisplay = [4, 6, 3, 2];

  sampleDepartingTrains: any = [
      {
        "RitNummer": "5185",
        "VertrekTijd": "2016-09-22T22:13:00+0200",
        "EindBestemming": "Roosendaal",
        "TreinSoort": "Sprinter",
        "RouteTekst": "Den Haag HS, Delft, Rotterdam C.",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "1"
        }
      },
      {
        "RitNummer": "2174",
        "VertrekTijd": "2016-09-22T22:14:00+0200",
        "EindBestemming": "Amsterdam Centraal",
        "TreinSoort": "Intercity",
        "RouteTekst": "Leiden C., Heemstede-A., Haarlem",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "9"
        }
      },
      {
        "RitNummer": "5785",
        "VertrekTijd": "2016-09-22T22:17:00+0200",
        "EindBestemming": "Weesp",
        "TreinSoort": "Sprinter",
        "RouteTekst": "Leiden C., Schiphol Airport, Duivendrecht",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "6"
        }
      },
      {
        "RitNummer": "1985",
        "VertrekTijd": "2016-09-22T22:22:00+0200",
        "EindBestemming": "Eindhoven",
        "TreinSoort": "Intercity",
        "RouteTekst": "Den Haag HS, Delft, Rotterdam C.",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "2"
        }
      },
      {
        "RitNummer": "11783",
        "VertrekTijd": "2016-09-22T22:24:00+0200",
        "EindBestemming": "Amersfoort Schothorst",
        "TreinSoort": "Intercity",
        "RouteTekst": "Gouda, Utrecht C, Amersfoort",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "4"
        }
      },
      {
        "RitNummer": "9887",
        "VertrekTijd": "2016-09-22T22:27:00+0200",
        "EindBestemming": "Utrecht Centraal",
        "TreinSoort": "Sprinter",
        "RouteTekst": "Zoetermeer, Gouda, Woerden",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "7"
        }
      },
      {
        "RitNummer": "15187",
        "VertrekTijd": "2016-09-22T22:43:00+0200",
        "EindBestemming": "Breda",
        "TreinSoort": "Sprinter",
        "RouteTekst": "Den Haag HS, Delft, Rotterdam C.",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "1"
        }
      },
      {
        "RitNummer": "2176",
        "VertrekTijd": "2016-09-22T22:44:00+0200",
        "EindBestemming": "Amsterdam Centraal",
        "TreinSoort": "Intercity",
        "RouteTekst": "Leiden C., Heemstede-A., Haarlem",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "9"
        }
      },
      {
        "RitNummer": "5787",
        "VertrekTijd": "2016-09-22T22:47:00+0200",
        "EindBestemming": "Weesp",
        "TreinSoort": "Sprinter",
        "RouteTekst": "Leiden C., Schiphol Airport, Duivendrecht",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "7"
        }
      },
      {
        "RitNummer": "1987",
        "VertrekTijd": "2016-09-22T22:52:00+0200",
        "EindBestemming": "Venlo",
        "TreinSoort": "Intercity",
        "RouteTekst": "Den Haag HS, Rotterdam C., Eindhoven",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "2"
        }
      },
      {
        "RitNummer": "1787",
        "VertrekTijd": "2016-09-22T22:54:00+0200",
        "EindBestemming": "Enschede",
        "TreinSoort": "Intercity",
        "RouteTekst": "Gouda, Utrecht C, Amersfoort",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "3"
        }
      },
      {
        "RitNummer": "9889",
        "VertrekTijd": "2016-09-22T22:57:00+0200",
        "EindBestemming": "Utrecht Centraal",
        "TreinSoort": "Sprinter",
        "RouteTekst": "Zoetermeer, Gouda, Woerden",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "6"
        }
      },
      {
        "RitNummer": "5189",
        "VertrekTijd": "2016-09-22T23:13:00+0200",
        "EindBestemming": "Roosendaal",
        "TreinSoort": "Sprinter",
        "RouteTekst": "Den Haag HS, Delft, Rotterdam C.",
        "Vervoerder": "NS",
        "VertrekSpoor": {
          "-wijziging": "false",
          "#text": "1"
        }
      }
  ];

  

  // loop through array of getDepartingTrains until you find a name match, then pass along the array. 

  getDepartingTrains = function (station) {
      return this.sampleDepartingTrains;
    };

  trainStation

  constructor(private navCtrl: NavController, private navParams: NavParams) { 
    this.trainStation= this.navParams.get('stationName');

  }

   showDetails(event, station) {
    this.navCtrl.push(TrainDetailsPage, {
      stationDetails: station
    });
  }

}
