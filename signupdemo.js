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

   
      

    // Handle Sign Up logic
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('signup-email').value.trim();
      const fullname = document.getElementById('signup-fullname').value.trim();
      const username = document.getElementById('signup-username').value.trim().toLowerCase();
      const password = document.getElementById('signup-password').value;

      const users = getUsers();

      // Check if username or email already exists
      const userExists = users.some(u => u.username === username || u.email.toLowerCase() === email.toLowerCase());

      if (userExists) {
        showMessage('An account with this username or email already exists.');
        return;
      }

      // Save new user
      users.push({ email, fullname, username, password });
      localStorage.setItem('users', JSON.stringify(users));

      showMessage('Account created successfully! Switch to log in.', false);
      signupForm.reset();
    });
    

   