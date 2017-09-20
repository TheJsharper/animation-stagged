import {Component, HostBinding, OnInit} from '@angular/core';
import {RouteAnimation} from "../shared/route.animation";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations:[RouteAnimation.routeFadeStateTrigger({startOpacity:0,duration:'2000ms'} )]
})
export class UsersComponent implements OnInit {
 // @HostBinding('@routeFadeState') routeAnimation=true;
  constructor() { }

  ngOnInit() {
  }

}
