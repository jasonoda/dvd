import { gsap } from "./greensock/all.js";

export class UI {

    setUp(e) {

        this.e = e;

        //-----------------

        this.uiCanvas = document.getElementById('mycanvas');

        this.animatedSprites=[];

        this.app = new PIXI.Application({
            view: this.uiCanvas,
            width: window.innerWidth, 
            height: window.innerHeight,
            transparent: true,
			resolution: window.devicePixelRatio,
			appDensity: true
        });

        window.addEventListener('resize', (event) => {
            this.app.renderer.resize(window.innerWidth, window.innerHeight);
        });

        // PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
        PIXI.settings.RESOLUTION = window.devicePixelRatio;

        this.app.renderer.plugins.interaction.mouseOverRenderer = true;

        this.counter=0;

    }

    load() {

        console.log("LOAD IMAGES")

        this.loader = new PIXI.Loader();
        this.loader.reset();
        
        //----------------------------------------------------

        this.loader.add('white', './src/img/white.png');
        this.loader.add('black', './src/img/black.png');

        this.loader.add('logo_white', './src/img/logo/logo_white.png');
        this.loader.add('logo_red', './src/img/logo/logo_red.png');
        this.loader.add('logo_yellow', './src/img/logo/logo_yellow.png');
        this.loader.add('logo_green', './src/img/logo/logo_green.png');
        this.loader.add('logo_cyan', './src/img/logo/logo_cyan.png');
        this.loader.add('logo_blue', './src/img/logo/logo_blue.png');
        this.loader.add('logo_purple', './src/img/logo/logo_purple.png');

        this.loader.add('monitor', './src/img/monitor.png');
        this.loader.add('glass', './src/img/glass.png');
        this.loader.add('vig', './src/img/vig.png');

        this.loader.add('bet1', './src/img/bet1.png');
        this.loader.add('bet2', './src/img/bet2.png');
        this.loader.add('bet3', './src/img/bet3.png');
        this.loader.add('bet4', './src/img/bet4.png');
        this.loader.add('reset', './src/img/reset.png');
        this.loader.add('lose', './src/img/lose.png');

        this.loader.add('gradBot', './src/img/gradBot.png');
        this.loader.add('gradTop', './src/img/gradTop.png');
        this.loader.add('smoke', './src/img/smoke.png');

        this.loader.add('glitch_checker1', './src/img/glitch_checker1.png');
        this.loader.add('glitch_checker2', './src/img/glitch_checker2.png');
        this.loader.add('glitch_checker3', './src/img/glitch_checker3.png');
        this.loader.add('glitch_green', './src/img/glitch_green.png');
        
        //----------------------------------------------------

        this.loader.load((loader, resources) => {

            console.log("UI LOADED")

            this.isLoaded_UI=true;

            //----------------------------------------------------

            this.t_white=resources.white.texture;
            this.t_black=resources.black.texture;

            this.t_logo_white=resources.logo_white.texture;
            this.t_logo_red=resources.logo_red.texture;
            this.t_logo_yellow=resources.logo_yellow.texture;
            this.t_logo_green=resources.logo_green.texture;
            this.t_logo_cyan=resources.logo_cyan.texture;
            this.t_logo_blue=resources.logo_blue.texture;
            this.t_logo_purple=resources.logo_purple.texture;

            this.t_monitor=resources.monitor.texture;
            this.t_glass=resources.glass.texture;
            this.t_vig=resources.vig.texture;

            this.t_bet1=resources.bet1.texture;
            this.t_bet2=resources.bet2.texture;
            this.t_bet3=resources.bet3.texture;
            this.t_bet4=resources.bet4.texture;
            this.t_reset=resources.reset.texture;
            this.t_lose=resources.lose.texture;

            this.t_gradBot=resources.gradBot.texture;
            this.t_gradTop=resources.gradTop.texture;
            this.t_smoke=resources.smoke.texture;

            this.t_glitch_checker1=resources.glitch_checker1.texture;
            this.t_glitch_checker2=resources.glitch_checker2.texture;
            this.t_glitch_checker3=resources.glitch_checker3.texture;
            this.t_glitch_green=resources.glitch_green.texture;
            
        });

        //----------------------------------------------------
        //----------------------------------------------------
        //----------------------------------------------------

    }

    //---------------------------------------------------------------------------------------------------------

    update(){

        this.animate();

    }

    animate() {

        for (var i = 0; i < this.animatedSprites.length; i++) {

            if (this.animatedSprites !== null) {

                var a = this.animatedSprites[i];

                if (a.aniCount === undefined) {
                    a.aniCount = 0;
                    a.curFrame = 0;
                }

                if (a.aniSpeed === undefined) {
                    a.aniSpeed = .25;
                }

                if (a.ani === undefined) {
                    a.ani = [];
                }

                if(a.aniPause!==true){
                    a.aniCount += this.e.dt;
                }

                if (a.aniCount > a.aniSpeed) {

                    a.aniCount = 0;
                    if(a.aniLoop===false){
                        if (a.curFrame < a.ani.length-1){
                            a.curFrame += 1;
                        }
                    }else{
                        a.curFrame += 1;
                    }
                    
                    if (a.curFrame >= a.ani.length && a.aniLoop!==false) {
                        a.curFrame = 0;
                    }

                    a.texture = a.ani[a.curFrame];

                }

            }

        }

    }

}