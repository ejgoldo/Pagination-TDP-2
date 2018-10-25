/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// variables which hold the list of students from the HTML and the page and page numbers which are created dynamically
const list = $('.student-item');
let page = 1;
let pageNum = 0;


// function which makes the page display only 10 students at a time. 
function showPage(page, list) {
    $('.student-item').hide();
    for (let i = 0; i < list.length; i++) {
       if (i >= (page * 10) - 10 && i <= (page * 10) - 1) {
        list[i].style.display = 'block';
       }
    }
 }


 function appendPageLinks(list) {
    // first get the amount of pages that will be needed for the list of students
    let pages = $('.student-item').length/10;
    // dynamically create pagination div and contents   
    $('.page').append('<div class="pagination">');
    $('.pagination').append('<ul>');
    // loop through every page and add a page link to the pagination div
      for (i = 0; i <= pages; i++) {
          pageNum += 1;
          $('.pagination ul').append('<li><a href="#">'+pageNum+'</a></li>');
      }
    // set the "active" class to the first page 
      $('a').first().addClass('active');  
    // function that on click shows the varying content for each page and passes the "active" class to whichever page is clicked and removes the class from the one that was previously "active"
      $('.pagination ul li a').on('click', function(){
        // Use the showPage function to display the page for the link clicked
          let page = this.textContent;
          showPage(page, list);
          $('a').removeClass();
          $(this).parent().find('li.active').removeClass('active');
          $(this).addClass('active');
      });
}
appendPageLinks(list);
showPage(page, list);



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



