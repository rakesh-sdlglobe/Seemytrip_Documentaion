import React from 'react';
import '../css/SystemRequirements.css';

const SystemRequirements = () => {
  return (
    <div className="system-requirements-container">
      <h1>System Requirements</h1>

      <section>
        <h2>Minimum Requirements</h2>
        <p>
          To ensure optimal performance, your system must meet the following minimum requirements:
        </p>
        <ul>
          <li><strong>Operating System:</strong> Windows 10 / macOS 10.15 Catalina / Linux (Ubuntu 18.04 or later)</li>
          <li><strong>Processor:</strong> Intel Core i3 / AMD Ryzen 3 or equivalent</li>
          <li><strong>Memory:</strong> 4 GB RAM</li>
          <li><strong>Storage:</strong> 2 GB of available space</li>
          <li><strong>Graphics:</strong> Integrated GPU with DirectX 11 or OpenGL 3.3 support</li>
          <li><strong>Network:</strong> Broadband internet connection for online features</li>
        </ul>
      </section>

      <section>
        <h2>Recommended Requirements</h2>
        <p>
          For the best experience, we recommend the following system specifications:
        </p>
        <ul>
          <li><strong>Operating System:</strong> Windows 11 / macOS 12 Monterey / Latest Linux distributions</li>
          <li><strong>Processor:</strong> Intel Core i5 or higher / AMD Ryzen 5 or higher</li>
          <li><strong>Memory:</strong> 8 GB RAM or more</li>
          <li><strong>Storage:</strong> 10 GB of available SSD space</li>
          <li><strong>Graphics:</strong> Dedicated GPU (NVIDIA GTX 1050 or AMD Radeon RX 560)</li>
          <li><strong>Network:</strong> High-speed internet connection for uninterrupted performance</li>
        </ul>
      </section>

      <section>
        <h2>Supported Devices</h2>
        <p>
          Our application is compatible with a variety of devices, including:
        </p>
        <ul>
          <li>Laptops and desktops (Windows, macOS, Linux)</li>
          <li>Tablets (iOS 14 or later, Android 10 or later)</li>
          <li>Smartphones (iOS 14 or later, Android 10 or later)</li>
        </ul>
      </section>

      <section>
        <h2>Additional Recommendations</h2>
        <p>
          To ensure a smooth experience, we suggest:
        </p>
        <ul>
          <li>Keeping your operating system and software updated.</li>
          <li>Installing the latest graphics and network drivers.</li>
          <li>Using an uninterruptible power supply (UPS) for desktop setups.</li>
        </ul>
      </section>

      <section>
        <h2>Need Help?</h2>
        <p>
          If you have any questions about system compatibility, please contact our support team at <a href="mailto:support@example.com">support@example.com</a> or visit our <a href="/help-center">Help Center</a>.
        </p>
      </section>
    </div>
  );
};

export default SystemRequirements;
