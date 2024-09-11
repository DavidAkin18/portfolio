<template>
    <div class="portfolio">
        <Navigation />
        <ProjectBody />
    </div>
</template>

<script>
import Navigation from '@/components/NavigationNav.vue';
import ProjectBody from '@/components/ProjectBody.vue'



export default {
components:{Navigation, ProjectBody},

}
</script>

<style scoped>
.portfolio{
  background: #ffffff;
}
</style>