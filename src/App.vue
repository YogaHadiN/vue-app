<template>
  <HeaderSection />
  <BodySection />
  <div>
       <router-view></router-view>
  </div>
  <FooterSection />
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'
import BodySection from './components/BodySection.vue'
  export default{
    name: 'App',
    components: {
        HeaderSection,
        FooterSection,
        BodySection,
    }
  }
</script>

<style scoped>

</style>
