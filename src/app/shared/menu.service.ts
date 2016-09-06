import { Injectable }    from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { MenuItem } from './menu-item';
import { MENU_ITEMS } from './mock-menu-items';

@Injectable()
export class MenuService {

  constructor() { }

  getMenuItems(): Promise<MenuItem[]> {
    return Promise.resolve(MENU_ITEMS);
  }
}
