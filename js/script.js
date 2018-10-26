/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// student information put into variables, one to contain them and the other to put them into pages and/or a list. also, put the student-search div and pagination div into variables while appending the searchDiv into its place in the HTML.
let studentInfo = $('.student-item');
let searchDiv ='<div class="student-search"><input id="search" placeholder="Search for students..."><button>Search</button></div>';
var pagDiv ='<div class="pagination"><ul></ul></div>';
var studentList = pages(studentInfo);

$('.page-header.cf').append(searchDiv);


//grabs the list of students and puts it into an array. making it easier to select elements from the list in future functions
function pages(list) {
	let originalList = list.slice();
	let pagesArr = [];
	while (originalList.length) {
		pagesArr.push(originalList.splice(0,10));
	}
	return pagesArr;
}

// only displays the first page of the array by using the previous pages(list) function
function showPage(pageNumber, pageList) {
    $('.student-list li').hide();
    $.each(pageList, function(index, page){
        if (pageNumber === index) {
            $.each(page, function(i, listItem){
                $(listItem).fadeIn('fast');
            });
        }
    });
 }

 function appendPageLinks(pageList) {
    //  dynamically create the pagination div and ul
     $('.page').append(pagDiv);
    // number of pages is determined by the length of pagesOfList
    let numberOfPages = pageList.length;
    // in this for loop, a page or li is added based on the numberOfPages variable
    for (let i = 0; i <= numberOfPages; i++) {
        let buttons = '<li><a href="#">'+ i +'</a></li>';
        $('.pagination ul').append(buttons);
    }
    // add the active class to the first a tag of the list
    $('.pagination ul li a').first().addClass('active').hide();

    // click declares which page becomes active by receiving the active class
    $('.pagination ul li a').on('click', function(e) {
        var pageSelected = parseInt($(this)[0].text) - 1;
        // showPage displays the page that is clicked and adds the active class
        showPage(pageSelected, pageList);
        $('.pagination ul li a').removeClass();
        // after class is removed from the starting page through a click, the clicked page becomes active
        $(this).addClass('active');
        e.preventDefault();
    });
}


function searchList() {
    // get user input
    let search = $('input').val().toLowerCase().trim();
    // match user input to student information
    let matched = studentInfo.filter(function (i) {
        let email = $(this).find('.email').text();
        let names = $(this).find('h3').text();
        if (names.indexOf(search) > -1 || email.indexOf(search) > -1) {
            return true;
        }
        return false;
    });

    // if user input does not lead to a student name, display message of no student found
    if (matched.length === 0) {
        $('.page-header h2').text('No student found.')
    } else {
        $('.page-header h2').text('STUDENTS')
    }

    // user matches display and new page links are made if user matches reach more than 10
    let newPages = pages(matched);
    $('.pagination').remove();
    if (matched.length >= 10) {
        appendPageLinks(newPages);
    }
    showPage(0, newPages);
}

appendPageLinks(studentList);
showPage(0, studentList);

// event listeners for search functionality
$('.student-search').find('button').on('click', searchList);
$('.student-search').find('input').keyup(searchList);