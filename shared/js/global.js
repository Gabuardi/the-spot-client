(function ($) {
  /* ..............................................
    Gallery
    ................................................. */
  $(document).ready(function () {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
      }
    });
  });

  /* ..............................................
    Open LogIn Modal
    ................................................. */
  (function () {
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
      inputChecked ? $signInOption.show() : $signInOption.hide();
    });
  })();

}(jQuery));

