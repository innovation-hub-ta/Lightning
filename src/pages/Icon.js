import { Lightning,Utils } from "@lightningjs/sdk";


export default class Icon extends Lightning.Component {

    static _template() {
        return {
            x: -40, y: 25, w: 40, h: 40, rect: true, 
            // src:Utils.asset('icons/home.png')
        }
    }

    set iconPath(p) {
        this.src = p;
    }
}