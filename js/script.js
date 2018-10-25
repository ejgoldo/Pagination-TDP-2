/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// student information put into variables, one to contain them and the other to put them into pages and/or a list
let studentInfo = $('.student-item');
let studentList = pages(studentInfo);

//grabs the list of students and puts it into an array. making it easier to select elements from the list in future functions
function pages(list) {
    let originalList = list.slice();
    let arrayPages = [];
    while (originalList.length) {
        arrayPages.push(originalList.splice(0, 10));
    }
    return arrayPages;
}

// only displays the first page of the array by using the previous function
function showPage(pageNum, pagesOfList) {
    $('.student-list').hide();
    $.each(pagesOfList, function(index, page){
        if (pageNum === index) {
            $.each(page, function(i, listItem){
                $(listItem).show();
            });
        }
    });
 }
 showPage();

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



