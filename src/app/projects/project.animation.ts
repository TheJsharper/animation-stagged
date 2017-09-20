import {
  animate, AnimationTriggerMetadata, group, keyframes, query, stagger, style, transition,
  trigger
} from "@angular/animations";

export class Animation {
  static get listStateTrigger(): AnimationTriggerMetadata {
    return trigger('listState', [
      transition('*=>*', [
        query(':enter', [
          stagger('400ms',[
            animate('2s ease-out', keyframes([
              style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
              style({opacity: 1, transform: 'translateX(15%)', offset: 0.5}),
              style({opacity: 1, transform: 'translateX(0)', offset: 1})
            ])),
            group([
              animate(1000, style({backgroundColor: 'pink', transform: 'scale(0.9)'})),
              animate(2000, style({transform: 'translateY(-14%)'}))
            ])
          ])


        ], {optional:true})
      ])
    ])
  }
}
