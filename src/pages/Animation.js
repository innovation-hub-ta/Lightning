import { Router } from "@lightningjs/sdk";
import { Characters, Player } from ".";
import { logoTextPart } from "../lib/constants/logoConstants";

export class Animation extends lng.Component {

    static _template() {
        return {
            LogoText: {
              h: 0,
              zIndex: 2,
              type: Characters
            },
            Player: {
              zIndex: 1,
              type: Player
            }
      
          }
    }

    _init() {
        this.setLogoTexts();
        this.changeSmoothing();
      }
      setLogoTexts() {
        this.tag('LogoText').items = logoTextPart;
      }
    
      changeSmoothing() {
        this.tag("LogoText").patch({ x: 100 }); // Reset to start position;   
        this.tag('LogoText').patch({ smooth: { x: [500, { duration: 1, delay: 6, timingFunction: 'linear' }] } });
        
      }
      _handleLeft() {
        Router.focusWidget("Menu");
    }
}