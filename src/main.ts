import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {RootModule} from './components/root/root.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(RootModule);