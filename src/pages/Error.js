import {Lightning, Router} from "@lightningjs/sdk";

export default class Error extends Lightning.Component{
    static _template(){
        return {
            rect: true, w: 1920, h: 1080,
            color: 0xFFF1F5F9,
            Body: {
                rtt: true, w: 1920, h: 1080,
                type: Lightning.components.FastBodyComponent, amount: 0,
                w: 1920, h: 1080,
                Header: {
                    type: Header
                },
                Label: {
                    x: 0, y: 100,
                    text: {
                        text: "Settings",
                        textColor: 0xFF0F172A,
                        fontStyle: 'bold',
                        fontFace: "Regular", textAlign: "center", wordWrapWidth: 300, lineHeight: 48
                    }
                },
                Wrapper: {
                    x: 0, y: 150, w: window.innerWidth, flex: { direction: 'row', padding: 20, wrap: true }, rect: true, color: 0xFFF1F5F9, paddingLeft: 200,
                    src:Utils.asset('un.jpg'),
                }

            },

        }
    }
   
    _handleLeft() {
        Router.focusWidget("Menu");
    }
   
}