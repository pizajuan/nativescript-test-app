import { Injectable } from "@angular/core";
import * as firebase from 'nativescript-plugin-firebase';
import * as dialogs from "tns-core-modules/ui/dialogs";

@Injectable({
    providedIn: "root"
})
export class FirebaseService {

    firebaseFirestore: any;
    constructor() { }

    initFirebase() {
        console.log('iniciando firebase...');

        firebase.init({
            showNotifications: true,
            showNotificationsWhenInForeground: true,
            persist: false,

            onPushTokenReceivedCallback: (token) => {
                console.log('[Firebase] onPushTokenReceivedCallback:', { token });
            },

            onMessageReceivedCallback: (message: firebase.Message) => {
                console.log('[Firebase] onMessageReceivedCallback:', { message });
                // alert(message.title + ': '+ message.body);
                dialogs.alert({
                    title: message.title,
                    message: message.body,
                    okButtonText: "OK"
                }).then(() => {
                    console.log("Dialog closed!");
                });
            }
            })
            .then(() => {
            console.log('[Firebase] Initialized');
            })
            .catch(error => {
            console.log('[Firebase] Initialize', { error });
        });

        // this.firebaseFirestore = require("nativescript-plugin-firebase/app");

        // this.firebaseFirestore.initializeApp({
        //     persist: false
        // });
    }

    getPlayers() {
        console.log('getting players firestore service');
        // firebase.getValue('/players')
        //     .then(result => console.log('players get: ', JSON.stringify(result)))
        //     .catch(error => console.log("Error: " + error));
        const playersCollection = firebase.firestore.collection("players");
        // console.log(playersCollection);
        // const unsubscribe = playersCollection.onSnapshot((snapshot) => {
        //     snapshot.forEach(player => console.log(player.data()));
        // });
          
        //   // then after a while, to detach the listener:
        // unsubscribe();

        playersCollection.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
        });
    }

    onChildEvent(result) {
        console.log("Idea: " + JSON.stringify(result.value));
    };

    listenPlayers() {
        const playersCollection = firebase.firestore.collection("players");
        playersCollection.onSnapshot((snapshot: any) => {
            snapshot.forEach(player => console.log(player.data()));
        });
    }

    pushPlayer() {
          firebase.push(
            '/players',
            {
                'first': 'Eddy',
                'last': 'Verbruggen',
                'birthYear': 1977,
                'isMale': true,
                'address': {
                'street': 'foostreet',
                'number': 123
                }
            }
        ).then(
            function (result) {
                console.log("created key: " + result.key);
            }
        );
    }
}
