// MENU TAB

import { clearPageContent } from "./module2.js";
import { backgroundFooter } from "./javascript.js";

import friedRiceImg from '../assets/fried_rice.jpg';
import appetizersImg from '../assets/appetisers.jpg';
import smoothie from '../assets/cool_smoothie.jpg'; 
  

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
            <h1 class ="menuHeading">Food Menu</h1>
            <div class = "row">
                <div class = "col">
                    <div class = "card">
                        <h3> Main Course </h3> 
                        <hr/>
                        <p>
                        Fried rice          ₦7,000. <br/>
                        Spicey Chicken      ₦5,000. <br/>
                        Deep Bake Goose     ₦6,000. 
                        </p>
                    </div>
                </div>    
                <div class = "col">
                    <div class = "placard">
                        <img src = "${friedRiceImg}" alt = "fried rice picture">
                    </div>
                </div>    
            </div>

            <div class = "row">
                <div class = "col">
                    <div class = "card">
                        <h3> Appetizers </h3> 
                        <hr/>
                        <p>
                        Avocado Toast  ₦7,000.<br/>
                        Spaghetti Pie       ₦5,000. <br/>
                        Chicken Pie     ₦6,000. 
                        </p>
                    </div>
                </div>
                <div class = "col">
                    <div class = "placard">
                        <img src = "${appetizersImg}" alt = "fried rice picture">
                    </div>
                </div>
            </div>

            <div class = "row">
                <div class = "col">
                    <div class = "card">
                        <h3> Drinks </h3> 
                        <hr/>
                        <p>
                        Lemonade            ₦7,000. <br/>
                        Smoothie           ₦5,000. <br/>
                        Fresh Juice        ₦6,000. 
                        </p>
                    </div>
                </div>
                <div class = "col">
                    <div class = "placard">
                        <img src = "${smoothie}" alt = "fried rice picture">
                    </div>
                </div>
            </div>
            <div class = "row">
                <div class = "col">
                    <div class = "menuInfo">
                        <p>+2347036897471 </p>
                        <p>www.sarah'delicacy.com<p>
                    </div>
                </div>
                <div class = "col">
                    <hr/>
                </div>

            </div>
        
        `;
        

    


    backgroundFooter(); 
    bodyContainer.style.backgroundColor = "red"; 




    }   

}


export {loadMenuTab}; 

