import { Lightning, Router } from "@lightningjs/sdk";
import { CWListItems } from "../lib/constants/sharedConstants";
import CWList from "./CWList";
import Header from "./Header";

export default class Downloads extends Lightning.Component {
    static _template() {
        return {
            rect: true, w: 1920, h: 1080,
            color: 0xFFF1F5F9,
            Body: {
                rtt: true, w: 1920, h: 1080,
                type: Lightning.components.FastBodyComponent, amount: 0,
                transitions: {
                    amount: { duration: .3 },
                    scale: { duration: .3 }
                },
                w: 1920,
                h: 1080,
                Header: {
                    type: Header
                },
                Label: {
                    x: 0, y: 100,
                    text: {
                        text: "Downloads",
                        textColor: 0xFF0F172A,
                        fontStyle: 'bold',
                        fontFace: "Regular", textAlign: "center", wordWrapWidth: 300, lineHeight: 48
                    }
                },
                Wrapper: {
                    x: 0, y: 150, w: window.innerWidth, flex: { direction: 'row', padding: 20, wrap: true }, rect: true, color: 0xFFF1F5F9, paddingLeft: 200,

                    List: {
                        flex: { direction: 'column', padding: 20, wrap: true },
                        y: 100, type: CWList
                    }
                }

            }

        }

    }

    _init() {
        this.tag('Body.Wrapper.List').items = CWListItems;
        this.setBlurMode();
    }

    setBlurMode() {
        this.application.on("blurContent", ({ amount, scale }) => {
            this.tag("Body").setSmooth("amount", amount)
            this.tag("Body").setSmooth("scale", scale, { duration: 0.3, timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)' })
        })
    }
    _handleLeft() {
        Router.focusWidget("Menu");
    }
    _handleDown() {
        this._setState('List')
    }
    static _states() {
        return [
            class List extends this {
                _getFocused() {
                    return this.tag('List')
                }
            }
        ]
    }
}