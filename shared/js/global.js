(function ($) {
  /* ..............................................
    LOGIN MODAL
    ................................................. */
  (function () {
    const $logInOption = $('#login-option');
    const $signInOption = $('#signin-option');
    const $logInForm = $('#login-form');
    const $signInForm = $('#signin-form');

    $('#open-login-btn').click(() => {
      $('#login-modal').modal('show');
    });

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
      // $userTypeInput.click();
      let inputChecked = $userTypeInput.prop('checked');
      $userTypeInput.prop('checked', !inputChecked);
      inputChecked ? $signInOption.show() : $signInOption.hide();
    });
  })();

  /* ..............................................
  LOGIN MODAL VALIDATION
  ................................................. */
  (function () {
    function authStaff(data) {
      $.ajax({
        type: 'POST',
        crossDomain: true,
        contentType: 'application/json',
        url: 'http://localhost:3000/staff/authenticate',
        data: data,
        success: (res) => {
          res.type = 1;
          localStorage.setItem('userAccount', JSON.stringify(res));
          window.location = '../../management/home/index.html';
        },
        error: (res) => {
          $('#login-error').removeClass('d-none');
        }
      });
    }

    function authCustomer(data) {
      $.ajax({
        type: 'POST',
        crossDomain: true,
        contentType: 'application/json',
        url: 'http://localhost:3000/customers/authenticate',
        data: data,
        success: (res) => {
          res.type = 2;
          localStorage.setItem('userAccount', JSON.stringify(res));
        },
        error: (res) => {
          $('#login-error').removeClass('d-none');
        }
      });
    }

    $('#login-form').validate({
      rules: {
        username: {
          required: true
        },
        password: {
          required: true
        },
      },
      errorElement: 'p',
      submitHandler: () => {
        let username = $('input[name="username"]').val();
        let password = $('input[name="password"]').val();
        const data = {username: username, password: password};

        if ($('input[name="isStaff"]').prop('checked')) {
          authStaff(JSON.stringify(data));
        } else {
          authCustomer(data);
        }
      }
    });
  })();


}(jQuery));

