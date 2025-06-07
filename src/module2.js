// BOOK TAB CODES

import { backgroundFooter } from "./javascript.js";


function loadBookTab() { 
const content = document.getElementById("content"); 


const bodyContainer = document.createElement("div"); 
bodyContainer.classList.add("container"); 
content.appendChild(bodyContainer);

function bookContent() {   

  const bodyContainer = document.createElement("div"); 
  bodyContainer.classList.add("container"); 
  content.appendChild(bodyContainer);
     
    bodyContainer.innerHTML = `
    <form id="bookingForm">
      <label>Name</label><br>
      <input type="text" name="name" required><br><br>

      <label>Email</label><br>
      <input type="email" name="email" required><br><br>

      <label>Phone Number</label><br>
      <input type="tel" name="phone" required><br><br>

      <label>Number of Guests</label><br>
      <input type="number" name="guests" required><br><br>

      <label>Special Note:</label><br>
      <textarea name="note" rows="4" cols="30"></textarea><br><br>

      <button type="submit">Submit</button>
    </form>

  `;
  backgroundFooter(); 
  bodyContainer.style.backgroundColor = "red"; 



  // Add submit handler
  const form = document.getElementById("bookingForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted!");
    form.reset();
  });
}
  bookContent();  
}


export {loadBookTab}; 





         
