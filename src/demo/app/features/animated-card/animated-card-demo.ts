import {Component} from '@angular/core';
import {NwbAlertConfig, NwbAlertService} from '../../../../lib/ng-wizi-bulma/alert/alert.service';

@Component({
  providers: [],
  templateUrl: './animated-card-demo.html',
})
export class AnimatedCardDemo {

  sample1 = `
    <div nwbAnimatedCardClosed class="card">
          <header class="card-header">
            <p class="card-header-title">
              Click me !
            </p>
            <a class="card-header-icon">
              <span class="icon">
                <i class="material-icons">keyboard_arrow_down</i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <p>My Awesome hidden content</p>
            </div>
          </div>
    </div>
`;

  sample2 = `
    <div nwbAnimatedCardOpened class="card">
          <header class="card-header">
            <p class="card-header-title">
              Click me !
            </p>
            <a class="card-header-icon">
              <span class="icon">
                <i class="material-icons">keyboard_arrow_down</i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <p>My Awesome content</p>
            </div>
          </div>
    </div>
`;

}

