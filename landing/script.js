const $logInOption = $('#login-option');
const $signInOption = $('#signin-option');
const $logInForm = $('#login-form');
const $signInForm = $('#signin-form');

$logInOption.click(() => {
  $signInOption.removeClass('active');
  $logInOption.addClass('active');
  $signInForm.addClass('d-none');
  $logInForm.removeClass('d-none');
});


$signInOption.click(() => {
  $logInOption.removeClass('active');
  $signInOption.addClass('active');
  $logInForm.addClass('d-none');
  $signInForm.removeClass('d-none');
});

$('#user-type-switch').click(() => {
  $('#user-type-switch input').click();
});
