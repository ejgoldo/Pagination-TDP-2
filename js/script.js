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

// only displays the first page of the array by using the previous pages(list) function
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

 function appendPageLinks(pagesOfList) {
    //  dynamically create the pagination div and ul
     $('.page').append('<div class="pagination"></div>');
     $('.pagination').append('<ul>');
    // number of pages is determined by the length of pagesOfList
    let numberOfPages = pagesOfList.length;
    // in this for loop a page or li is added based on the numberOfPages variable
    for (let i = 0; i < numberOfPages; i++) {
        $('.pagination').append('<li><a href="#">'+ i +'</a></li>')
    }
    // add the active class to the first a tag of the list
    $('.pagination ul li a').first().addClass('active');

    // click declares which page becomes active by receiving the active class
    $('.pagination ul li a').on('click', function(e) {
        let pageSelected = parseInt($(this)[0].text) - 1;
        // showPage displays the page that is clicked and adds the active class
        showPage(pageSelected, pagesOfList);
        $('.pagination ul li a').removeClass();
        // after class is removed from the starting page through a click, the clicked page becomes active
        $(this).addClass('active');
        e.preventDefault();
    });
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


appendPageLinks(studentList);
showPage(0, studentList);
