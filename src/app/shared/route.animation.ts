import {
  animate, animation, AnimationReferenceMetadata, AnimationTriggerMetadata, style, transition,
  trigger, useAnimation
} from "@angular/animations";

export class RouteAnimation {

  static get fadeAnimation(): AnimationReferenceMetadata{
    return animation([
      style({opacity: '{{startOpacity}}'}), animate('{{duration}}')
    ], {params:{startOpacity:0,duration:'100ms' }})
  }
  static get routeFadeStateTrigger(): (params:{startOpacity:number, duration:string})=> AnimationTriggerMetadata {
    return (params)=> trigger('routeFadeState', [
      transition(':enter', [
          useAnimation(RouteAnimation.fadeAnimation, {params:params})
      ]),
      transition(':leave', animate(300, style({opacity: 0}))
      )
    ])
  }
}
