import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { FirebaseService } from "../firebase.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(
        private itemService: ItemService,
        private firebaseService: FirebaseService
        ) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        this.listenPlayers();
    }

    getPlayers() {
        console.log('traer jugadores1');
        this.firebaseService.getPlayers();
        // this.firebaseService.pushPlayer();
    }

    listenPlayers() {
        this.firebaseService.listenPlayers();
    }
}
