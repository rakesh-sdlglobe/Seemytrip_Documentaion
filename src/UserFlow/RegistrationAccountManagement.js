import React from 'react';
import '../css/RegistrationAccountManagement.css';

const RegistrationAccountManagement = () => {
  return (
    <div className="registration-account-management-container">
      <h1>Registration and Account Management</h1>

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
      </section>

      <section>
        <h2>Account Verification</h2>
        <p>
          To ensure the authenticity of your registration, we require users to verify their email addresses. After registering, you’ll receive a verification email. Follow the link in the email to verify your account. If you do not receive the email within a few minutes, please check your spam or junk folder.
        </p>
        <p>
          If you encounter any issues with verification, contact our support team at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>.
        </p>
      </section>

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
      </section>

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
      </section>

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
      </section>

      <section>
        <h2>Account Deletion</h2>
        <p>
          If you wish to permanently delete your account, you can request account deletion through the "Account Settings" page. Please note that deleting your account will result in the loss of all your data, and this action cannot be undone.
        </p>
        <p>
          To delete your account, contact our support team at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a> for assistance.
        </p>
      </section>

      <section>
        <h2>How to Contact Us</h2>
        <p>
          For any questions related to account registration, management, or recovery, feel free to reach out to our support team. We are here to help.
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></li>
          <li><strong>Phone:</strong> +1-800-123-4567</li>
          <li><strong>Address:</strong> 123 Registration Lane, Your City, Country</li>
        </ul>
      </section>
    </div>
  );
};

export default RegistrationAccountManagement;
