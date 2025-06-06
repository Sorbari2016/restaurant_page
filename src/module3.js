// HOME TAB CODE 

import homepage from "./module.js";
import { clearPageContent } from "./module2.js";


function loadHomeTab() {
// Select the homeTab 
const homeTab = document.getElementById('homeTab'); 

homeTab.addEventListener("click", function(e) {
    e.preventDefault(); 

    clearPageContent(); 

    homepage(); 
}); 

}

export default loadHomeTab; 