<template>
  <div class="skills-content">
    <h1 class="header">Core Skills...</h1>
    <div class="skill-items-container">
      <div class="skill-items" v-if="skills.length">
        <div v-for="(item, index) in skills" :key="index" class="item">
          <img :src="item.img" :alt="item.title" class="item-image" />
          <div class="item-text">
            <h3>{{ item.title }}</h3>
            <ul>
              <li v-for="skill in item.skillType" :key="skill">- {{ skill }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

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
import img1 from '@/assets/skills/HtmlCss.jpeg'
import img2 from '@/assets/skills/JS.png'
import img3 from '@/assets/skills/framework.png'
import img4 from '@/assets/skills/vueX.png'
import img5 from '@/assets/skills/versionControl.png'
import img6 from '@/assets/skills/PackageManagers.png'
import img7 from '@/assets/skills/BuildTools.png'
import img8 from '@/assets/skills/testing.jpg'
import img9 from '@/assets/skills/api.webp'
import img10 from '@/assets/skills/figma.webp'
import img11 from '@/assets/skills/Performance.png'
import img12 from '@/assets/skills/Accessibility.jpg'

import image1 from '../assets/facebook.jpeg'
import instagram from '../assets/instagram.avif'
import linkedin from '../assets/linkedin.avif'
import x from '../assets/x.jpg'
import whatsapp from '../assets/whatsapp.jpeg'
export default {
data(){
    return{
        skills:[
            {
                img:img1, 
                title:'HTML/CSS:', 
                skillType:["Semantic HTML5", "Responsive Design", "W3.CSS",'Bootstrap v5.3' ]
            },
            {
                img:img2,
                title:'JavaScript:',
                skillType:['ES6+ Features (Arrow Functions, Promises, Async/Await, etc.)', 'DOM Manipulation', 'Event Handling']
            },
            {
                img:img3,
                title:'Frameworks and Libraries',
                skillType:['Vue.js, React.js']
            },
            {
                img:img4,
                title:'State Management',
                skillType:['Vuex (for Vue.js)']
            },
            {
                img:img5,
                title:'Version Control:',
                skillType:['Git', 'GitHub']
            },
            {
                img:img6,
                title:'Package Managers',
                skillType:['npm', 'Yarn']
            },
            {
                img:img7,
                title:'Build Tools',
                skillType:['Webpack', 'Babel', 'Parcel' ]
            },
            {
                img:img8,
                title:'Testing:',
                skillType:['Unit Testing (Jest, Mocha)', 'End-to-End Testing (Cypress, Selenium)']
            },
            {
                img:img9,
                title:'API Integration:',
                skillType:['Axios', 'Fetch API', 'GraphQL', 'RESTful APIs']
            },
            {
                img:img10,
                title:'UI/UX Design:',
                skillType:['Figma, Sketch, Adobe XD', 'Wireframing, Prototyping']
            },
            {
                img:img11,
                title:'Performance Optimization',
                skillType:['Code Splitting', 'Lazy Loading','Caching']
            },
            {
                img:img12,
                title:'Accessibility (a11y)',
                skillType:['ARIA roles and attributes', 'Keyboard Navigation']
            }
        ],
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

<style>
.skills-content {
  padding: 60px 5%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.header {
  color: #0056b3;
  margin-bottom: 20px;
  font-size: 2rem;
}

.skill-items-container {
  background: #f3f4f6;
  box-shadow: 0 2px 5px rgba(107, 114, 128, 0.2);
}

.skill-items {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item {
  position: relative; 
  background-color: #ffffff; 
  padding: 10px;
  border-radius: 8px; 
  box-shadow: 0 2px 5px rgba(107, 114, 128, 0.2);
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.item:last-child {
  border-bottom: none;
}

.item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.item-text {
  flex: 1;
}

.item-text h3 {
  color: #0056b3;
  margin-bottom: 5px;
  font-size: 1.2rem;
}

.item-text ul {
  padding-left: 0;
  list-style: none;
}

.item-text ul li {
  color: #0056b3;
  line-height: 1.5;
}

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
@media (min-width: 540px) {
  .item {
    gap: 30px;
  }

  .item-image {
    width: 150px;
    height: 150px;
  }

  .item-text h3 {
    margin-bottom: 10px;
  }

  .item-text ul li {
    font-size: 20px;
  }
}

@media (min-width: 1024px) {
   
  .skill-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
   
  }

  .item-image {
    width: 150px;
    height: 150px;
  }

  .item-text ul li {
    font-size: 18px;
  }
}

@media (min-width: 1280px) {
  .skill-items {
    grid-template-columns: repeat(3, 1fr);
   
  }

  .skill-items-container {
    box-shadow: none;
  }
}
</style>