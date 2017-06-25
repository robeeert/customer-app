import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { masterData, navigationData } from './initialData';

console.log(masterData, navigationData);

if (localStorage.getItem('masterData') === null) {
  localStorage.setItem('masterData', JSON.stringify(masterData));
}

if (localStorage.getItem('navigationData') === null) {
  localStorage.setItem('navigationData', JSON.stringify(navigationData));
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
