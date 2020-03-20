import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", age: 23 },
        { id: 3, name: "Piqué", role: "Defender", age: 23 },
        { id: 4, name: "I. Rakitic", role: "Midfielder", age: 23 },
        { id: 5, name: "Sergio", role: "Midfielder", age: 23 },
        { id: 6, name: "Denis Suárez", role: "Midfielder", age: 23 },
        { id: 7, name: "Arda", role: "Midfielder", age: 23 },
        { id: 8, name: "A. Iniesta", role: "Midfielder", age: 23 },
        { id: 9, name: "Suárez", role: "Forward", age: 23 },
        { id: 10, name: "Messi", role: "Forward", age: 23 },
        { id: 11, name: "Neymar", role: "Forward", age: 23 },
        { id: 12, name: "Rafinha", role: "Midfielder", age: 23 },
        { id: 13, name: "Cillessen", role: "Goalkeeper", age: 23 },
        { id: 14, name: "Mascherano", role: "Defender", age: 23 },
        { id: 17, name: "Paco Alcácer", role: "Forward", age: 23 },
        { id: 18, name: "Jordi Alba", role: "Defender", age: 23 },
        { id: 19, name: "Digne", role: "Defender", age: 23 },
        { id: 20, name: "Sergi Roberto", role: "Midfielder", age: 23 },
        { id: 21, name: "André Gomes", role: "Midfielder", age: 23 },
        { id: 22, name: "Aleix Vidal", role: "Midfielder", age: 23 },
        { id: 23, name: "Umtiti", role: "Defender", age: 23 },
        { id: 24, name: "Mathieu", role: "Defender", age: 23 },
        { id: 25, name: "Masip", role: "Goalkeeper", age: 23 }
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
