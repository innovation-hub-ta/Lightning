import { Lightning, Utils } from "@lightningjs/sdk";

export default class ProfileInfo extends Lightning.Component {
    static _template() {
        return {
            texture: lng.Tools.getRoundRect(150, 40, 4, 10, 15),
            src:Utils.asset('pic.jpg')  
        }
    }
}