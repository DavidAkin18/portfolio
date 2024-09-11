<template>
 <div class="container">
    <h1>About us...</h1>
    <div>
        <div class="paragraphs-image-content">
            <div class="img-area"></div>
            <div class="paragraphs">
                <p>
                    Hello! I'm David Akintola, a passionate front-end developer with a knack for crafting beautiful and functional web experiences.
                </p>
                <p>
                    With over one years of experience in the industry, I've had the privilege of working on a variety of projects, 
                    from small business websites to large-scale applications. I've collaborated with clients in diverse industries, 
                    including e-commerce, healthcare, and education.
                </p>
                <p>
                    My expertise lies in HTML, CSS, and JavaScript, along with modern frameworks and libraries such as Vue.js, BootStrap and Tailwindcss, 
                    and VueX. I'm also skilled in responsive design, ensuring that websites look great on all devices, 
                    and have experience with CSS pre-processors like SASS and LESS. 
                    Additionally, I'm familiar with version control systems like Git.
                </p>
                <p>
                    I believe in creating user-centric, performant, and maintainable code. 
                    My approach to front-end development is rooted in a deep understanding of user experience principles. 
                    I strive to build interfaces that are not only visually appealing but also intuitive and easily accessible. 
                    Performance is a key consideration in all my projects, as I aim to deliver fast and efficient web 
                    experiences.
                </p>
            
            </div>
        </div>
        <div class="second-paragraphs-image-content">
            <div class="img-are"></div>
            <div class="second-paragraph">
                <p>
                    I'm passionate about staying up-to-date with the latest trends and technologies in the ever-evolving 
                    world of web development. I'm an fast learner, constantly seeking out new challenges and 
                    opportunities to grow my skills. Whether it's through online courses, attending conferences, 
                    or contributing to open-source projects, I'm always eager to expand my knowledge and expertise.
                </p>
                <p>
                    When I'm not coding, you can find me reading books, taking strolls, cooking, watching and playing soccer. 
                    I believe that a well-rounded life enriches my creativity and problem-solving skills, 
                    which I bring into my work as a front-end developer.
                </p>
                <p>
                    I'm always excited to take on new projects and collaborate with like-minded professionals. 
                    If you're looking for a dedicated and skilled front-end developer to bring your vision to life, 
                    feel free to reach out. Let's create something amazing together!
                </p>
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
import image1 from '../assets/facebook.jpeg'
import instagram from '../assets/instagram.avif'
import linkedin from '../assets/linkedin.avif'
import x from '../assets/x.jpg'

export default {
    data(){
    return{
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
.container{
    margin: 0 auto;
    background-color: #ffffff;
    padding: 20px;
    padding-top: 75px;
}

h1{
    color: #0056b3;
    font-size: 2rem;
    text-align: left;
    font-family:Verdana, Geneva, Tahoma, sans-serif ;
    margin-bottom: 20px;
}
.second-paragraphs-image-content{
    margin-top: 25px;
}
.paragraphs, .second-paragraph{
    color: #0056b3;
    display: flex;
    line-height: 25px;
    font-size: 18px;
    flex-direction: column;
    gap: 20px;
    font-family:Verdana, Geneva, Tahoma, sans-serif ;
    width: 100%;
}
.paragraphs p, .second-paragraph p{
    text-align: center;
}
.img-area{
    background-image: url('../assets/aboutSecond.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:top;
    flex-grow: 1;
    height: 250px;
    min-width:250px;
    border: 3px solid #007BFF;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 20px;
}

.home-footer{
    width: 98%;
    display: flex;
    margin: 20px auto;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    gap: 5px;
    border: red;
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
@media (min-width: 768px){
    .img-area{
        height: 450px;
        min-width:250px;
    }
     .paragraphs p, .second-paragraph p{
        text-align: left;
     }
}
@media (min-width: 1024px){
    .paragraphs-image-content{
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    } 
    .second-paragraphs-image-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-top: 30px;
    }
    .img-are{
        background-image: url('../assets/aboutimg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position:top;
        flex-grow: 1;
        height: 450px;
        min-width:450px;
        border: 3px solid #007BFF;
        padding: 5px;
        margin-bottom: 20px;
        border-radius: 10px;
    }
    .img-area{
        height: 450px;
        min-width:450px;
    }
}
</style>