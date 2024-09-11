<template>
  <div class="contact-container">
        <h1>Contact Me</h1>
        <p>If you have any questions or want to work together, feel free to reach out!</p>
        
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="form.name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="form.email" required>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="form.message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
        
        <div class="contact-info">
            <h2>Connect with Me</h2>
            <ul>
                <li>Email: <a href="mailto:your.akindayodavid22@gmail.com">akindayodavid22@gmail.com</a></li>
                <li>Phone: +(234) 703 576 458</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/david-akintola-4800001b4/" target="_blank">linkedin.com/in/david-akintola</a></li>
                <li>GitHub: <a href="https://https://github.com/DavidAkin18" target="_blank">github.com/DavidAkin18</a></li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission, e.g., send form data to an API
      alert('Message sent!');
      // Clear the form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    
}

.contact-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

p {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input, textarea {
  width: 95%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  border: none;
  background: #0a74da;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #064d99;
}

.contact-info {
  margin-top: 40px;
}

.contact-info h2 {
  margin-bottom: 20px;
  color: #333;
}

.contact-info ul {
  list-style-type: none;
  padding: 0;
}

.contact-info ul li {
  margin-bottom: 10px;
}

.contact-info ul li a {
  color: #0a74da;
  text-decoration: none;
}

.contact-info ul li a:hover {
  text-decoration: underline;
}
</style>