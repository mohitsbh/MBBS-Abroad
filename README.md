README: MBBS Abroad Landing Page

Project Overview

This is a responsive landing page for MBBS Abroad, designed to help students apply for MBBS programs in top international universities. The landing page includes key sections such as an introduction, top study destinations, admission process, and an application form.

Technologies Used

HTML – Structure of the landing page

CSS (Tailwind CSS) – Styling and responsiveness

JavaScript – Form validation and interactivity

Web3Form – For handling form submissions

Google Analytics & Facebook Pixel – Tracking user interactions

Features

Fully Responsive Design – Adapts to different screen sizes, ensuring a seamless experience on mobile, tablet, and desktop.

SEO-Optimized Meta Tags – Improves search engine rankings.

Interactive Hero Section – Includes a call-to-action button for engagement.

Informative Content Sections – Covers important details about studying MBBS abroad.

Smooth Animations – Enhances user experience with subtle effects.

Contact Form with Web3Form Integration – Secure and efficient way to collect user inquiries.

Google Analytics and Facebook Pixel Tracking – Helps monitor user engagement and optimize conversions.

Styling and Responsiveness

The landing page is designed using Tailwind CSS, a utility-first framework that enables fast and efficient styling. Key styling elements include:

Grid & Flexbox Layouts – Ensures a structured and visually appealing layout.

Media Queries – Tailors the display for different devices, including:

Mobile (≤ 640px) – Adjusts font sizes, stacks elements vertically, and optimizes padding/margins.

Tablet (641px - 1024px) – Uses a two-column layout for improved readability.

Desktop (≥ 1025px) – Displays full-width sections with proper spacing.

Typography & Colors – Uses a clean font hierarchy and a color palette that aligns with a professional look.

Hover & Focus Effects – Enhances user interaction with buttons and links.

Optimized Image Loading – Ensures faster load times without compromising quality.

Setup Instructions

1. Clone the Repository

 git clone (https://github.com/mohitsbh/MBBS-Abroad.git)
 cd mbbs-abroad-landing

2. Open in a Code Editor

Use any text editor or IDE, such as VS Code.

3. Install Dependencies (if any)

Since this project uses only HTML, CSS, and JavaScript, no additional installation is needed. However, ensure an internet connection for external resources like Tailwind CSS and Web3Form.

4. Modify Web3Form Email

Update the form's action attribute with your Web3Form email address:

<form action="https://formsubmit.co/ajax/your-email@example.com" method="POST">

5. Modify Tracking Scripts (Optional)

Update Google Analytics and Facebook Pixel IDs with your own:

<script>
    gtag('config', 'YOUR-GOOGLE-ANALYTICS-ID');
</script>

<script>
    fbq('init', 'YOUR-FACEBOOK-PIXEL-ID');
</script>

6. Run the Project

Simply open index.html in a browser:

 open index.html  # Mac
 start index.html # Windows

Or use Live Server in VS Code.

7. Deploy the Project



