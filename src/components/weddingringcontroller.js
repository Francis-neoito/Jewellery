import { createApp } from 'vue/dist/vue.esm-bundler.js'

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
            <figure class="logo">
                <img src="./images/tanishqlogo.svg">
            </figure>
            <div class="searchbox"><span class="searchplaceholder">Search for Gold Jewellery, Diamond Jewellery and more...</span></div>
            <nav id="navright" class="nav">
                <ul class="slider-ul">
                    <li class="slider-li">
                    <a class="sliderA is-active" href="/Jewellery/index.html"><span class="navSpan">Home</span></a>
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
                categories: [],
                categoryColSize: 5,
                collections: [],
                collectionColSize: 3,
            };
        },
        created(){
        },
        mounted(){
        },
        methods:{},
        template:`
        <headercmp></headercmp>
        <footercmp></footercmp>
        `
    });
    return app;
}

export {initWedRingMainApp};
