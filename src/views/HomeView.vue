<template>
  <div class="home">
    <NavigationNav />
    <ViewStart />
  </div>
</template>

<script>
import NavigationNav from '@/components/NavigationNav.vue'

import ViewStart from '@/components/ViewStart.vue'

export default {
  name: 'HomeView',
  components: {
    NavigationNav,
    ViewStart
  }
}
</script>
<style scoped>
body{
  background: #1e3a8a;
}
</style>
