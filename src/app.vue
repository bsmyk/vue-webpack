<template>

	<a v-link="{ path: '/test' }">Go to test component</a>

  <!-- main view -->
  <router-view
    class="view"
    keep-alive
    transition
    transition-mode="out-in">
  </router-view>

</template>

<script>

  export default {
    
    data() {
      return {
        text: 'vue'
      }
    }
    
  }
</script>
<style src="./main.scss" lang="sass"></style>
