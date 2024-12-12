// Import necessary dependencies and assets
import React from 'react';
import '../css/RegistrationAccountManagement.css'; // Styling for the component
import CodeBlock from '../pages/CodeBlock'; // CodeBlock component for displaying code snippets

// Import images for better visual representation
import RegistrationImage from '../images/userFlow/registration_overview.png';
import LoginImage from '../images/userFlow/login_page.png';
import AccountSettingsImage from '../images/userFlow/account_settings.png';

/**
 * RegistrationAccountManagement Component
 * 
 * This component provides detailed information about the process of account 
 * registration, verification, login, management, recovery, and deletion. 
 * It also includes contact information for support.
 */
const RegistrationAccountManagement = () => {
  // Example JSON object for password recovery email
  const passwordRecoveryExample = `
  {
    "email": "user@example.com",
    "reset_link": "https://yourcompany.com/reset-password"
  }
  `;

  return (
    <div className="registration-account-management-container">
      <h1>Registration and Account Management</h1>

      {/* Account Registration Section */}
      <section>
        <h2>Account Registration</h2>
        <p>
          Creating an account with [Your Company Name] is quick and easy. By registering, you gain access to all the features and services we offer. Follow these simple steps to create your account:
        </p>
        <ol>
          <li><strong>Step 1:</strong> Click on the "Sign Up" button located on the top-right corner of the homepage.</li>
          <li><strong>Step 2:</strong> Provide your basic details including name, email, phone number, and password.</li>
          <li><strong>Step 3:</strong> Agree to our terms and conditions and privacy policy to ensure a secure and smooth experience.</li>
          <li><strong>Step 4:</strong> Click "Register" to submit your information. You’ll receive a confirmation email to verify your account.</li>
        </ol>
        <p>
          After completing these steps, you can log in to your account and start using our platform.
        </p>
        <img
          src={RegistrationImage}
          alt="Account Registration Overview"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
        <CodeBlock
          language="javascript"
          code={`// Example API request for user registration
const registerUser = async (userData) => {
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }
  return response.json();
};

// Sample usage
registerUser({ name: 'John Doe', email: 'john.doe@example.com', password: 'securepassword' })
  .then(data => console.log('User registered:', data))
  .catch(error => console.error('Error:', error));
`}
        />
      </section>

      {/* Account Verification Section */}
      <section>
        <h2>Account Verification</h2>
        <p>
          To ensure the authenticity of your registration, we require users to verify their email addresses. After registering, you’ll receive a verification email. Follow the link in the email to verify your account. If you do not receive the email within a few minutes, please check your spam or junk folder.
        </p>
        <p>
          If you encounter any issues with verification, contact our support team at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.
        </p>
      </section>

      {/* Login Section */}
      <section>
        <h2>Login to Your Account</h2>
        <p>
          Once your account is verified, you can log in using your registered email and password. To log in:
        </p>
        <ol>
          <li>Go to the login page by clicking the "Login" button on the top-right corner.</li>
          <li>Enter your registered email and password.</li>
          <li>Click "Log In" to access your account and enjoy all the features.</li>
        </ol>
        <p>
          If you forget your password, you can easily reset it by clicking the "Forgot Password" link on the login page.
        </p>
        <img
          src={LoginImage}
          alt="Login Page Overview"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
        <CodeBlock
          language="javascript"
          code={`// Backend API for User Login
const loginUser = async (credentials) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }
  return response.json();
};

// Example usage
loginUser({ email: 'john.doe@example.com', password: 'securepassword' })
  .then(data => console.log('Logged in:', data))
  .catch(error => console.error('Error:', error));
`}
        />
      </section>

      {/* Google Login Section */}
      <section>
        <h2>Login with Google</h2>
        <p>
          Users can log in using their Google accounts. Below is the API for Google login:
        </p>
        <CodeBlock
          language="javascript"
          code={`// Backend API for Google Login
const googleLogin = async (googleToken) => {
  const response = await fetch('/api/google-login', {
    method: 'POST',
    headers: {
      Authorization: \`Bearer \${googleToken}\`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Google login failed');
  }
  return response.json();
};

// Example usage
googleLogin('<GoogleAccessToken>')
  .then(data => console.log('Logged in with Google:', data))
  .catch(error => console.error('Error:', error));
`}
        />
      </section>

      {/* Account Management Section */}
      <section>
        <h2>Account Management</h2>
        <p>
          Once logged in, you have full control over your account settings. Here's how you can manage your account:
        </p>
        <ul>
          <li><strong>Update Profile:</strong> You can update your personal details such as name, email, phone number, and profile picture in the "Profile" section.</li>
          <li><strong>Change Password:</strong> You can change your password at any time by going to the "Change Password" section under "Account Settings."</li>
          <li><strong>Privacy Settings:</strong> Customize your privacy preferences and choose what data you want to share.</li>
          <li><strong>Notifications:</strong> You can manage your notification preferences to receive updates via email, SMS, or push notifications.</li>
          <li><strong>Deactivate Account:</strong> If you ever decide to leave, you can deactivate your account. Please note that this action is permanent and cannot be undone.</li>
        </ul>
        <img
          src={AccountSettingsImage}
          alt="Account Settings Overview"
          style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }}
        />
        <CodeBlock
          language="javascript"
          code={`// Backend API to Update User Profile
const updateProfile = async (userId, updatedData) => {
  const response = await fetch(\`/api/users/\${userId}\`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error('Failed to update profile');
  }
  return response.json();
};

// Example usage
updateProfile(123, { name: 'Jane Doe', email: 'jane.doe@example.com' })
  .then(data => console.log('Profile updated:', data))
  .catch(error => console.error('Error:', error));
`}
        />
      </section>

      {/* Account Recovery Section */}
      <section>
        <h2>Account Recovery</h2>
        <p>
          If you’ve forgotten your password or are having trouble logging in, we offer an account recovery process to help you regain access. Here’s how:
        </p>
        <ol>
          <li>Click on the "Forgot Password" link on the login page.</li>
          <li>Enter your registered email address.</li>
          <li>We’ll send you an email with a password reset link. Follow the instructions in the email to reset your password.</li>
        </ol>
        <p>
          If you do not receive the recovery email within a few minutes, check your spam folder or contact support for assistance.
        </p>
        <h4>Example of Recovery Email:</h4>
        <CodeBlock language="json" code={passwordRecoveryExample} />
      </section>

      {/* Account Deletion Section */}
      <section>
        <h2>Account Deletion</h2>
        <p>
          If you wish to permanently delete your account, you can request account deletion through the "Account Settings" page. Below is the API for account deletion:
        </p>
        <CodeBlock
          language="javascript"
          code={`// Backend API to Delete User
const deleteUser = async (userId, password) => {
  const response = await fetch(\`/api/users/\${userId}\`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });

  if (!response.ok) {
    throw new Error('Failed to delete account');
  }
  return response.json();
};

// Example usage
deleteUser(123, 'securepassword')
  .then(data => console.log('Account deleted:', data))
  .catch(error => console.error('Error:', error));
`}
        />
      </section>

      {/* Support Section */}
      <section>
        <h2>Contact Support</h2>
        <p>
          If you encounter any issues during registration, verification, or account management, please contact our support team for assistance:
        </p>
        <p>Email: <a href="mailto:support@seemytrip.com">support@seemytrip.com</a></p>
      </section>
    </div>
  );
};

export default RegistrationAccountManagement;
