import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { EventData } from "tns-core-modules/ui/page/page";

import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html",
    styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    public saveToGallery: boolean = false;
    public allowsEditing: boolean = false;
    public keepAspectRatio: boolean = true;
    public width: number = 320;
    public height: number = 240;
    public cameraImage: ImageAsset;
    public actualWidth: number;
    public actualHeight: number;
    public scale: number = 1;
    public labelText: string;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }

    onNavBtnTap(){
        // This code will be called only in Android.
        console.log("Navigation button tapped!");
    }

    onTap(args: EventData) {

        requestPermissions().then(
            () => {
                takePicture({ width: this.width, height: this.height, keepAspectRatio: this.keepAspectRatio, saveToGallery: this.saveToGallery, allowsEditing: this.allowsEditing })
                    .then((imageAsset: any) => {
                        this.cameraImage = imageAsset;
                        let that = this;
                        imageAsset.getImageAsync(function (nativeImage, ex) {
                            if (ex instanceof Error) {
                                throw ex;
                            } else if (typeof ex === "string") {
                                throw new Error(ex);
                            }

                            if (imageAsset.android) {
                                // get the current density of the screen (dpi) and divide it by the default one to get the scale
                                that.scale = nativeImage.getDensity() / imageAsset.android.util.DisplayMetrics.DENSITY_DEFAULT;
                                that.actualWidth = nativeImage.getWidth();
                                that.actualHeight = nativeImage.getHeight();
                            } else {
                                that.scale = nativeImage.scale;
                                that.actualWidth = nativeImage.size.width * that.scale;
                                that.actualHeight = nativeImage.size.height * that.scale;
                            }
                            that.labelText = `Displayed Size: ${that.actualWidth}x${that.actualHeight} with scale ${that.scale}\n` +
                                `Image Size: ${Math.round(that.actualWidth / that.scale)}x${Math.round(that.actualHeight / that.scale)}`;

                            console.log(`${that.labelText}`);
                        });
                    }, (error) => {
                        console.log("Error: " + error);
                    });
            },
            () => alert('permissions rejected')
        );
       
    }
}
