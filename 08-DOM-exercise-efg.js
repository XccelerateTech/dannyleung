


// var para = document.getElemtnetsByTagName('p');
// for (var i=0; i < para.length; i++) {
//     para[i].addEventListener('click', function(e){
//         console.log('I was clicked' + e.target);
//     });
// }

// Exercise E
document.getElementById('info-field.p');
// ANSWER: document.getElementById('info-field').getElementsByTagName('p');



// Exercise F
document.getElementsByClassName('content-section');

// ANSWER
// function getElementsByClass (classname) {
//     return documentdocument.getElementsByClassName(classname);
// }
// getElementsByClass('conent-section');



// Exercise G
document.getElementsById.removeChild('content-section');

// ANSWER
// function clearHTML(id) {
//     document.getElementById(id).innerHTML = '';
// }
// clearHTML ('info-field');


// Exercise D

$('.name').on('keydown',function(e) {
    let input - e.target.value;

    if(input.length > 50) {
        $(this).css('border','solid 1.5px red');
        alert('You put in too much characters');
    } else {
        $(this).css('border','solid 1.5px black')
    }
})

$('.phone').on('blur',function(e) {
    let input = e.target.value;

    if (input.length < 6 || input.length > 16 || isNaN(input)) {
        alert('You put in too much characters');
    }
})

let rowIdCount = $('#contact-list tbody').find('tr').length;

$('.contact-form').submit(function(e) {
    e.preventDefault()
    let formId = e.target.id;
    let name = e.target.name.value;
    let phone = e.target.phone.value;
    let email = e.target.email.value;

    const row = $(`
    <tr class='row'>
    <td>${name}</td>
    <td>${phone}</td>
    <td>${email}</td>
    </tr>
    `);

if (formId === 'create-form'){
    $(row).attr('id',`row$[rowIdCount++}`);
    $('tbody').append(row);
    $(this).find('.clear').click();
} else {
    $(row).attr('id',$(this).prop('row-id'));
    $('#'+$(this).prop('row-id')).replaceWith(row)
}

alert(`Name is ${name}, Phone is ${phone}, Email is ${email}.`);


});

$('#contact-list').on('click', 'row', function(e) {
    let rowElements = $(this).children();
    let updateFormElement = $('#update-form input').slice(0, rowElements.length);

    for (let i = 0; i<rowElements.length; i++){
        $(updateFormElements[i]).val($(rowElements[i]).html());
    }

$('#update-form').prop('row-id', $(this).attr('id'));


})






