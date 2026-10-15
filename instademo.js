 let isSignUpView = false;

    // DOM Elements
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const toggleLink = document.getElementById('toggle-link');
    const toggleText = document.getElementById('toggle-text');
    const authMessage = document.getElementById('auth-message');

    // Helper: Display messages
    function showMessage(text, isError = true) {
      authMessage.textContent = text;
      authMessage.className = `message ${isError ? 'error' : 'success'}`;
      authMessage.style.display = 'block';
    }

    function clearMessage() {
      authMessage.style.display = 'none';
      authMessage.textContent = '';
    }

    // Helper: Get stored users from localStorage
    function getUsers() {
      return JSON.parse(localStorage.getItem('users') || '[]');
    }

    
    // Handle Login logic
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
/*const loginBtn= document.querySelector("login");
if (loginBtn){loginBtn.textContent= "Logging in....." ;}
*/
      const identifier = document.getElementById('username')?.value.trim().toLowerCase();
      const password = document.getElementById('password')?.value;

      const users = getUsers();

      // Find user matching username or email
      const validUser = users.find(u => 
        (u.username === identifier || u.email.toLowerCase() === identifier) && u.password === password
      );

      if (validUser) { window.location.href = "instahomepage.html" ;
//showMessage(`Welcome back, ${validUser.fullname || validUser.username}!`, /*false*/);
      } else {
        showMessage('Sorry, your password was incorrect. Please double-check your password.');
      }
    });