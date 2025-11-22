// main.js - Frontend interactivity for adding users
document.addEventListener("DOMContentLoaded", () => {
  // Handle form submission to add a new user
  const form = document.getElementById("add-user-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values from the form
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;

    // Log new user details (this would normally be sent to the server)
    console.log("New User Added:", { name, age });

    // Add the new user to the list on the front-end
    const userList = document.getElementById("user-list");
    const newUser = document.createElement("li");
    newUser.textContent = `${name} (Age: ${age})`;
    userList.appendChild(newUser);

    // Reset the form
    form.reset();
  });
});
