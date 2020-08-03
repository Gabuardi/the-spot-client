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

const $userTypeSwitch = $('#user-type-switch');
const $userTypeInput = $userTypeSwitch.children('input');


$userTypeSwitch.click((e) => {
  e.stopPropagation();
  $userTypeInput.click();
  let inputChecked = $userTypeInput.prop('checked');
  $userTypeInput.prop('checked', !inputChecked);
  inputChecked ?  $signInOption.show() : $signInOption.hide();
});


