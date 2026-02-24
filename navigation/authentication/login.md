---
layout: page
title: Login
permalink: /login
search_exclude: true
show_reading_time: false
---
<style>
    .submit-button {
        width: 100%;
        transition: all 0.3s ease;
        position: relative;
    }
    .login-container {
        display: flex;
        /* Use flexbox for side-by-side layout */
        justify-content: space-between;
        /* Add space between the cards */
        align-items: flex-start;
        /* Align items to the top */
        gap: 20px;
        /* Add spacing between the cards */
        flex-wrap: nowrap;
        /* Prevent wrapping of the cards */
    }

    .login-card,
    .signup-card {
        flex: 1 1 calc(50% - 20px);
        max-width: 45%;
        box-sizing: border-box;
        background: #1e1e1e;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 20px;
        color: white;
        overflow: hidden;
    }

    .login-card h1 {
        margin-bottom: 20px;
    }

    .signup-card h1 {
        margin-bottom: 20px;
    }

    .form-group {
        position: relative;
        margin-bottom: 1.5rem;
    }

    input {
        width: 100%;
        box-sizing: border-box;
    }
    
    /* Success message styling */
    .success-message {
        color: #10b981;
        text-align: center;
        margin-top: 1rem;
        padding: 0.5rem;
        background: rgba(16, 185, 129, 0.1);
        border-radius: 8px;
        border: 1px solid rgba(16, 185, 129, 0.3);
    }
    
    /* Loading spinner */
    .loading-spinner {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 1s ease-in-out infinite;
        margin-left: 8px;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    .submit-button:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none !important;
    }
</style>
<br>
<div class="login-container">
    <!-- Python Login Form -->
    <div class="login-card">
        <h1 id="pythonTitle">User Login</h1>
        <hr>
        <form id="pythonForm" onsubmit="loginBoth(); return false;">
            <div class="form-group">
                <input type="text" id="uid" placeholder="GitHub ID" required>
            </div>
            <div class="form-group">
                <input type="password" id="password" placeholder="Password" required>
            </div>
            <p>
                <button type="submit" class="large primary submit-button" id="loginButton">Login</button>
            </p>
            <p id="message" style="color: red;"></p>
        </form>
    </div>
    <div class="signup-card">
        <h1 id="signupTitle">Sign Up</h1>
        <hr>
        <form id="signupForm" onsubmit="signup(); return false;">
            <div class="form-group">
                <input type="text" id="name" placeholder="Name" required>
            </div>
            <div class="form-group">
                <input type="text" id="bio" placeholder="Traveler Bio">
            </div>
            <div class="form-group">
                <input type="text" id="signupUid" placeholder="GitHub ID" required>
            </div>
            <div class="form-group">
                <input type="text" id="signupSid" placeholder="Student ID" required>
            </div>
            <div class="form-group">
                <input type="text" id="signupEmail" placeholder="Email" required>
            </div>
            <div class="form-group">
                <input type="password" id="signupPassword" placeholder="Password" required>
            </div>
            <p>
                <label class="switch">
                    <span class="toggle">
                        <input type="checkbox" name="kasmNeeded" id="kasmNeeded">
                        <span class="slider"></span>
                    </span>
                    <span class="label-text">Kasm Server Needed</span>
                </label>
            </p>
            <p>
                <button type="submit" class="large primary submit-button" id="signupButton">Sign Up</button>
            </p>
            <p id="signupMessage" style="color: green;"></p>
        </form>
    </div>
