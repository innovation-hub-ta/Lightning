import { Lightning, Utils } from "@lightningjs/sdk";
import Icon from "../../pages/Icon";


export default class MenuItem extends Lightning.Component {

    static _template() {
        return {
            h: 100, alpha: 0.5,
            Icon:{
                type:Icon
            },
            Label: {
                x:10,
                mountY: .5, y: 50,
                text: { fontFace: "Regular", fontSize: 35 }
            }
        };
    }

    set label(v) {
        this.tag("Label").text = v;
    }

    set pageId(v) {
        this._pageId = v;
    }

    set iconPath(p) {
        this.tag("Icon").iconPath = Utils.asset('icons/'+p);
    }

    get pageId() {
        return this._pageId;
    }

    _focus() {
        this.alpha = 1;
        this.patch({
            scale: 1.5
        })
        const myAnimation = this.animation({
            duration: 1,
            repeat: 0,
            actions: [ { p: 'x', v: { 0: 250, 0.5: 280, 1: 250 } }]
        });
        myAnimation.start();
    }

    _unfocus() {
        this.alpha = 0.5;
        this.patch({
            scale: 1
        })
    }

}