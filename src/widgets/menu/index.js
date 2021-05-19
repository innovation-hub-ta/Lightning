import { Lightning, Router } from "@lightningjs/sdk";
import ProfileInfo from "../../pages/ProfileInfo";
import MenuItem from "./MenuItem";

export default class Menu extends Lightning.Component {
    static _template() {
        return {
            rect: true, w: 550, h: 1920, color: 0xFF0F172A, x: -550,
            transitions: {
                x: { duration: .3, timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)' },
                w: { duration: .3, timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)' }
            },
            ProfileInfo:{
                w: 100, h: 100,x:250,y:50,                
               type:ProfileInfo 
            },            
            Items: {
                y: 400, mountY: 0.5,
                flex: { direction: "column" },
                Home: {
                    x: 200,
                    type: MenuItem, label: "Home", pageId: "home",iconPath:'home.png'
                },
                Download: {
                    x: 200,
                    type: MenuItem, label: "Downloads", pageId: "downloads",iconPath:'downloads.png'
                },
                Animation: {
                    x: 200,
                    type: MenuItem, label: "Animation", pageId: "animation",iconPath:'animation.png'
                },
                Settings: {
                    x: 200,
                    type: MenuItem, label: "Settings", pageId: "settings",iconPath:'settings.png'
                }
                // ,
                // Test: {
                //     x: 200,
                //     type: MenuItem, label: "Test", pageId: "test",iconPath:'settings.png'
                // }
            }
        }
    }

    _init() {
        this._index = 0;
    }

    _focus() {
        this.patch({
            smooth: {
                x: -100
            }
        })

        this.application.emit("blurContent", { amount: 3, scale: 1.2 });
    }

    _unfocus() {
        this.patch({
            smooth: {
                x: -550
            }
        })

        this.application.emit("blurContent", { amount: 0, scale: 1 });
    }

    _handleUp() {
        if (this._index > 0) {
            this._index--;
        }
    }

    _handleDown() {
        if (this._index < this.tag("Items").children.length - 1) {
            this._index++;
        }
    }

    _handleRight() {
        Router.focusPage();
    }

    _handleEnter() {
        Router.restoreFocus();
        Router.navigate(this.activeItem.pageId);
    }

    get activeItem() {
        return this.tag("Items").children[this._index];
    }

    _getFocused() {
        return this.activeItem;
    }
}