</div>
<script type="module">
    import { login, pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
    
    // Function to handle both Python and Java login simultaneously
    window.loginBoth = function () {
        // Disable login button to prevent double submission
        const loginButton = document.getElementById("loginButton");
        loginButton.disabled = true;
        loginButton.innerHTML = 'Logging in... <span class="loading-spinner"></span>';
        
        //javaLogin();  // Call Java login
        pythonLogin();
    };
    
    // Function to handle Python login
    window.pythonLogin = function () {
        const options = {
            URL: `${pythonURI}/api/authenticate`,
            callback: pythonDatabase,
            message: "message",
            method: "POST",
            cache: "no-cache",
            body: {
                uid: document.getElementById("uid").value,
                password: document.getElementById("password").value,
            }
        };
        login(options);
    }
    
    // Function to handle Java login
    window.javaLogin = function () {
        const loginURL = `${javaURI}/authenticate`;
        const databaseURL = `${javaURI}/api/person/get`;
        const signupURL = `${javaURI}/api/person/create`;
        const userCredentials = JSON.stringify({
            uid: document.getElementById("uid").value,
            password: document.getElementById("password").value,
        });
        
        const loginOptions = {
            ...fetchOptions,
            method: "POST",
            body: userCredentials,
        };
        
        console.log("Attempting Java login...");
        fetch(loginURL, loginOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Invalid login");
                }
                return response.json();
            })
            .then(data => {
                console.log("Login successful!", data);
                // Redirect to trip info page after successful login
                window.location.href = '{{site.baseurl}}/newyork/tripinfo/';
                // Fetch database after login success using fetchOptions
                return fetch(databaseURL, fetchOptions);
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Spring server response: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Java database response:", data);
            })
            .catch(error => {
                console.error("Login failed:", error.message);
                // If login fails, attempt account creation
                if (error.message === "Invalid login") {
                    alert("Login for Spring failed. Creating a new Java account...");
                    const signupData = JSON.stringify({
                        uid: document.getElementById("uid").value,
                        email: document.getElementById("uid").value + "@gmail.com",
                        dob: "11-01-2024", // Static date, can be modified
                        name: document.getElementById("uid").value,
                        bio: document.getElementById("bio")?.value || "", // Add screen_name
                        password: document.getElementById("password").value,
                        kasmServerNeeded: false,
                    });
                    const signupOptions = {
                        ...fetchOptions,
                        method: "POST",
                        body: signupData,
                    };
                    fetch(signupURL, signupOptions)
                        .then(signupResponse => {
                            if (!signupResponse.ok) {
                                throw new Error("Account creation failed!");
                            }
                            return signupResponse.json();
                        })
                        .then(signupResult => {
                            console.log("Account creation successful!", signupResult);
                            alert("Account Creation Successful. Logging you into Flask/Spring!");
                            // Retry login after account creation
                            return fetch(loginURL, loginOptions);
                        })
                        .then(newLoginResponse => {
                            if (!newLoginResponse.ok) {
                                throw new Error("Login failed after account creation");
                            }
                            console.log("Login successful after account creation!");
                            // Redirect to trip info page
                            window.location.href = '{{site.baseurl}}/newyork/tripinfo/';
                            // Fetch database after successful login
                            return fetch(databaseURL, fetchOptions);
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Spring server response: ${response.status}`);
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log("Java database response:", data);
                        })
                        .catch(newLoginError => {
                            console.error("Error after account creation:", newLoginError.message);
                            // Re-enable login button on error
                            const loginButton = document.getElementById("loginButton");
                            loginButton.disabled = false;
                            loginButton.innerHTML = 'Login';
                        });
                } else {
                    console.log("Logged in!");
                    // Re-enable login button on error
                    const loginButton = document.getElementById("loginButton");
                    loginButton.disabled = false;
                    loginButton.innerHTML = 'Login';
                }
            });
    };
    
    // Function to fetch and display Python data
    function pythonDatabase() {
        const URL = `${pythonURI}/api/id`;
        fetch(URL, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Flask server response: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Python login successful, redirecting to trip info...");
                // Show success message
                document.getElementById("message").textContent = "Login successful! Redirecting...";
                document.getElementById("message").style.color = "#10b981";
                
                // Redirect to trip info page
                setTimeout(() => {
                    window.location.href = '{{site.baseurl}}/newyork/tripinfo/';
                }, 500); // Small delay to show success message
            })
            .catch(error => {
                document.getElementById("message").textContent = `Error: ${error.message}`;
                // Re-enable login button on error
                const loginButton = document.getElementById("loginButton");
                loginButton.disabled = false;
                loginButton.innerHTML = 'Login';
            });
    }
    
    window.signup = function () {
        const signupButton = document.getElementById("signupButton");
        const signupMessage = document.getElementById("signupMessage");
        
        // Disable the button and show loading state
        signupButton.disabled = true;
        signupButton.innerHTML = 'Signing up... <span class="loading-spinner"></span>';
        signupButton.classList.add("disabled");
        
        const signupOptionsPython = {
            URL: `${pythonURI}/api/user`,
            method: "POST",
            cache: "no-cache",
            body: {
                name: document.getElementById("name").value,
                bio: document.getElementById("bio").value,
                uid: document.getElementById("signupUid").value,
                email: document.getElementById("signupEmail").value,
                password: document.getElementById("signupPassword").value,
                kasm_server_needed: document.getElementById("kasmNeeded").checked,
            }
        };
        
        const signupOptionsJava = {
            URL: `${javaURI}/api/person/create`,
            method: "POST",
            cache: "no-cache",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                uid: document.getElementById("signupUid").value,
                sid: document.getElementById("signupSid").value,
                email: document.getElementById("signupEmail").value,
                dob: "11-01-2024",  // Static date for now, you can modify this
                name: document.getElementById("name").value,
                bio: document.getElementById("bio").value,
                password: document.getElementById("signupPassword").value,
                kasmServerNeeded: document.getElementById("kasmNeeded").checked,
            })
        };
        
        // Track successful signups
        let javaSuccess = false;
        let pythonSuccess = false;
        
        // Java signup
        fetch(signupOptionsJava.URL, signupOptionsJava)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    javaSuccess = true;
                    console.log("Java signup successful");
                } else {
                    console.error("Java signup failed:", data.message);
                }
            })
            .catch(error => {
                console.error('Error during Java signup:', error);
            });
        
        // Python signup
        fetch(signupOptionsPython.URL, {
            method: signupOptionsPython.method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signupOptionsPython.body)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Signup failed: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                pythonSuccess = true;
                console.log("Python signup successful:", data);
                
                // Show success message
                signupMessage.innerHTML = '<span class="success-message">✓ Signup successful! Redirecting to login...</span>';
                
                // Clear the form
                document.getElementById("name").value = '';
                document.getElementById("bio").value = '';
                document.getElementById("signupUid").value = '';
                document.getElementById("signupSid").value = '';
                document.getElementById("signupEmail").value = '';
                document.getElementById("signupPassword").value = '';
                document.getElementById("kasmNeeded").checked = false;
                
                // Redirect to login page after 2 seconds
                setTimeout(() => {
                    window.location.href = '{{site.baseurl}}/login';
                }, 2000);
            })
            .catch(error => {
                console.error("Signup Error:", error);
                signupMessage.textContent = `Signup Error: ${error.message}`;
                signupMessage.style.color = "red";
                
                // Re-enable the button
                signupButton.disabled = false;
                signupButton.innerHTML = 'Sign Up';
                signupButton.classList.remove("disabled");
            });
    }
    
    function javaDatabase() {
        const URL = `${javaURI}/api/person/get`;
        fetch(URL, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Spring server response: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error("Java Database Error:", error);
            });
    }
</script>