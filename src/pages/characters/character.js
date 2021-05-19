import {Lightning, Router,Registry} from "@lightningjs/sdk";



export default class Character extends Lightning.Component{
   
    static _template() {
        return {
            Text:{
                y: 500,
                text: {
                  fontSize: 100,
                  textAlign: 'center'
                }
            }
            
        }
    }
    _init() {
        this.patch({ Text:{text: { text: this.item.label,textColor:this.item.textColor }}});          
    }
   
}