import { enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const ELEMENT_TAG = 'standalone-element';
createApplication().then((appRef) => {
  const elementCtor = createCustomElement(AppComponent, {
    injector: appRef.injector,
  });
  if (!customElements.get(ELEMENT_TAG)) {
    customElements.define(ELEMENT_TAG, elementCtor);
    console.log(`${ELEMENT_TAG} created`);
  }
});
