<template>
  <div class="contact-container">
    <h1>Contact Me</h1>
    <p>If you have any questions or want to work together, feel free to reach out!</p>

    <div class="contact-info">
      <h2>Connect with Me</h2>
      <ul>
        <li>Email: <a href="mailto:akindayodavid22@gmail.com">akindayodavid22@gmail.com</a></li>
        <li>Phone: <a href="tel:+234703576458">+(234) 703 576 458</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/david-akintola-4800001b4/" target="_blank">linkedin.com/in/david-akintola</a></li>
        <li>GitHub: <a href="https://github.com/DavidAkin18" target="_blank">github.com/DavidAkin18</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      
    };
  },
  methods: {
    
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.contact-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

h1 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
}

p {
  color: #666;
  font-size: 1rem;
  margin-bottom: 40px;
}

.contact-info {
  margin-top: 40px;
}

.contact-info h2 {
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.contact-info ul {
  list-style-type: none;
  padding: 0;
}

.contact-info ul li {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #333;
}

.contact-info ul li a {
  color: #0a74da;
  text-decoration: none;
}

.contact-info ul li a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact-container {
    padding: 15px;
  }

  h1 {
    font-size: 1.75rem;
  }

  .contact-info h2 {
    font-size: 1.3rem;
  }

  .contact-info ul li {
    font-size: 1rem;
  }
}
</style>