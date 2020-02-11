// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAMkIJxLURgGABsijrSEfByJ6TbZ5bWuJE",
    authDomain: "milo-fa1b1.firebaseapp.com",
    databaseURL: "https://milo-fa1b1.firebaseio.com",
    projectId: "milo-fa1b1",
    storageBucket: "milo-fa1b1.appspot.com",
    messagingSenderId: "524479414175",
    appId: "1:524479414175:web:ebcadcf77c50ddadd447aa",
    measurementId: "G-Y50MH6BV2T"
  },
  apiURL: "https://us-central1-milo-fa1b1.cloudfunctions.net/webApi/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
