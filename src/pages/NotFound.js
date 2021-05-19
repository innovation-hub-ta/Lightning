import { Lightning, Router } from "@lightningjs/sdk";

export default class NotFound extends Lightning.Component {
    static _template() {
        return {
            rect: true, w: 1920, h: 1080,
            color: 0xFF402662,
            Header: {
                mount: 0.5, x: 960, y: 540,
                text: {
                    text: 'Page not found', fontFace: "Bold", fontSize: 128
                }
            }
        }
       
    }    
}