import { Component, OnInit } from "@angular/core";
// import * as firebase from 'nativescript-plugin-firebase';
// import * as dialogs from "tns-core-modules/ui/dialogs";
import { FirebaseService } from "./firebase.service";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit{ 
    constructor(
        private firebaseService: FirebaseService
    ) {}
    ngOnInit() {
        // console.log('iniciando firebase...');

        // firebase.init({
        //     showNotifications: true,
        //     showNotificationsWhenInForeground: true,
        //     persist: true,

        //     onPushTokenReceivedCallback: (token) => {
        //         console.log('[Firebase] onPushTokenReceivedCallback:', { token });
        //     },

        //     onMessageReceivedCallback: (message: firebase.Message) => {
        //         console.log('[Firebase] onMessageReceivedCallback:', { message });
        //         // alert(message.title + ': '+ message.body);
        //         dialogs.alert({
        //             title: message.title,
        //             message: message.body,
        //             okButtonText: "OK"
        //         }).then(() => {
        //             console.log("Dialog closed!");
        //         });
        //     }
        //     })
        //     .then(() => {
        //     console.log('[Firebase] Initialized');
        //     })
        //     .catch(error => {
        //     console.log('[Firebase] Initialize', { error });
        // });

        this.firebaseService.initFirebase();
    }
}
