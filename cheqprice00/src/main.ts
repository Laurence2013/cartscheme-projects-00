import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { getAuth, provideAuth, connectAuthEmulator } from '@angular/fire/auth';

import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if(environment.production){
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),

    //Firebase App initialiser
    provideFirebaseApp(() => {
      return initializeApp(environment.firebase)
    }),
    //Firestore setup
    provideFirestore(() => {
      const firestore = getFirestore();
      if(environment.useEmulators){
        connectFirestoreEmulator(firestore, 'localhost', 8080);
        console.log('Firestore connected to emulator at localhost:8080');
      };
      return firestore;
    }),
    //Auth setup
    provideAuth(() => {
      const auth = getAuth();
      if(environment.useEmulators){
        connectAuthEmulator(auth, 'http://localhost:9090');
        console.log('Auth connected to emulator at http://localhost:9099');
      }
      return auth;
    })
  ],
}).catch(err => console.log(err));
