import { createApp } from 'vue/dist/vue.esm-bundler.js'
import { Slider } from './slider';
let app;
const initMainApp = function(){
    app = createApp({props:[]},{properties:[]});
    app.component('app',{
        props:[],
        data(){
            return{};
        },
        created(){

        },
        mounted(){
            this.slider = new Slider();
        },
        methods:{
            nextSlide(){
                this.slider.nextSlide();
            },
            previousSlide(){
                this.slider.previousSlide();
            }
        },
        template:`
        <div class="headerPanel" :style="{'opacity': showPropertyMode ? '0.5':'1'}">
            <figure class="logo">
                <img src="./images/tanishqlogo.svg">
            </figure>
            <div class="searchbox"><span class="searchplaceholder">Search for Gold Jewellery, Diamond Jewellery and more...</span></div>
            <nav id="navright" class="nav">
                <ul class="slider-ul">
                    <li class="slider-li">
                    <a class="sliderA is-active" href="/index.html"><span class="navSpan">Home</span></a>
                    </li>
                    <li class="slider-li">
                            <a class="sliderA" href="#"><span class="navSpan">Collection</span></a>
                    </li>
                    <li class="slider-li">
                            <a class="sliderA" href="#"><span class="navSpan">About</span></a>
                    </li>
                    <li class="slider-li">
                    <a class="sliderA" href="#">
                        <span>Account</span>
                    </a>
                    </li>
                    <li class="slider-li">
                    <a class="sliderA" href="#">
                        <span>Cart</span>
                        <div class="cart-total">0</div>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="menuNavBar">
            <nav class="nav">
                <ul class="slider-ul">
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span class="navSpan">All jewellery</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span class="navSpan">Gold</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span class="navSpan">Diamond</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Earrings</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Rings</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Wedding Rings</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Rivaah</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>MIA</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>More</span></a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="slider js-slider">
            <div class="slider__inner js-slider__inner"></div>
            <div id="sliderControl">
                <div class="sliderControlButton" @click="previousSlide()"><img src="./images/leftarrow.svg" 
                    style="object-contain:contain;height:1.5em;width:1.5em;margin-left: 0.25rem;">
                </div>
                <div class="sliderControlButton" style="right:2em;" @click="nextSlide()"><img src="./images/rightarrow.svg" 
                    style="object-contain:contain;height:1.5em;width:1.5em;margin-left: 0.5em;">
                </div>
            </div>
        </div>
        `
    });
    return app; 
}

export {initMainApp};