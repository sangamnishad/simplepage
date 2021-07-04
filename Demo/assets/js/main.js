let students = document.getElementById('students');
let books = document.getElementById('books');
let settings = document.getElementById('settings');

var selector = '.icons';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});
