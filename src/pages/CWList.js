import { Lightning, Registry, Router, Utils } from "@lightningjs/sdk";

export default class CWList extends Lightning.Component {   


    set items(items) {
        this.children = items.map((item, index) => {
            return {
                w: 500, h: 300,
                flexItem: { margin: 10 },
                Item:{
                    type: CWListItem,
                    item //passing the item as an attribute
                }                
            }
        })      
    }

    _init() {
        this._index = 0;
    }

  _getFocused() {     
        return this.children[this._index].tag('Item');
    }
    _handleLeft() {
        this._index--;
        if(this._index==-1){            
            Router.focusWidget("Menu");
            this._index = 0;
        }
    }
    _handleRight() {       
        if(this._index < this.children.length - 1) {
            this._index++
        }
    }
    _active(){
        this.test = this.children;        
    }

    _focus() {
        
    }

    
}

export class CWListItem extends lng.Component {
    static _template() {
        return {
            w: 500, h: 300,
            flexItem: { margin: 10 },
            rect: true
        }
    }

    _init() {
        this.patch({ src: this.item.src });
        // this.onAnimation();
    }

    _focus() {
        this.patch({ smooth: { alpha: 1, scale: 1.2 } })
    }
    _unfocus() {
        this.patch({ smooth: { alpha: 0.8, scale: 1 } })
    }
}

