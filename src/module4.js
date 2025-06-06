// MENU TAB

import { clearPageContent } from "./module2.js";
import { backgroundFooter } from "./javascript.js";

import friedRiceImg from '../assets/fried_rice.jpg';
  

function loadMenuTab() {
    const menuTab = document.getElementById('menuTab');

    menuTab.addEventListener("click", function(e) {
        e.preventDefault(); 
    
        clearPageContent(); 
        menuContent(); 
    
    });

    function menuContent() {
        const bodyContainer = document.createElement("div"); 
        bodyContainer.classList.add("container"); 
        content.appendChild(bodyContainer);

        bodyContainer.innerHTML = `
            <h1>Food Menu</h1>
            <div class = "row">
                <div class = "col card">
                    <h3> Main Course </h3> 
                    <hr/>
                    <p>
                    Fried rice          ₦7,000. <br/>
                    Spicey Chicken      ₦5,000. <br/>
                    Deep Bake Goose     ₦6,000. 
                    </p>
                </div>
                <div class = "col placard">
                    <img src = "${friedRiceImg}" alt = "fried rice picture">
                
                </div>
            </div>
            <div class = "row">
                <div class = "col card"></div>
                <div class = "col placard"></div>
            </div>
            <div class = "row">
                <div class = "col card"></div>
                <div class = "col placard"></div>
            </div>
        
        `;
        

    


    backgroundFooter(); 
    bodyContainer.style.backgroundColor = "red"; 




    }   

}


export {loadMenuTab}; 

