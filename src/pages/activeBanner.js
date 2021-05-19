import { Lightning, Utils } from "@lightningjs/sdk";

export default class ActiveBanners extends Lightning.Component {
    set items(items) {
        this.children = items.map((item, index) => {
            return {
                Item:{
                    type: BannerActiveItem,
                    item //passing the item as an attribute
                } ,
                flexItem: { margin: 20 }               
            }
        })
    }
    
}


class BannerActiveItem extends lng.Component {
    static _template() {
        return {
            w: 25, h: 25,
            rect: true,
            flexItem: { margin: 10 },
            src: Utils.asset('icons/cr.png')
        }
    }
    _init() {
        this.patch({color:this.item.colour})
    }
}
