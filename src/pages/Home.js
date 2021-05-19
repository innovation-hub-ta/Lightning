import { Lightning, Registry, Router, Utils } from "@lightningjs/sdk";
import { banners, NewMovies } from "../lib/constants/sharedConstants";
import ActiveBanners from "./activeBanner";
import CWList from "./CWList";
import Header from "./Header";

export default class Home extends Lightning.Component {
    bannerIndex = 0;
    banners = banners;
    static _template() {
        return {
            rect: true, w: 1920, h: 1080,
            color: 0xFFF1F5F9,
            Blur: {
                rtt: true, w: 1920, h: 1080,
                type: Lightning.components.FastBlurComponent, amount: 0,
                transitions: {
                    amount: { duration: .3 },
                    scale: { duration: .3 }
                },
                content: {
                    w: 1920, h: 1080,
                    Header: {
                        type: Header
                    },
                    Wrapper: {
                        x: 0, y: 150, w: window.innerWidth, flex: { direction: 'row', padding: 20, wrap: true }, rect: true, paddingLeft: 200,
                        BannerBlock: {
                            x: 0, y: 0, w: window.innerWidth, h: 500,
                            flex: { direction: 'row', padding: 20, wrap: true },
                            rect: true, paddingLeft: 200,
                            src: Utils.asset('banners/b1.jpeg')
                        },
                        NewMovies: {
                            Label: {
                                // x: 0, y: 100,
                                text: {
                                    text: "Downloads",
                                    textColor: 0xFF0F172A,
                                    fontStyle: 'bold',
                                    fontFace: "Regular", textAlign: "center", wordWrapWidth: 300, lineHeight: 48
                                }
                            },
                            x: 0, y: 600, w: window.innerWidth, h: 500,
                            flex: { direction: 'column', padding: 20, wrap: true },
                            y: 100, type: CWList
                        }


                    },
                    Arrowleft: {
                        x: 30, y: 400, w: 100, h: 100,
                        // flex: { direction: 'row', padding: 20, wrap: true },
                        rect: true, paddingLeft: 200,
                        src: Utils.asset('icons/left.png')
                    },
                    ArrowRight: {
                        x: 1800, y: 400, w: 100, h: 100,
                        // flex: { direction: 'row', padding: 20, wrap: true },
                        rect: true, paddingLeft: 200,
                        src: Utils.asset('icons/right.png')
                    },
                    Cr: {
                        flex: { direction: 'column', padding: 20, wrap: true },
                        y: 600, w: 25, h: 25,x:window.innerWidth/2,
                        type:ActiveBanners   
                    },

                }

            }
        }
    }

    _init() {
        this._setState('NewMovies');
        this.application.on("blurContent", ({ amount, scale }) => {
            this.tag("Blur").setSmooth("amount", amount)
            this.tag("Blur").setSmooth("scale", scale, { duration: 0.3, timingFunction: 'cubic-bezier(0.17, 0.9, 0.32, 1.3)' })
        })
        this.tag("Blur").content.tag("NewMovies").items = NewMovies;
        this.setBanners();

        this.tag("Blur").content.tag("Cr").items = this.banners.map((i) => (i))
    }
    
    _handleDown() {
        Router.focusWidget("CWList");
    }
    
    static _states() {
        return [
            class NewMovies extends this {
                _getFocused() {
                    return this.tag('NewMovies')
                }
            }
        ]
    }

    setBanners() {
        Registry.setInterval(() => {
            this.setBannerSRC();
            this.bannerIndex++;
            if (this.bannerIndex == this.banners.length) {
                this.bannerIndex = 0;
            }
        }, 3000)
    }

    _handleLeft() {
        this.bannerIndex--;
        if(this.bannerIndex==-1){            
            Router.focusWidget("Menu");
            this.bannerIndex = 0;
        }
        this.setBannerSRC();  
        // Router.focusWidget("Menu");
    }

    _handleRight() {
        this.bannerIndex++;
        if (this.bannerIndex == this.banners.length) {
            this.bannerIndex = 0;
        } 
        this.setBannerSRC();       
    }

    setBannerSRC(){
        for(let i=0;i<this.banners.length;i++){
            this.banners[i]['colour'] = 0xFF0F172A;
            if(i== this.bannerIndex){
                this.banners[this.bannerIndex]['colour'] = 0xFFFFFFFF;
            }
        }
        
        this.tag("Blur").content.tag("Cr").items = [];
        this.tag("Blur").content.tag("Cr").items = this.banners;
        this.tag("Blur").content.tag("BannerBlock").patch({ src: this.banners[this.bannerIndex].src });
    }

    pageTransition() {
        return "left";
    }
}