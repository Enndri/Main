$('#BTN').click(function() {
    console.log($('#h1').text());
    $('#h1').text('Hello');    
});
$('#BTN2').on('click', function() {
    console.log('Second button is clicked');
});
