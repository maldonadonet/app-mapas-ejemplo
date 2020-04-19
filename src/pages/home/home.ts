import { Component } from '@angular/core';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';



@Component({
      selector: 'page-home',
      templateUrl: 'home.html'
})
export class HomePage {

      constructor(private nativeGeocoder: NativeGeocoder) {}

      nativegeocoder.reverseGeocode(success, failure, 52.5072095, 13.1452818, { useLocale: true, maxResults: 1 });

      function success(result) {
        var firstResult = result[0];
        console.log("First Result: " + JSON.stringify(firstResult));
      }

      function failure(err) {
        console.log(err);
      }

}
