<template>
<div class="body-content">
    <div class="body-text"> 
        <h1>PROJECTS</h1>
        <p>
            View our work for clients past and present. Feel immersed in a 
            re-imaged digital landscape, brings clint ideas into reality.
        </p>
    </div>
    <div class="home-footer">
        <h2>David Akintola </h2>
        <div class="container">
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
*{
    width: 100%;
    height: 100%;
}
.body-content{
  position: relative;
  height: 100%;
  padding: 150px 0;
  padding-bottom: 20px;
}
.body-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url('../assets/vue-image-back-100729677-large.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  filter: blur(4px);
  z-index: -1;
}

.body-text{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    text-align: left;
    width: 90%;
    margin: 20px auto;
}
h1{
    color: #f9fafb;
    font-family:Verdana, Geneva, Tahoma, sans-serif ;
    font-size: 2rem;
}
p{
    color:  #f9fafb;
    font-size: 20px;
    text-align: left;
    line-height: 30px;
    font-family: Verdana, Geneva, Tahoma, sans-serif ;
}
.home-footer{
    width: 98%;
    display: flex;
    margin: 0 auto;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    gap: 5px;
    height: 100px;
    position: fixed;
    bottom: 0;
}
.home-footer h2{
    color: #f9fafb;
    flex-grow: 1;
    font-size: 1.4rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif ;
}
.container{
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

@media (min-width: 767px){
    .body-content{
        padding-top: 200px;
    }
    .body-text{
        width: 85%;
    }
    p{
        width: 80%;
    }
    .home-footer{
        gap: 10px;
    }
    .home-footer h2{
        font-size: 2.5rem;
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
    @media (min-width: 1024px){
        p{
            width: 60%;
        }
    }
    @media (min-width: 1280px){
        h1{
            font-size: 2.5rem;
        }
        p{
            font-size: 25px;
        }
        .container{
            justify-content: space-evenly;
            width: 30%;
            gap: 3px;
        }
    }
}
</style>