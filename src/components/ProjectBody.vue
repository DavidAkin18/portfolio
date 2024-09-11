<template>
  <div class="portfolio">
        <div class="header">
            <h1>Portfolio</h1>
            <p>The solution and work done</p>
        </div>
        <div class="frame-holder">
            <div class="frame-row" v-for="(project, index) in projects" :key="index">
                <div class="frame">
                    <img class="project-img" :src="project.img" :alt="project.title">
                    <hr>
                    <div class="img-description">
                        <h2 class="img-title">{{ project.title }}</h2>
                        <p class="img-describe">{{ project.description }}</p>
                        <div class="links">
                            <p>Check out in >></p>
                            <div class="link-avi">
                                <a :href="project.github" target="_blank" >
                                    <img class="git" src="../assets/github.webp" alt="github">
                                </a>
                                <a :href="project.link" target="_blank" >
                                    <img class="git" src="../assets/link.png" alt="link to page">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-footer">
            <h2>David Akintola </h2>
            <div class="contain">
                <div v-for="(image, index) in images" :key="index" class="image-container">
                    <img :src="image.src" :alt="image.alt">
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


// this is for the footer links
import image1 from '../assets/facebook.jpeg'
import instagram from '../assets/instagram.avif'
import linkedin from '../assets/linkedin.avif'
import x from '../assets/x.jpg'
export default {
    data(){
    return{
        projects:[
            {img:Ecommerce , title:'Shopping-E-commerce' , description:'A shopping website, using API generated images to display a shopping website', github:'https://github.com/DavidAkin18/shop.co-ecommerce',  link:'https://shop-co-ecommerce-wqwp.vercel.app/'},
            {img:multi , title:'Multi-Step-Form' , description:'Using form attribute including, text, radio, submit and checkbox.', github:'https://github.com/DavidAkin18/multi-step-form', link:'https://multi-step-form-livid-psi.vercel.app/'},
            {img:age , title:'Age Calculator' , description:'The calculation of age using html, css, and javascript.' , github:'https://github.com/DavidAkin18/age-calculator', link:'https://age-calculator-giw4.vercel.app/'},
            {img:calculator , title:'Calculator' , description:'Mathematical calculation and  javascript logics. It is a  simple web-Calculator.',github:'https://github.com/DavidAkin18/Calculator', link:'https://calculator-as1q.vercel.app/' },
            {img:tic , title:'Tic-Tac-Toe' , description:'This is a Javascript tic-tac-tor game.', github:'https://github.com/DavidAkin18/tic-tac-toe' , link:'https://tic-tac-toe-three-henna.vercel.app/' },
            {img:eCart , title:'E-commerce-Cart' , description:'This shows a E-commerce cart, adding item to the cart', github:'https://github.com/DavidAkin18/ecommerce-cart', link:'https://ecommerce-cart-75cb.vercel.app/' },
            {img:rock , title:'Rock-Paper-Scissor' , description:'This is a Rock-paper-scissors made with Javascript, HTML CSS.', github:'https://github.com/DavidAkin18/rock-paper-scissors', link:'rock-paper-scissors-v35j.vercel.app' }
        ],
        images:[
            {src:image1, alt: 'facebook' },
            {src:instagram, alt: 'instagram' },
            {src:linkedin, alt: 'linkedin' },
            {src: x, alt: 'X' }
        ]
    }
}
}
</script>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    font-family:Verdana, Geneva, Tahoma, sans-serif ;
}
.header h1{
    color: #0056b3;
    
} 
.header p{
    line-height: 35px;
    font-size: 18px;
    color: #0056b3;
}

.portfolio{
    padding-top: 70px;
    width: 95%;
    margin: 0 auto;
}

.frame-row{
    width: 100%;
    box-shadow: 0px 2px 5px #6b7280;
    background: #f3f4f6;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
}
.frame{
    min-height: 360px;
    position: relative;
}
hr{
    border-color: #0056b3;
}
.project-img{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.img-description{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding:2px 10px;
    position: absolute;
    bottom: 0;
}
.img-description h2{
    color: #0056b3;
}
.img-description .img-describe{
    font-size: 18px;
    color: #0056b3;
}
.links{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.link-avi{
    text-align: right;
}
.git{
    height: 40px;
    width: 40px;
    padding: 2px;
    margin: 5px;
    border-radius: 100%;
    cursor: pointer;
    border: 3px solid #0056b3;
}
.links p{
    color: #0056b3;
    font-weight: 600;
    font-size: 18px;
}



.home-footer{
    width: 98%;
    display: flex;
    margin: 20px auto;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    gap: 5px;
    height: 100px;
}
.home-footer h2{
    color: #0056b3;
    flex-grow: 1;
    font-size: 1.4rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif ;
}
.contain{
    display: flex;
    justify-content: space-between;
    gap: 5px;
}
.image-container img{
    height: 30px;
    width: 30px;
    display: inline-block;
    border-radius: 100%;
    padding: 2px;
    background: #ffffff;
    border: 1px solid #007BFF ;
    cursor: pointer;
}
.image-container img:hover{
    background: #007BFF;
}
@media(min-width:420px){
    .frame{
        height: 450px;
    }
    .frame-row{
        margin: 40px 0;
    }
}
@media(min-width:768px){
    .frame{
        height: 520px;
    }
    .home-footer{
        gap: 10px;
    }
    .home-footer h2{
        font-size: 2.5rem;
    }
    .project-img{
        height: 350px;
        padding: 0;
        margin: 0;
    }
    .image-container img{
        height: 45px;
        width: 45px;
    }
    .container{
        justify-content: space-evenly;
        width: 50%;
        gap: 3px;
    }
}
@media(min-width:1024px){
    .frame-holder{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        gap: 10px;
        
    }
    .frame-row{
        margin-bottom: 20px;
        margin-top: 0;
    }
    .project-img{
        height: initial;
    }
    .img-description{
        position: static;
        gap: 8px;
    }
     .frame{
        height: 350px;
     }
     .header{
        margin-bottom: 20px;
        line-height: 55px;
     }
     .header h1{
        font-size: 3rem;
     }
     .contain{
            justify-content: space-evenly;
            width: 30%;
            gap: 3px;
        }


     
}
</style>