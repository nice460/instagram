document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupform");
});

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page refresh

    // 1. Get input values
    const email = document.getElementById("email").value.trim();
    const fullName = document.getElementById("fulname").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // 2. Validate inputs
    if (!email  !fullName  !username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // 3. Fetch existing users from localStorage (or initialize an empty array)
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // 4. Check if user already exists
    const userExists = existingUsers.some(
      (user) => user.username === username || user.email === email
    );

    if (userExists) {
      alert("A user with this username or email already exists!");
      return;
    }

    // 5. Create new user object
    const newUser = {
      email: email,
      fullName: fullName,
      username: username,
      password: password, // Note: Storing plain text passwords in LocalStorage is for demo/practice only
    };

    // 6. Save to LocalStorage
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Sign-up successful!");
    form.reset(); // Clear the form fields
  });
});