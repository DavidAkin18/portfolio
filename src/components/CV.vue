<template>
  <div class="cv">
    <header class="cv-header">
      <h1>Akintola David</h1>
      <p>Ikorodu, Lagos</p>
      
      <p><a href="tel:+2347033576458" style="color:black">07033576458</a> | <a :href="'mailto:' + email">{{ email }}</a></p>
      <p><a :href="linkedin" target="_blank">LinkedIn Profile</a></p>
    </header>
    
    <section class="cv-content">
      <section class="career-objectives">
        <h2>Career Objectives</h2>
        <p>
          I am a passionate Frontend Developer with a strong interest in crafting visually appealing and intuitive user interfaces that effectively communicate organizational narratives. My expertise lies in blending design principles with innovative web technologies to create responsive and engaging websites. With a keen eye for detail and a talent for storytelling through design, I bring ideas to life by transforming complex information into seamless, user-friendly digital experiences. I am dedicated to delivering impactful visual representations that go beyond words and elevate brand identity through thoughtful, dynamic frontend development.
        </p>
      </section>

      <section class="skills">
        <h2>Skills</h2>
        <ul>
          <li><strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+)</li>
          <li><strong>Frontend Frameworks/Libraries:</strong> Vue.js, Bootstrap, Tailwind CSS</li>
          <li><strong>API Integration:</strong> Axios, Fetch API</li>
          <li><strong>Testing Tools:</strong> Jest, Mocha, Cypress</li>
          <li><strong>Version Control & Collaboration:</strong> Git, GitHub, GitLab</li>
          <li><strong>Build Tools:</strong> Webpack, Babel, NPM, Yarn, Vite</li>
          <li><strong>Design Tools:</strong> Figma</li>
          <li><strong>Deployment & CI/CD:</strong> Netlify, Vercel, AWS Amplify, GitHub Actions</li>
          <li><strong>Other Skills:</strong> Responsive Design, Accessibility (WCAG 2.1), Cross-browser Compatibility, Performance Optimization</li>
        </ul>
      </section>

      <section class="professional-experience">
        <h2>Professional Experience</h2>
        <div class="job">
          <h3>Intern as Front-end Developer at Zilla</h3>
          <p><strong>2024 - Till Date</strong></p>
          <ul>
            <li>Handling processing UI/UX as a junior intern.</li>
            <li>Handling the web API for storing data and showcasing data using Postman.</li>
            <li>Working with a team of web developers in achieving the goals.</li>
            <li>Using Tailwind CSS for styling.</li>
          </ul>
        </div>
        <div class="job">
          <h3>ThreadLuck - Lagos, Nigeria</h3>
          <p><strong>September - Till Date</strong></p>
          <ul>
            <li>Handled the development of the website as a solo developer.</li>
            <li>Used Vue.js as a framework.</li>
            <li>Handled the styling using Tailwind and CSS3.</li>
            <li>Handled all activities of the website including all UIs.</li>
          </ul>
        </div>
      </section>

      <section class="education">
        <h2>Education</h2>
        <div class="degree">
          <h3>Bachelor of Science in Sociology and Anthropology</h3>
          <p><strong>Obafemi Awolowo University — Ife, Osun</strong></p>
          <p><strong>Nov 2022</strong></p>
          <p>Relevant coursework: ICT, Industrial Sociology, Criminology, Statistics, and Data Analysis</p>
        </div>
      </section>

      <section class="projects">
        <h2>Projects</h2>
        <ul>
          <li><a :href="portfolioLink" target="_blank">Portfolio Website</a> - Developed a personal portfolio using Vue.js, showcasing past projects and technical skills.</li>
          <li><a :href="ecommerceLink" target="_blank">E-commerce Web App</a> - Built a fully responsive e-commerce platform using Vue.js and Vuex for state management.</li>
          <li><a :href="todoLink" target="_blank">Todo List Web App</a> - Created a Todo List application using Vue.js, allowing users to manage tasks.</li>
          <li><a :href="rockPaperScissorsLink" target="_blank">Rock, Paper, Scissors Game</a> - Developed a simple game using JavaScript, HTML, and CSS.</li>
          <li><a :href="calculatorLink" target="_blank">Calculator App</a> - Built a functional calculator app using HTML, CSS3, and JavaScript.</li>
          <li><a :href="fashionWebsiteLink" target="_blank">Fashion Website</a> - Designed and developed a fashion portfolio website using Vue.js, CSS3, and TailwindCSS.</li>
          <li><a :href="multiStepFormLink" target="_blank">Multi-step Form Application</a> - Implemented a multi-step form with Vue.js and Vuelidate.</li>
        </ul>
      </section>

      <section class="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Responsive Web Design – FreeCodeCamp</li>
          <li>JavaScript Algorithms and Data Structures – FreeCodeCamp</li>
          <li>Frontend Developer Nanodegree – Udacity</li>
        </ul>
      </section>

      <section class="soft-skills">
        <h2>Soft Skills</h2>
        <ul>
          <li>Strong communication and collaboration skills in agile development environments.</li>
          <li>Excellent problem-solving and debugging abilities.</li>
          <li>Attention to detail and a passion for delivering high-quality user experiences.</li>
          <li>Willingness to learn and adapt to new technologies quickly.</li>
        </ul>
      </section>

      <section class="references">
        <h2>References</h2>
        <p>Available upon request.</p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'akindayodavid22@gmail.com',
      linkedin: 'https://www.linkedin.com/in/david-akintola-4800001b4/',
      portfolioLink: 'https://github.com/DavidAkin18/portfolio-website',
      ecommerceLink: 'https://github.com/DavidAkin18/shop.co-ecommerce',
      todoLink: 'https://github.com/DavidAkin18/ToDo-list',
      rockPaperScissorsLink: 'https://github.com/DavidAkin18/rock-paper-scissors',
      calculatorLink: 'https://github.com/DavidAkin18/Calculator',
      fashionWebsiteLink: 'https://github.com/DavidAkin18/threadluck',
      multiStepFormLink: 'https://github.com/DavidAkin18/multi-step-form'
    };
  }
}
</script>

<style scoped>
.cv {
  font-family: Arial, sans-serif;
  padding: 2rem;
  padding-top: 75px;
  max-width: 800px;
  margin-top: 75px;
  margin: 0 auto;
}

.cv-header {
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 4rem;
}

.cv-header h1 {
  margin: 0;
}

.cv-header p {
  margin: 0.5rem 0;
}

.cv-header a {
  color: #007bff;
  text-decoration: none;
}

.cv-content section {
  margin-bottom: 2rem;
}

.cv-content h2 {
  border-bottom: 2px solid #007bff;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.cv-content ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.cv-content ul li {
  margin-bottom: 0.5rem;
}

.job, .degree, .projects, .certifications, .soft-skills, .references {
  margin-bottom: 2rem;
}

.projects a, .cv-header a {
  color: #007bff;
}

.projects a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .cv {
    padding: 1rem;
  }

  .cv-header {
    font-size: 0.9rem;
  }

  .cv-content h2 {
    font-size: 1.2rem;
  }
}
</style>