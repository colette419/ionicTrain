import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import * as xml2js from 'xml2js';
import { TrainTimesPage } from '../train-times/train-times';




@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {

departingTrains: any = {};
stations: any = [
      {
        "name": "'s-Gravenhage",
        "code": "GVC",
        "country": "NL",
        "lat": "52.0802764892578",
        "long": "4.32499980926514",
        "alias": "true"
      },
      {
        "name": "'s-Hertogenbosch",
        "code": "HT",
        "country": "NL",
        "lat": "51.69048",
        "long": "5.29362",
        "alias": "false"
      },
      {
        "name": "'s-Hertogenbosch Oost",
        "code": "HTO",
        "country": "NL",
        "lat": "51.700553894043",
        "long": "5.3183331489563",
        "alias": "false"
      },
      {
        "name": "'t Harde",
        "code": "HDE",
        "country": "NL",
        "lat": "52.4091682",
        "long": "5.893611",
        "alias": "false"
      },
      {
        "name": "Aachen Hbf",
        "code": "AHBF",
        "country": "D",
        "lat": "50.7678",
        "long": "6.091499",
        "alias": "false"
      },
      {
        "name": "Aalten",
        "code": "ATN",
        "country": "NL",
        "lat": "51.9213265245505",
        "long": "6.57862722873687",
        "alias": "false"
      },
      {
        "name": "Abcoude",
        "code": "AC",
        "country": "NL",
        "lat": "52.2785",
        "long": "4.977",
        "alias": "false"
      },
      {
        "name": "Ahaus",
        "code": "EAHS",
        "country": "D",
        "lat": "52.079796120944",
        "long": "7.01635837554931",
        "alias": "false"
      },
      {
        "name": "Aime-la-Plagne",
        "code": "AIME",
        "country": "F",
        "lat": "45.55438",
        "long": "6.64869",
        "alias": "false"
      },
      {
        "name": "Aix-en-Provence",
        "code": "AIXTGV",
        "country": "F",
        "lat": "43.5228190773429",
        "long": "5.44531345367431",
        "alias": "false"
      },
      {
        "name": "Akkrum",
        "code": "AKM",
        "country": "NL",
        "lat": "53.0463905334473",
        "long": "5.84361124038696",
        "alias": "false"
      },
      {
        "name": "Albertville",
        "code": "ALBERT",
        "country": "F",
        "lat": "45.67302",
        "long": "6.38306",
        "alias": "false"
      }
];
securityToken: string = '';

  constructor(public navCtrl: NavController, private http: Http) {
    //   this.http.get("http://api.randomuser.me/?results=50").subscribe(data => {
    //   this.items = JSON.parse(data['_body']).results;
    //   console.log("Got results");
    // }, error => {
    //   console.log(error);
    // });



    // this.http.get("http://webservices.ns.nl/ns-api-stations").subscribe(data => {
    //   var xml = data['_body'];
    //   var departingTrains = this.departingTrains;
    //   xml2js.parseString(xml, function (err, result) {
    //     console.log(result);
    //     departingTrains = {};
    //   });
    // });


    //this is the code i was using below vv
  //  this.http.get("https://feeds.capitalbikeshare.com/stations/stations.xml").subscribe(data => {
  //     var newData = xml2js.parseString(data['_body'], function (err, result) {
  //       console.log(JSON.stringify(result));
  //       return JSON.stringify(result);
  //     });
  //   });



    // this.http.get("https://feeds.capitalbikeshare.com/stations/stations.xml").subscribe(data => {
    //   var xml = data['_body'];
    //   this.items = JSON.parse(data['_body']).results;
    //   console.log("Got results");
    // }, error => {
    //   console.log(error);
    // });

  }


  itemClicked (event, station) {
    this.navCtrl.push(TrainTimesPage, {
      stationName: station.name
    });
  }

}
