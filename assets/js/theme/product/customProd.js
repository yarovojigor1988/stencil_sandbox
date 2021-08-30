import PageManager from '../page-manager';
import utils from '@bigcommerce/stencil-utils';


export default class Custom extends PageManager {
    onReady(){
        // alert("Hello world!");
        utils.hooks.on('cookie-privacy-notification', (event, privacyMessage) => {

            // You can make your own custom modal or alert box
            // appear in your theme using the privacyMessage provided
            myCustomAlert(privacyMessage);
            console.log(privacyMessage);

            // Call event.preventDefault() to prevent the default
            // browser alert from occurring in stencil-utils
            event.preventDefault();
          });
    }
}
//  /home/user/stencildemo1/BitBucket/bigcommerce_learn/learn_bigcommerce/assets/js/theme/custom/customcategory.js
//  /home/user/stencildemo1/Cornerstone-clear/xStencil-Sandbox/assets/js/theme/product/customProd.js

