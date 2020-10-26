// $('.message a').click(function () {
//   $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
// });

$(document).ready(function () {
  const loginButton = $('#login');
  const createAcctButton = $('#create-account');
  const usernameInput = $('input#username-input');
  const passwordInput = $('input#password-input');

  // When form is submitted, validate there is a username and password entered
  loginButton.on('click', function (event) {
    event.preventDefault();
    console.log("clicked login");
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

  createAcctButton.on('click', function (event) {
    event.preventDefault();
    console.log("clicked Acct", usernameInput);
    const userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.username || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.password);
    usernameInput.val('');
    passwordInput.val('');
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, password) {
    $.post('/api/signup', {
      username: username,
      password: password,
    })
      .then(function (data) {
        window.location.replace('/');
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $('#alert .msg').text(err.responseJSON);
    $('#alert').fadeIn(500);
  }
});


