import { Lightning, Utils } from "@lightningjs/sdk";

export default class Header extends Lightning.Component {
    static _template() {
        return {
            x: 0, y: 0, w: window.innerWidth, h: 100, rect: true, color: 0xFFFFFFFF,
            flex: { direction: "column" },
            Logo: {
                flexItem: { marginTop: 0, marginBottom: 0 },
                x: 0, y: 0,
                h: 100, w: 100,
                src: Utils.asset("icons/menu.png")
            },
            Search: {
                flexItem: { marginTop: 0, marginBottom: 0 },
                x: 1845,y:-75,
                h: 50, w: 50,
                src: Utils.asset("icons/search.png")
            }           
        }

    }
}