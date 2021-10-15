  // This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig  : {

    databaseURL: "https://abc1-be604.firebaseio.com",
    apiKey: "AIzaSyCheDTvmtlA8DvMEs56Q-bivvY2H34RiOQ",
    authDomain: "abc1-be604.firebaseapp.com",
    projectId: "abc1-be604",
    storageBucket: "abc1-be604.appspot.com",
    messagingSenderId: "927740088866",
    appId: "1:927740088866:web:0b4b57f18d84b5d1a2307b",
    measurementId: "G-HE1NPQ6S55"
  }
};

  //Configuracion credenciales Firebase
/*   export const firebaseConfig  = {
 Si se requiere otra base para poder guardar archivos y almacenar.
    apiKey: "AIzaSyDbUwhq6r26AMkhO167ufdA93HReHQPvyg",
    authDomain: "topicosesp2020b.firebaseapp.com",
    databaseURL: "https://topicosesp2020b-default-rtdb.firebaseio.com",
    projectId: "topicosesp2020b",
    storageBucket: "topicosesp2020b.appspot.com",
    messagingSenderId: "368554535360",
    appId: "1:368554535360:web:91780c52796e8bb6cd4025",
    measurementId: "G-JN6SCQJSH9"
  }; */

  /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
