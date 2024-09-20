<template>
    <div class="portfolio">
        <div class="header">
        <h3>Portfolio</h3>
        <p>Access the GitHub file as well as links to the apps...</p>
        </div>

        <div class="frame-holder">
        <div class="frame-row" v-for="(project, index) in projects" :key="index">
            <div class="frame">
            <div class="img-container">
                <img class="project-img" :src="project.img" :alt="project.title" />
            </div>
            <hr />
            <div class="img-description">
                <h2 class="img-title">{{ project.title }}</h2>
                <p class="img-describe">{{ project.description }}</p>
                <div class="links">
                <p>Check out on:</p>
                <div class="link-avi">
                    <a :href="project.github" target="_blank">
                    <img class="git" src="../assets/github.webp" alt="GitHub" />
                    </a>
                    <a :href="project.link" target="_blank">
                    <img class="git" src="../assets/link.png" alt="Live Link" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div class="home-footer">
        <h2>David Akintola</h2>
        <div class="contain">
            <div v-for="(image, index) in images" :key="index" class="image-container">
                <a :href="image.link" target="blank">
                    <img :src="image.src" :alt="image.alt" />
                </a>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
// This is for the project images
import Ecommerce from '../assets/project-img/project-1.png'
import multi from '../assets/project-img/project-2.png'
import age from '../assets/project-img/project-3.png'
import calculator from '../assets/project-img/project-4.png'
import tic from '../assets/project-img/project-5.png'
import eCart from '../assets/project-img/project-6.png'
import rock from '../assets/project-img/project-7.png'
import todo from '../assets/project-img/project-8.png'
import threadLuck from '../assets/project-img/project-9.png'


// this is for the footer links
import image1 from '../assets/facebook.jpeg'
import instagram from '../assets/instagram.avif'
import linkedin from '../assets/linkedin.avif'
import x from '../assets/x.jpg'
import whatsapp from '../assets/whatsapp.jpeg'

export default {
    data(){
    return{
        projects:[
            {img:Ecommerce , title:'Shopping-E-commerce' , description:'A shopping website, using API generated images to display a shopping website', github:'https://github.com/DavidAkin18/shop.co-ecommerce',  link:'https://shop-co-ecommerce.vercel.app/'},
            {img:todo , title:'To-do-list' , description:'using vue along tailwindCSS, vueX, and javascript to do list application, framework like dayJS, fontAwesome were implemented', github:'https://github.com/DavidAkin18/ToDo-list', link:'https://to-do-list-seven-bay.vercel.app/' },
            {img:threadLuck , title:'ThreadLuck' , description:'Fashion portfolio website built with Vue, TailwindCSS, and JavaScript for showcasing.', github:'https://github.com/DavidAkin18/threadluck', link:'https://threadluck.vercel.app/' },
            {img:multi , title:'Multi-Step-Form' , description:'Using form attribute including, text, radio, submit and checkbox.', github:'https://github.com/DavidAkin18/multi-step-form', link:'https://multi-step-form-livid-psi.vercel.app/'},
            {img:age , title:'Age Calculator' , description:'The calculation of age using html, css, and javascript.' , github:'https://github.com/DavidAkin18/age-calculator', link:'https://age-calculator-giw4.vercel.app/'},
            {img:calculator , title:'Calculator' , description:'Mathematical calculation and  javascript logics. It is a  simple web-Calculator.',github:'https://github.com/DavidAkin18/Calculator', link:'https://calculator-as1q.vercel.app/' },
            {img:tic , title:'Tic-Tac-Toe' , description:'This is a Javascript tic-tac-tor game.', github:'https://github.com/DavidAkin18/tic-tac-toe' , link:'https://tic-tac-toe-three-henna.vercel.app/' },
            {img:eCart , title:'E-commerce-Cart' , description:'This shows a E-commerce cart, adding item to the cart', github:'https://github.com/DavidAkin18/ecommerce-cart', link:'https://ecommerce-cart-75cb.vercel.app/' },
            {img:rock , title:'Rock-Paper-Scissor' , description:'This is a Rock-paper-scissors made with Javascript, HTML CSS.', github:'https://github.com/DavidAkin18/rock-paper-scissors', link:'https://rock-paper-scissors-v35j.vercel.app/' },
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

<style scoped>
/* Global Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* Header Section */
.header {
  text-align: center;
  padding-bottom: 20px;
}
.header h1 {
  color: #333;
}
.header p {
  line-height: 1.5;
  font-size: 18px;
  color: #333;
}

/* Main Portfolio Container */
.portfolio {
  padding-top: 70px;
  width: 95%;
  margin: 0 auto;
}

/* Frame Holder (for project cards) */
.frame-holder {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* Frame and Project Card Styling */
.frame-row {
  box-shadow: 0px 2px 5px #6b7280;
  background: #f3f4f6;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-container {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 200px;
}
.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Project Description Section */
.img-description {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}
.img-title {
  font-size: 22px;
  font-weight: bold;
}
.img-describe {
  font-size: 18px;
}
hr {
  width: 100%;
  border: 1px solid #0056b3;
}

/* Links Section */
.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.link-avi {
  display: flex;
  gap: 10px;
}
.git {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  border: 3px solid #0056b3;
  /* transition: background 0.3s ease; */
}
.git:hover {
  background: #0056b3;
}

/* Footer Section */
.home-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
.home-footer h2 {
  color: #333;
  font-size: 1.5rem;
}
.contain {
  display: flex;
  gap: 10px;
}
.image-container img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #007BFF;
  padding: 2px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.image-container img:hover {
  background: #007BFF;
}

/* Media Queries for Larger Screens */
@media (min-width: 768px) {
  .home-footer h2 {
    font-size: 2.5rem;
  }
  .contain {
    width: 30%;
    justify-content: space-evenly;
  }
}
</style>