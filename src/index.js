// ENTRY FILE

// Modular Imports
import homepage from "./module.js"
import { loadBookTab } from "./module2.js";
import { loadMenuTab } from "./module3.js";

// Styles & Framework imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; 
import './styles.css';


// To clear the content area: 
function clearPageContent() {
    const content = document.getElementById("content"); 
      
    content.innerHTML = "";
}

function switchTabs() {
    // For the home button
    const homeTab = document.getElementById("homeTab"); 
    homeTab.addEventListener("click", function(e){
        e.preventDefault(); 
        clearPageContent(); 
        homepage(); 
    }); 

    // For the Book button
    const bookTab = document.getElementById("bookTab"); 
    bookTab.addEventListener("click", function(e) {
        e.preventDefault(); 
        clearPageContent(); 
        loadBookTab(); 
    }); 

    const menuTab = document.getElementById("menuTab"); 
    menuTab.addEventListener("click", function(e){
        e.preventDefault(); 
        clearPageContent(); 
        loadMenuTab(); 
    })

}
  

// Run the homepage and swichtabs functions. 
homepage(); 
switchTabs(); 








