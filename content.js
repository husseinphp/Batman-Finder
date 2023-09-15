let findBatman = function() {

    // let html = document.body.innerHTML;
  
    // if(html.includes('batman')) {
    //   alert('Batman found!'); 
    // }

    const searchString = 'batman"/>';  // The string to search for
  
    // Get all elements on the page
    const elements = document.querySelectorAll('*');
  
    // Iterate through each element's text content and check for the string
    let foundBatman = false;
    elements.forEach((element) => {
      if (element.textContent.includes(searchString)) {
        foundBatman = true;
        return;
      }
    });
  
    if (foundBatman) {
      alert("The string 'batman/>' was found on this page.");
    }
  
    
  }
  
  // Run the function on page load
  window.onload = findBatman;


