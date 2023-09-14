import { createApp } from 'vue/dist/vue.esm-bundler.js'
import { weddrings } from './productdata';
import * as THREE from 'three';
import * as WEBGI from 'webgi';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import CustomMaterialConfigPlugin from './custommaterialconfig';
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
            <li><a class="gtm-footer-link" href="#" title="Delivery Information" >Delivery Information</a></li>
            <li><a class="gtm-footer-link" href="#" title="International Shipping" >International Shipping</a></li>
            <li><a class="gtm-footer-link" href="#" title="Payment Options" >Payment Options</a></li>
            <li><a class="gtm-footer-link" href="#" title="Track your Order" >Track your Order</a></li>
            <li><a class="gtm-footer-link" href="#" title="Returns" >Returns</a></li>
            <li><a class="gtm-footer-link" href="#" title="Find a Store" >Find a Store</a></li>
            </ul>
        </div>
        <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Information</h2>
            <ul id="collapsible-links" class="menu-footer content">
            <li><a class="gtm-footer-link" href="#" title="Delivery Information" >Careers</a></li>
            <li><a class="gtm-footer-link" href="#" title="International Shipping" >Blog</a></li>
            <li><a class="gtm-footer-link" href="#" title="Payment Options" >Offers & Contest Details</a></li>
            <li><a class="gtm-footer-link" href="#" title="Track your Order" >Help & FAQs</a></li>
            <li><a class="gtm-footer-link" href="#" title="Returns" >About Tanishq</a></li>
            </ul>
        </div>
        <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Contact Us</h2>
            <ul id="collapsible-links" class="menu-footer content">
            <li><a class="gtm-footer-link" href="#" title="Delivery Information" >Write to Us</a></li>
            <li><a class="gtm-footer-link" href="#" title="International Shipping" >1800-266-0123</a></li>
            <li><a class="gtm-footer-link" href="#" title="Payment Options" >Chat with Us</a></li>
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


    app.component('editorscene',{
        props:['editMode'],
        data(){
            return{
                isLoaded: false,
                loadPercentage:0,
                nightMode:true,
                turnTable: true,
            };
        },
        created(){
            document.addEventListener('removethreeinstance',()=>{

            });
        },
        mounted(){
            document.documentElement.className = 'night';
            // setTimeout(()=>{this.loadPercentage = 10},500);
            // setTimeout(()=>{this.initScene();},1000);
            this.loadPercentage = 10;
            setTimeout(()=>{this.initWebGI();},1000);
        },
        unmounted(){
            // this.destroyInstance();
            // this.viewer.removePlugin(WEBGI.MaterialConfiguratorPlugin,true);
            this.viewer.renderer.refreshPipeline();
            this.viewer.scene.disposeSceneModels()
            this.viewer.dispose();
        },
        watch:{
            loadPercentage: function(val){
                const loader = document.getElementById('loader');
                if(loader !=null){
                    loader.style.width = this.loadPercentage + '%';
                }
                if(val===100){
                    this.isLoaded = true;
                }
            }
        },
        methods:{
            toggleSceneMode(){
                this.nightMode = !this.nightMode;
                const bg =document.getElementById('customizeEditorContainer');
                const close = document.getElementById('closeEditorDiv');
                if(this.nightMode){
                    document.documentElement.className = 'night';
                }else{
                    document.documentElement.className = 'day';
                }
            },
            toggleTurnTable(){
                this.turnTable = !this.turnTable;
                
                if(this.turnTable){
                    this.controls.autoRotate = true;
                    this.controls.autoRotateSpeed = 1;
                }else{
                    this.controls.autoRotate = false;
                }
            },
            async initWebGI(){
                this.loadPercentage = 50;
                this.viewer = new WEBGI.ViewerApp({
                    canvas: document.getElementById('editorSceneBlock'),
                    alpha:true,
                    isAntialiased: true,
                    useRgbm: true
                  }) ;
                const manager = new WEBGI.AssetManagerPlugin();
                await this.viewer.addPlugin(manager);
               /* await this.viewer.addPlugin(WEBGI.TonemapPlugin);
                const pp =await this.viewer.addPlugin(WEBGI.ProgressivePlugin);;
                await this.viewer.addPlugin(WEBGI.SSRPlugin);
                const diamondPlugin = await this.viewer.addPlugin(WEBGI.DiamondPlugin);
                await this.viewer.addPlugin(WEBGI.SSAOPlugin);
                const ta = await this.viewer.addPlugin(WEBGI.TemporalAAPlugin);
                await this.viewer.addPlugin(WEBGI.GroundPlugin);
                const bloom = await this.viewer.addPlugin(WEBGI.BloomPlugin);
                const matConfig = await this.viewer.addPlugin(WEBGI.MaterialConfiguratorPlugin);*/
                await WEBGI.addBasePlugins(this.viewer);
                await this.viewer.addPlugin(CustomMaterialConfigPlugin);
                const camViews = this.viewer.getPlugin(WEBGI.CameraViewPlugin)
                this.viewer.renderer.refreshPipeline();
                // pp.enabled = true;
                // ta.enabled = true;
                //To clickbackground
                // this.viewer.getPlugin(WEBGI.TonemapPlugin).config.clipBackground = false;
                const options = {autoScale: false}
                const assets = await manager.addFromPath("./objects/ring1.glb", options);
                this.viewer.scene.environment = await manager.importer.importSingle({path:'./images/gem_2.hdr'});
                // diamondPlugin.envMap = await manager.importer.importSingle({path:'./images/aircraft_workshop_01_1k.hdr'});
                // diamondPlugin.envMap = await manager.importer.importSingle({path:'./images/gem_2.hdr'});
                // diamondPlugin.envMapIntensity = 1.5;
                this.viewer.scene.envMapIntensity=0.5;
                this.controls = this.viewer.scene.activeCamera.controls;
                this.controls.autoRotate = this.turnTable;
                this.controls.autoRotateSpeed = 1;
                this.loadPercentage = 100;
            },
            initScene(){
                this.dom = document.getElementById("editorSceneBlock");
                this.loadPercentage = 20;
                const canvaWidth = this.dom.getBoundingClientRect().width;
                const canvaHeight = this.dom.getBoundingClientRect().height;
                this.scene = new THREE.Scene();
                this.camera = new THREE.PerspectiveCamera(5, canvaWidth /  canvaHeight, 1, 2000);
                this.renderer = new THREE.WebGLRenderer({antialias:true});
                this.renderer.setSize( canvaWidth, canvaHeight );
                this.renderer.domElement.style.height = `${canvaHeight} + 'px'`;
                this.renderer.domElement.style.width = `${canvaWidth} + 'px'`; 
                this.renderer.domElement.width = canvaWidth;
                this.renderer.domElement.height = canvaHeight;
                this.dom.appendChild( this.renderer.domElement );
                this.renderer.setClearColor( 0x000000, 0 );

                this.controls = new OrbitControls( this.camera, this.renderer.domElement );
                this.loadProductGltfModel();
                this.loadPercentage = 30;
                const pmremGenerator = new THREE.PMREMGenerator( this.renderer );
                pmremGenerator.compileCubemapShader();
                THREE.DefaultLoadingManager.onLoad = function ( ) {
					pmremGenerator.dispose();
				};
                const hdrCubeMap = new RGBELoader()
					.setPath( './images/' )
					.load( 'aircraft_workshop_01_1k.hdr', this.envLoadComplete);
                this.camera.position.set(0, 0, 300);
                this.camera.lookAt(0, 0, 0);
                this.camera.updateProjectionMatrix();
                // this.controls.autoRotate = true;
                this.controls.autoRotateSpeed = 1.5;
                this.controls.minDistance = 130;
                this.controls.maxDistance  = 350;
                this.controls.enablePan = false;
                this.loadPercentage = 35;
                this.startRendering();
            },
            envLoadComplete(texture){
                texture.mapping = THREE.EquirectangularReflectionMapping;
                this.scene.environment = texture;
            },
            loadComplete(gltf){
                this.meshes= gltf.scene.children[0].children[0].children[0].children;
                this.scene.add( gltf.scene );
                gltf.scene.position.y = 0;
                gltf.scene.scale.set(7,7,7);
                gltf.scene.rotation.set(-20*Math.PI/180,-10*Math.PI/180,0);
                // console.log(this.meshes);
                this.meshes[5].material.refractionRatio = 0.98;
                this.meshes[5].material.reflectivity=0.9;
                // this.meshes[5].material.color = new THREE.Color(0.8,0.7,0.1);
                this.loadPercentage = 100;
            },
            loadProductGltfModel(){
                const loader = new GLTFLoader();
                const dracoLoader = new DRACOLoader();
                dracoLoader.setDecoderConfig({ type: 'js' });
                dracoLoader.setDecoderPath( 'https://www.gstatic.com/draco/v1/decoders/' );
                loader.setDRACOLoader( dracoLoader );
                loader.load(
                    // resource URL
                    './objects/ring_webgi.glb',
                    // called when the resource is loaded
                    this.loadComplete,
                    // called while loading is progressing
                    function ( xhr ) {

                        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

                    },
                    // called when loading has errors
                    function ( error ) {

                        console.log( 'An error happened' );

                    }
                );
                this.loadPercentage = 60;
            },
            animate(){
                this.renderer.render( this.scene, this.camera );
                this.controls.update();
            },
            startRendering(){
                this.renderer.setAnimationLoop(this.animate);
            },
            stopRendering(){
                this.renderer.setAnimationLoop(null);
            },
            destroyInstance(){
                this.renderer.dispose();
                this.renderer.forceContextLoss();
            }
        },
        template:`
            <div id="editorLoader" v-if="!isLoaded">
                <div id="loader"></div>
            </div>
            <canvas id="editorSceneBlock" height="100%" width="100%"></canvas>
            <div id="sceneBackgroundControlDiv">
                <img v-if="nightMode" class="sceneOptionButtons" src="./images/moon.svg" @click="toggleSceneMode()">
                <img v-if="!nightMode" class="sceneOptionButtons" src="./images/daymode.svg" @click="toggleSceneMode()">
                <svg v-if="turnTable" class="sceneOptionButtons"  @click="toggleTurnTable()" viewBox="0 0 24 24" fill="none" :stroke="nightMode ? '#ffffff' : '#4d0316'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.70001 9.26001L12 12.33L17.26 9.28001"/><path d="M12 17.7701V12.3201"/>
                    <path d="M10.76 6.28998L7.56 8.06998C6.84 8.46998 6.23999 9.47998 6.23999 10.31V13.7C6.23999 14.53 6.83 15.54 7.56 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.3C17.77 9.46998 17.18 8.45998 16.45 8.05998L13.25 6.27998C12.56 5.89998 11.44 5.89998 10.76 6.28998Z"/>
                    <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"/><path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"/>
                </svg>
                <svg v-if="!turnTable" class="sceneOptionButtons"  @click="toggleTurnTable()" viewBox="0 0 24 24" fill="none" :stroke="nightMode ? '#ffffff' : '#4d0316'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.70001 9.26001L12 12.33L17.26 9.28001"/><path d="M12 17.7701V12.3201"/>
                    <path d="M10.76 6.28998L7.56 8.06998C6.84 8.46998 6.23999 9.47998 6.23999 10.31V13.7C6.23999 14.53 6.83 15.54 7.56 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.3C17.77 9.46998 17.18 8.45998 16.45 8.05998L13.25 6.27998C12.56 5.89998 11.44 5.89998 10.76 6.28998Z"/>
                    <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"/><path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"/>
                    <path d="M20 2 L2 20"/>
                </svg>
            </div>
            <div :style="{'width':isLoaded ? '30vw' : '0' }" id="mconfiguratorBlock">
            </div>
            <div :style="{'width':isLoaded ? '30vw' : '0' }" id="mconfigurator"></div>
    `});

    app.component('wedapp',{
        props:[],
        data(){
            return{
                weddrings: [],
                weddringColSize: 4,
                customizeMode: false,
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
            },
            startCustomizing(){
                this.customizeMode = true;
                const editorContainer = document.getElementById('customizeEditorContainer');
                if(editorContainer!=null){
                    editorContainer.style.top= '0';
                    editorContainer.style.left= '0';
                    editorContainer.style.height = '100vh';
                    editorContainer.style.width = '100vw';
                    editorContainer.style.opacity = '1';
                    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                }else{
                    console.log("editor dom not available");
                }
            },
            closeCustomizEditor(){
                document.dispatchEvent(new Event('removethreeinstance'));
                this.customizeMode = false;
                const editorContainer = document.getElementById('customizeEditorContainer');
                if(editorContainer!=null){
                    document.getElementsByTagName('body')[0].style.removeProperty("overflow");
                    editorContainer.style.top= '40vh';
                    editorContainer.style.left= '40vw';
                    editorContainer.style.height = '20vh';
                    editorContainer.style.width = '20vw';
                    editorContainer.style.opacity = '0';
                }else{
                    console.log("editor dom not available");
                }
            }
        },
        template:`
        <headercmp></headercmp>
        <div id="customizeEditorContainer">
            <div id="closeEditorDiv" @click="closeCustomizEditor()">x</div>
            <editorscene :editMode="customizeMode" v-if="customizeMode"></editorscene>
        </div>
        <div id="weddingRingAdArea">
            <div style="position:absolute;top: 25vh;left: 4em;">
            <h1 id="weddHead">Your loved ones are <span id="weddHeadUnique">Unique</span></h1>
            <h3 id="weddSubHead">so should be their, Rings.</h3>
            <p id="weddsub">Customize your uniqe ring with realistic graphics and pure beauty of the collection.</p>
            <div id="customizeButton" @click="startCustomizing()">
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
