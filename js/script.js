/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// variables which hold the list of students from the HTML and the page and page numbers which are created dynamically
const list = $('.student-item');
let page = 1;
let pageNum = 0;


// function which makes the page display only 10 students at a time. 
function showPage(/* arguments here for page number and student list */ page, list) {
    // first hide all students on the page
    $('.student-item').hide();
    // Then loop through all students in our student list argument
    for (let i = 0; i < list.length; i++) {
       // if student should be on this page number
       if (i >= (page * 10) - 10 && i <= (page * 10) - 1) {
       	// show the student
        list[i].style.display = 'block';
       }
    }
 }


 function appendPageLinks(/* take a student list as an argument */ list) {
    // determine how many pages for this student list 
    let pages = $('.student-item').length/10;
    // create a page link section    
    $('.page').append('<div class="pagination">');
    $('.pagination').append('<ul>');
    // “for” every page
    for (i = 0; i <= pages; i++) {
        // add a page link to the page link section
        pageNum += 1;
        $('.pagination ul').append('<li><a href="#">'+pageNum+'</a></li>');
    // remove the old page link section from the site
    // append our new page link section to the site
    // define what happens when you click a link
        $('.pagination ul li a').on('click', function(){
        // Use the showPage function to display the page for the link clicked
          let page = this.textContent;
          showPage(page, list);
        // mark that link as “active”
        
        });
    }
}
appendPageLinks(list);
showPage(page, list);


// created the page links dynamically and connected it to the showPage function above. 
// const appendPageLinks = () => {
//         $('.page').append('<div class="pagination">');
//         $('.pagination').append('<ul>');
//         for (i=0; i <= list.length/10; i++) {
//             pageNumber += 1;
//             $('.pagination ul').append('<li><a href="#">'+pageNumber+'</a></li>');
//             $('.pagination ul li a').on('click', function(){
//                 let page = this.textContent;
//                 showPage(page, list);
//             });
//         }
// }
// appendPageLinks();
// showPage(page, list);


//added student-search div
$('.page-header').append('<div class="student-search">');
$('.student-search').append('<input placeholder="Searching for students...">');
$('.student-search').append('<button>Search</button>');

//search function
const searchList = () => {  
    // what has been working before
    $('.student-search').on('keyup click', () => {   
        const searchResult = $('input').val();
        for (let i = 0; i < list.length; i++) {
            let check = list[i].textContent.toLowerCase();
            if (check.indexOf(searchResult) !== -1) {
                list[i].style.display = 'block';
            } else {
                list[i].style.display = 'none';
            }
        }
    });

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
searchList();



