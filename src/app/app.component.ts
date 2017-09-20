import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {animate, animateChild, animation, group, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('routeState',[
      transition('*=>*',[
        group([

          query(':enter',[
           // animateChild(),
            style({
              transform:'translateY(-400px)',
              opacity:0
            }),
            animate('300ms ease-in')
          ], {optional:true}),

          query(':leave',[

            animate('300ms ease-out',  style({
              transform:'translateY(600px)',
              opacity:0
            }))
          ], {optional:true})
        ])

      ])
    ])
  ]
})
export class AppComponent {

  getAnimationData(rOutlet: RouterOutlet): string {
    const routeData = rOutlet.activatedRouteData['animation'];

    if (routeData && routeData.page == 'rootPage') {
      console.log(routeData);
      return 'rootPage';
    } else {
      return 'usersPage';
    }
  }
}
