/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const stList = $('.student-item');
let page = Math.floor(stList.length/10);




// the showPage function loops through the list of students then with the help of the if statement, only displays 10 at a time
const showPage = (stList, page) => {
    for (let i = 0; i < stList.length; i++) {
        if (i >= 0 && i <= 9) {
            stList[i].style.display = 'block';
        } else {
            stList[i].style.display = 'none';
        }
    }
 }
showPage(stList, page);



// Create and append the pagination links - Creating a function that can do this is a good approach
function appendPageLinks(/* take a student list as an argument */) {
    // determine how many pages for this student list 
    // create a page link section
    // “for” every page
        // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”
}




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






//exceeds
//search functionality
function searchList() {
    // Obtain the value of the search input
    // remove the previous page link section    
    // Loop over the student list, and for each student…
// ...obtain the student’s name…
// ...and the student’s email…
// ...if the search value is found inside either email or name…
    		// ...add this student to list of “matched” student
    // If there’s no “matched” students…
           // ...display a “no student’s found” message
    // If over ten students were found…
           // ...call appendPageLinks with the matched students
   // Call showPage to show first ten students of matched list
}



