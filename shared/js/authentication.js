(function () {

  // ------------------------------------------------------------------------
  // LOG IN
  // ------------------------------------------------------------------------
  (function () {
    function authStaff(data) {
      $.ajax({
        type: 'POST',
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
      submitHandler() {
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
})();
