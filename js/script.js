/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// variables which hold the list of students from the HTML and the page and page numbers which are created dynamically
const studentList = $('.student-item');
let page = 1;
let pageNumber = 0;


// function which makes the page display only 10 students at a time. sets up the pages to be used in the page links in the next function
// achieved the amount of 10 by making minimum and maximum parameters
const showPage = (page, studentList) => {
    let max = 10 * page - 1;
    let min = 10 * page - 10;
    for (i = 0; i < studentList.length; i++) {
       studentList[i].style.display = 'none';
       if (i >= min && i <= max) {
           studentList[i].style.display = 'block';
       }
     }
}



// created the page links dynamically and connected it to the showPage function above. 
const appendPageLinks = () => {
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


//search functionality
const searchList = () => {
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



