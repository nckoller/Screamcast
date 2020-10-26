$('.message a').click(function () {
  $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
});

$(document).ready(function () {
  const loginForm = $('form.login');
  const usernameInput = $('input#username-input');
  const passwordInput = $('input#password-input');

  // When form is submitted, validate there is a username and password entered
  loginForm.on('submit', function (event) {
    event.preventDefault();
    const userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.username || !userData.password) {
      return;
    }

    // If valid, run the loginUser function and clear the form
    loginUser(userData.username, userData.password);
    usernameInput.val('');
    passwordInput.val('');
  });

  // loginUser does a post to our api/login route, and if successful, redirects them to index page
  function loginUser(username, password) {
    $.post('/api/login', {
      username: username,
      password: password,
    })
      .then(function () {
        // code to redirect to the index page
        window.location.replace('/');
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});
