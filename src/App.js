import { Router, Utils } from '@lightningjs/sdk';
import routes from './lib/routes.config';
import CWList from './pages/CWList';
import { Menu } from "./widgets";

export default class App extends Router.App{
    // define which fonts are used in the App
    static getFonts() {
        return [
            {family: 'Bold', url: Utils.asset('fonts/LondrinaSolid-Regular.ttf'), descriptors: {}},
            {family: 'Regular', url: Utils.asset('fonts/Fresca-Regular.ttf'), descriptors: {}},
            {family: 'Dancing Script', url: Utils.asset('fonts/DancingScript-VariableFont_wght.ttf'), descriptors: {}}
        ];
    }
    
    _setup() {
        Router.startRouter(routes, this);
    }

    static _template(){
        return {
            ...super._template(),
            Widgets:{                
                Menu:{
                    type: Menu
                },
                CWList:{
                    type:CWList,
                }
            }
        }
    }  
}
