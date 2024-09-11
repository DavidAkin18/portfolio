<template>
  <div class="skills-content">
    <h1 class="header">Core Skills...</h1>
    <div class="skill-items-container">
        <div class="skill-items" v-if="skills.length">
            <div v-for="(item , index) in skills" :key="index" class="items"> 
                <img :src="item.img" :alt="item.title">
                <div class="item-text">
                    <h3>{{ item.title }}</h3>
                    <ul >
                        <li v-for="skill in item.skillType" :key='skill'>
                           - {{skill }}
                        </li>
                    </ul>
                </div>
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
                skillType:['Vue.js']
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
        ]
    }
}
}
</script>

<style>
.skills-content{
    padding-top: 60px;
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family:Verdana, Geneva, Tahoma, sans-serif ;
}
.skill-items-container{
    box-shadow: 0px 2px 5px #6b7280;
    background: #f3f4f6;
    margin: 10px 0;
}
.skill-items{
    padding: 5px;
}
.items{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    gap: 20px;
    margin-bottom: 20px;
    padding: 5px;
    box-shadow: 0px 2px 5px #0056b3;
}
.item-text h3{
    color: #0056b3;
    margin-bottom: 5px;
}
.item-text ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
}
.item-text ul li{
    list-style-type:none;
    color: #0056b3;
    line-height: 20px;
}
.header{
    color: #0056b3;
}

img{
    width: 100px;
    height: 100px;
}
@media (min-width:540px){
    .items{
        gap: 30px;
    }
    .skill-items{
        padding: 10px;
    }
    .item-text h3{
        margin-bottom: 10px;
    }
    img{
        width: 150px;
        height: 150px;
    }
    .item-text ul li{
        font-size: 20px;
    }
    @media (min-width:1024px){
        img{
            width: 150px;
            height: 150px;
        }
        .items{
            max-width: 500px;
        }
        .skill-items{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            box-shadow: 0px 2px 5px #6b7280;
            background: #f3f4f6;
            width: 100%;
            gap: 10px;
        }
        .item-text ul li{
            font-size: 18px;
        }
    }
    @media (min-width:1280px){
       
        .skill-items-container{
            box-shadow: none;
        }
        .skill-items{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            box-shadow: 0px 2px 5px #6b7280;
            background: #f3f4f6;
            width: 100%;
            gap: 10px;
        }
    }
}
</style>