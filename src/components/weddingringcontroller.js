import { createApp } from 'vue/dist/vue.esm-bundler.js'
import { weddrings } from './productdata';

let app;
const initWedRingMainApp = function(){
    app = createApp({props:[]},{properties:[]});
    app.component('headercmp',{
        props:[],
        data(){
            return{};
        },
        created(){
        },
        mounted(){
        },
        methods:{},
        template:`
        <div class="headerPanel" :style="{'opacity': showPropertyMode ? '0.5':'1'}">
            <figure class="logo" onclick="location.href='/Jewellery/index.html'">
                <img src="./images/tanishqlogo.svg">
            </figure>
            <div class="searchbox"><span class="searchplaceholder">Search for Gold Jewellery, Diamond Jewellery and more...</span></div>
            <nav id="navright" class="nav">
                <ul class="slider-ul">
                    <li class="slider-li">
                    <a class="sliderA" href="/Jewellery/index.html"><span class="navSpan">Home</span></a>
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
        `});

        app.component('footercmp',{
            props:[],
            data(){
                return{};
            },
            created(){
            },
            mounted(){
            },
            methods:{},
            template:`
            <footer class="footerBlock">
            <div style="display:flex; flex-direction:row;">
            <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Useful Links</h2>
                <ul id="collapsible-links" class="menu-footer content">
                <li><a class="gtm-footer-link" href="#" title="Delivery Information" target="_blank">Delivery Information</a></li>
                <li><a class="gtm-footer-link" href="#" title="International Shipping" target="_blank">International Shipping</a></li>
                <li><a class="gtm-footer-link" href="#" title="Payment Options" target="_blank">Payment Options</a></li>
                <li><a class="gtm-footer-link" href="#" title="Track your Order" target="_blank">Track your Order</a></li>
                <li><a class="gtm-footer-link" href="#" title="Returns" target="_blank">Returns</a></li>
                <li><a class="gtm-footer-link" href="#" title="Find a Store" target="_blank">Find a Store</a></li>
                </ul>
            </div>
            <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Information</h2>
                <ul id="collapsible-links" class="menu-footer content">
                <li><a class="gtm-footer-link" href="#" title="Delivery Information" target="_blank">Careers</a></li>
                <li><a class="gtm-footer-link" href="#" title="International Shipping" target="_blank">Blog</a></li>
                <li><a class="gtm-footer-link" href="#" title="Payment Options" target="_blank">Offers & Contest Details</a></li>
                <li><a class="gtm-footer-link" href="#" title="Track your Order" target="_blank">Help & FAQs</a></li>
                <li><a class="gtm-footer-link" href="#" title="Returns" target="_blank">About Tanishq</a></li>
                </ul>
            </div>
            <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Contact Us</h2>
                <ul id="collapsible-links" class="menu-footer content">
                <li><a class="gtm-footer-link" href="#" title="Delivery Information" target="_blank">Write to Us</a></li>
                <li><a class="gtm-footer-link" href="#" title="International Shipping" target="_blank">1800-266-0123</a></li>
                <li><a class="gtm-footer-link" href="#" title="Payment Options" target="_blank">Chat with Us</a></li>
                </ul>
            </div>
            <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Download</h2>
                <div>
                <a class="gtm-footer-link" href="#">
                    <img class="app-download appstore-img" src="./images/appstore.png" alt="appstore">
                </a>
                <a class="gtm-footer-link" href="#">
                    <img class="app-download" src="./images/playstore.png" alt="sdf">
                </a>
                </div>
            </div>
            </div>
            <div>
                <p style="margin-left:2em; font-size:large; color:red">**This is a demo website for training purpose only. It has no connection with or have intention to replicate the original Tanishq website.</p>
            </div>
            </footer>
            `});

    app.component('wedapp',{
        props:[],
        data(){
            return{
                weddrings: [],
                weddringColSize: 4,
            };
        },
        created(){
            this.weddrings = weddrings;
        },
        mounted(){
        },
        methods:{
            getWeddringRowNum(){
                return Math.ceil(this.weddrings.length/this.weddringColSize);
            },
            getWeddringIndex(row,col){
                return (row-1)*this.weddringColSize + (col);
            },
            isCellAvailable(row,col){
                if(this.getWeddringIndex(row,col) > this.weddrings.length)
                    return false;
                return true;
            },
            openCategory(cat){

            }
        },
        template:`
        <headercmp></headercmp>
        <div id="weddingRingAdArea">
            <div style="position:absolute;top: 25vh;left: 4em;">
            <h1 id="weddHead">Your loved ones are unique,</h1>
            <h3 id="weddSubHead">So should be their Jewels.</h3>
            <p id="weddsub">Customize your uniqe ring with realistic graphics and pure beauty of the collection.</p>
            <div id="customizeButton">
                <span style="font-size: larger;padding-left: 1em;">Start now</span>
                <div id="customizeButtonCircle"><img style="height:1.2em;width:1.2em" src="./images/edit.svg"/></div>
            </div>
            </div>
        </div>
        <div class="categoryHeadBlock">
            <div class="categoryHead"><h4>Wedding Rings</h4></div>
            <div class="categoryHeadSub"><p>Browse through our vast collection to find the perfect one as yours!</p></div>
            <img src="./images/Line-Design.svg" style="margin-top: -20px;"/>
        </div>
        <div class="categoryBlock">
            <table class="catagoryTable" style="width: 95%">
                <tr v-for="row in Number(getWeddringRowNum())" style="padding-bottom:1em">
                    <td class="categoryGrid" v-for="col in Number(weddringColSize)" style="padding-bottom: 1.5em;">
                        <div style="border: 1px solid rgb(43,24,25,0.7);width: 92%;cursor: default;" class="categoryItemBlock" v-if="isCellAvailable(row,col)" @click="openCategory(weddrings[getWeddringIndex(row,col)-1])">
                            <div class="categoryImgContainer"><img style="width:100%; cursor: pointer;" :src="'./images/'+ weddrings[getWeddringIndex(row,col)-1].imgSrc"></div>
                            <div class="categoryTitleContainer" style="padding-left:1em;color: #222;border-top: 1px solid rgb(43,24,25,0.7);margin-bottom:1rem">
                                <h4 style="max-width:90%; overflow:hidden;margin-bottom:0;font-weight:bold;font-size:0.9rem">{{weddrings[getWeddringIndex(row,col)-1].name}}</h4>
                                <span class="p-price">&#8377; {{weddrings[getWeddringIndex(row,col)-1].price}}</span>
                                <span class="p-gender">{{weddrings[getWeddringIndex(row,col)-1].gender}} | {{weddrings[getWeddringIndex(row,col)-1].category}}</span>
                                <div class="exploreButtonBox">Explore</div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div style="width:88%;height:4em;margin:auto;display:flex;justify-content: center;border-top: 1px solid #361a1a2e; padding-top:2em">
            <div style="width:10em" class="exploreButtonBox">Load More</div>
        </div>
        <div class="categoryHeadBlock">
            <div class="categoryHead"><h4>Connect With Us</h4></div>
            <div class="categoryHeadSub"><p>We are always available to guide you at your convenience.</p></div>
            <img src="./images/Line-Design.svg" style="margin-top: -20px;"/>
        </div>
        <footercmp></footercmp>
        `
    });
    return app;
}

export {initWedRingMainApp};
