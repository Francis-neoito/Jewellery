import './style.css';
import { initMainApp } from './components/controller';
import { initWedRingMainApp } from './components/weddingringcontroller';

const initHome = function(){
    const app = initMainApp();
    app.mount('#app');
}

const initWeddingRingApp = function(){
    const app = initWedRingMainApp();
    app.mount('#weddingApp');
}

function main(){
    const currentScript= document.getElementById('mainScript');
    if(currentScript == null){
        try {
            initHome();
        }
        catch(err) {
        console.log(err);
        }
        try {
            initWeddingRingApp();
        }
        catch(err) {
        console.log(err);
        }    
    }else{
        if(currentScript.getAttribute('page') === 'mainapp'){
            initHome();
        }else if(currentScript.getAttribute('page') === 'weddingrings'){
            initWeddingRingApp();
        }
    }
}
window.onload = function() {
    main();
};