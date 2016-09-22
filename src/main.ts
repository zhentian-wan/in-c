import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { audioCtx } from './audio-context';
import { soundFonts } from './soundfonts';

if (process.env.ENV === 'production') {
  enableProdMode();
}

function main(initialState?: any) {
  return platformBrowserDynamic([
    {provide: 'audioCtx', useValue: audioCtx},
    {provide: 'soundFonts', useValue: soundFonts}
  ]).bootstrapModule(AppModule);
}

document.addEventListener('DOMContentLoaded', () => main);
