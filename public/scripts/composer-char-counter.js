$(document).ready(function () {
  // --- our code goes here ---
  $('textarea').val('');
});

$(document).on('input', 'textarea', function () {
  let currentCount = $(this).val().length;
  console.log(currentCount);
  let counter = $(this).siblings('.tweet-footer').children('.counter');
  $(counter).html(140 - currentCount);

  if (currentCount > 140) {
    counter.css('color', 'red');
  } else {
    counter.css('color', '#545149');
  }
});
