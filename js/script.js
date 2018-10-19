/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentList = $('.student-item');
let page = 1;
let pageNumber = 0;


// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
const showPage = (page, studentList) => {
    let max = 10 * page - 1;
    let min = 10 * page - 10;
    // first hide all students on the page
    // Then loop through all students in our student list argument
    // if student should be on this page number
        // show the student
    for (i = 0; i < studentList.length; i++) {
       studentList[i].style.display = 'none';
       if (i >= min && i <= max) {
           studentList[i].style.display = 'block';
       }
     }
}



// Create and append the pagination links - Creating a function that can do this is a good approach
const appendPageLinks = () => {
    // determine how many pages for this student list 
    // create a page link section
    // “for” every page
        // add a page link to the page link section
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”
        $('.page').append('<div class="pagination">');
        $('.pagination').append('<ul>');
        for (i=0; i <= studentList.length/10; i++) {
            pageNumber += 1;
        $('.pagination ul').append('<li><a href="#">'+pageNumber+'</a></li>');
        $('.pagination ul li a').on('click', function(){
            let page = this.textContent;
            showPage(page, studentList);
        });
    }
}
appendPageLinks();
showPage(page, studentList);



// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here



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



