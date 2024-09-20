<template>
  <div class="navigation">
    <nav class="nav">
      <div class="logo">
        <router-link to="/">A.D-Dev</router-link>
      </div>
      <div class="nav-list" :class="dynamicClass" ref="menu">
        <ul class="lists" id="items">
          <li class="list-item" v-for="(list, index) in lists" :key="index">
            <router-link :to="list.href" :class="{ active: isActive(list.href) }">
              {{ list.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="nav-bar" @click="toggleBar" ref="navBar">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { name: 'Home', href: '/' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'About', href: '/about' },
        { name: 'Skills', href: '/skills' },
        { name: 'CV', href: '/curriculumVitae' },
        { name: 'Contacts', href: '/contact' }
      ],
      isToggle: false
    };
  },
  computed: {
    dynamicClass() {
      return {
        'nav-list-active': this.isToggle,
        'nav-list-inactive': !this.isToggle
      };
    }
  },
  methods: {
    toggleBar() {
      this.isToggle = !this.isToggle;
    },
    isActive(path) {
      return this.$route.path === path;
    },
    handleClickOutside(event) {
      const menu = this.$refs.menu;
      if (menu && !menu.contains(event.target) && !this.$refs.navBar.contains(event.target)) {
        this.isToggle = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }

}
</script>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  width: 100%;
  font-family: Arial, sans-serif;
  z-index: 999;
  background: #0056b3;
  color: #fff;
}

hr {
  border: none;
  border-top: 1px solid #007bff;
  margin: 0;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
}

.logo {
  background: #007bff;
  color: #fff;
  padding: 5px 15px;
  border-radius: 8px;
}

.logo a {
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;
}

.nav-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1000;
}

.bar {
  display: block;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: background 0.3s, transform 0.3s;
}

.nav-list-inactive {
  display: none;
}

.nav-list-active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  color: #0056b3;
  padding: 1rem;
  border: 1px solid #007bff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 250px;
  z-index: 1000;
}

.lists {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item a {
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: #0056b3;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background 0.3s, color 0.3s;
}

.list-item a:hover,
.list-item a.active {
  background: #003d7a;
  color: #fff;
}

@media (min-width: 768px) {
  .nav-bar {
    display: none;
  }
  .nav-list-active {
    display: flex;
    flex-direction: row;
    position: static;
    background: none;
    padding: 0;
    color: #fff;
    border: none;
    box-shadow: none;
    width: auto;
  }
  .nav-list-inactive {
    display: block;
  }
  .lists {
    display: flex;
    gap: 1rem;
  }
  .list-item a {
    padding: 0.5rem 1rem;
    background: none;
    color: #fff;
  }
  .list-item a:hover,
  .list-item a.active {
    background: none;
    color: #007bff;
  }
  /* 

  

 

 

   */
}
</style>