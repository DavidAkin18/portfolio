<template>
 <div class="container">
    <h1>About Us...</h1>

    <!-- First Section with Image and Paragraphs -->
    <div class="content-section">
      <div class="img-area"></div>
      <div class="paragraphs">
        <p>
          Hello! I'm David Akintola, a passionate front-end developer with a knack for crafting beautiful and functional web experiences.
        </p>
        <p>
          With over one year of experience in the industry, I've had the privilege of working on a variety of projects, from small business websites to large-scale applications. I've collaborated with clients in diverse industries, including e-commerce, healthcare, and education.
        </p>
        <p>
          My expertise lies in HTML, CSS, and JavaScript, along with modern frameworks and libraries such as Vue.js, BootStrap, TailwindCSS, and VueX. I'm also skilled in responsive design, ensuring that websites look great on all devices, and have experience with CSS pre-processors like SASS and LESS. Additionally, I'm familiar with version control systems like Git.
        </p>
        <p>
          I believe in creating user-centric, performant, and maintainable code. My approach to front-end development is rooted in a deep understanding of user experience principles. I strive to build interfaces that are not only visually appealing but also intuitive and easily accessible. Performance is a key consideration in all my projects, as I aim to deliver fast and efficient web experiences.
        </p>
      </div>
    </div>

    <!-- Second Section with Image and Paragraphs -->
    <div class="content-section1">
      <div class="img-are"></div>
      <div class="paragraphs">
        <p>
          I'm passionate about staying up-to-date with the latest trends and technologies in the ever-evolving world of web development. I'm a fast learner, constantly seeking out new challenges and opportunities to grow my skills.
        </p>
        <p>
          When I'm not coding, you can find me reading books, taking strolls, cooking, or playing soccer. I believe that a well-rounded life enriches my creativity and problem-solving skills, which I bring into my work as a front-end developer.
        </p>
        <p>
          I'm always excited to take on new projects and collaborate with like-minded professionals. If you're looking for a dedicated and skilled front-end developer to bring your vision to life, feel free to reach out. Let's create something amazing together!
        </p>
      </div>
    </div>

    <!-- Footer Section -->
    <div class="home-footer">
      <h2>David Akintola</h2>
      <div class="social-icons">
        <div v-for="(image, index) in images" :key="index" class="icon-container">
            <a :href="image.link" target="blank">
                <img :src="image.src" :alt="image.alt" />
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from '../assets/facebook.jpeg'
import instagram from '../assets/instagram.avif'
import linkedin from '../assets/linkedin.avif'
import x from '../assets/x.jpg'
import whatsapp from '../assets/whatsapp.jpeg'

export default {
    data(){
    return{
        images:[
            {src:image1, alt: 'facebook', link:'https://web.facebook.com/akintola.david.524'},
            {src:instagram, alt: 'instagram', link:'https://www.instagram.com/it_dayoakin/' },
            {src:linkedin, alt: 'linkedin', link:'https://www.linkedin.com/in/david-akintola-4800001b4/' },
            {src: x, alt: 'X', link:'https://x.com/Davidakindosu' },
            {src:whatsapp, alt:'whatsapp', link:'https://wa.me/qr/R7XJHRWA4GRYC1'}
        ]
    }
}
}
</script>

<style scoped> 
/* Global Container */
.container {
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  padding-top: 75px;
  background-color: #ffffff;
}

/* Heading Styles */
h1 {
  color: #111;
  font-size: 2rem;
  text-align: left;
  margin-bottom: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* Content Section for Paragraphs and Images */
.content-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
}
.content-section1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
}

/* Image Area Styles */
.img-area,
.img-are {
  width: 100%;
  max-width: 450px;
  height: 250px;
  background-size: cover;
  background-position: top;
  border: 3px solid #007bff;
  border-radius: 10px;
  margin-bottom: 20px;
}
.img-are {
  background-image: url('../assets/aboutSecond.jpg');
}
.img-area {
  background-image: url('../assets/aboutimg.jpg');
}

/* Paragraphs Style */
.paragraphs {
  color: #333;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  width: 100%;
  max-width: 700px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Footer Section */
.home-footer {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home-footer h2 {
  color: #333;
  font-size: 1.4rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* Social Media Icons */
.social-icons {
  display: flex;
  gap: 10px;
}

.icon-container img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #007bff;
  padding: 2px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.icon-container img:hover {
  background: #007bff;
}

/* Media Queries */
@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .paragraphs {
    text-align: left;
  }

  .img-area,
  .img-are {
    height: 450px;
  }
}

@media (min-width: 1024px) {
  .content-section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .content-section1 {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
}
}
</style>