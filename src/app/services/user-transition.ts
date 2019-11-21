
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Injectable } from '@angular/core';

@Injectable()
export class UserTransition {

constructor(private nativePageTransitions: NativePageTransitions) {}

setTransition(){
    const options: NativeTransitionOptions = {
        direction: 'up',
        duration: 500,
        slowdownfactor: 3,
        slidePixels: 20,
        iosdelay: 100,
        androiddelay: 150,
        fixedPixelsTop: 0,
        fixedPixelsBottom: 60
    };
    this.nativePageTransitions.fade(options);
}
}


