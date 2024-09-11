<template>
  <div class="navigation">
    <nav class="nav">
      <div class="logo"> <router-link>A.D-Dev</router-link></div>
      <div class="nav-list" >
        <ul class="lists" id="items"  :class="dynamicClass">
            <li class="list-item"  v-for="(list , index) in lists"  :key="index" >
              <router-link :to="list.href" :class="{ act: isActive(list.href) }" >
                {{ list.name }} 
              </router-link>
            </li>
        </ul>
      </div>
      <div class="nav-bar" @click="toggleBar">|||</div>
    </nav>
    <hr>
  </div>
</template>

<script>
export default {
data(){
  return{
    lists:[
      {name:'Home', href:'/'},
      {name:'Portfolio', href:'/portfolio'},
      {name:'About', href:'/about'},
      {name:'Skills', href:'/skills'},
      {name:'CV', href:'/curriculumVitae'},
      {name:'Contacts', href:'/contact'}
    ],
    isToggle:false,
    activeIndex:0
  }
},
computed:{
  dynamicClass(){
    return {
      active:this.isToggle,
      inactive:!this.isToggle
    }
  }
},
methods:{
  toggleBar(){
    this.isToggle = !this.isToggle
  },
  isActive(path){
    return this.$route.path === path;
  }
}
}
</script>

<style scoped>
.navigation{
  position: fixed;
  top: 0;
  width: 100%; 
  font-family: Arial, sans-serif;
  z-index: 999;
  background: #0056b3;
}

hr{
    display: block;
    border-color: #ffffff;
  }
.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding:  0.5rem;
}
.logo{
  background: #007BFF;
  color: #FFFFFF;
  padding: 5px;
  border-radius: 10px;
}

.logo a{
  text-decoration: none;
  font-size: 20px;
  font-weight: 800;
  color: #FFFFFF;
}
.nav-bar{
  transform: rotate(90deg);
  font-size: 25px;
  color: #ffffff;
  cursor: pointer;
}
.lists {
  position: absolute;
  top: 50px;
  z-index: 999;
  right: 0;
  border:1px solid  #007BFF;
  background: #ffffff;
  width: 50%;
  min-height: 100vh;
  list-style-type: none;
  padding: 10px 20px;
}

.list-item a{
  font-size: 20px;
  font-weight: 500;
  color: #1e3a8a;
  text-decoration: none;
}
.list-item a:hover{
  color: #1e3a8a;
}
.list-item .act a{
  color: #1e3a8a;
}
.list-item{
  position: relative;
  z-index: 1;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding:  10px 0;
}
.list-item .act {
  color: #1e3a8a;
}
.nav-list a {
  color: #1e3a8a;
}
.inactive{
  display: none;
}
.active{
  display: inline;
}
@media (min-width: 767px){
  .navigation{
    width: 100%;
  }
  .nav-list{
    width: 70%;
    height: 30px;
  }
  .lists{
    position: static;
    background: none;
    padding: 0;
    border: none;
    height: 10px;
  }
  .inactive{
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 30px;
    width: 100%;
  }
 .list-item a{
  color: #FFFFFF;
  background: none;
  font-weight: bold;
 }
  .nav-bar{
    display: none;
  }
  
  @media (min-width: 1024px){
    .nav-list{
      width: 65%;
    }
  }
  @media (min-width: 1440px){
    .nav-list{
      width: 40%;
    }
  }
}
</style>