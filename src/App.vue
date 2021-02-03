<template>
<div>
  <TheHeader/>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
    </router-view>  
</div>
</template>

<script>
import TheHeader from './components/Header.vue';
export default {
  components:{
    TheHeader
  },
  computed:{
    didAutoLogout(){
    return this.$store.getters.didAutoLogout;
    }
  },
  created(){
    this.$store.dispatch('tryLogin');
  },
  watch:{
    didAutoLogout(curValue, oldValue){
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    }
  }
  
};
</script>

<style scoped>
.route-enter-from{
opacity: 0;
transform: translateY(-30px);
}
.route-leave-from,
.route-enter-to{
  opacity: 1;
transform: translateY(0);
}
.route-enter-active{
transition: all 0.3s ease-out;
}
.route-leave-active{
transition: all 0.3s ease-in;
}

.route-leave-to{
opacity: 0;
transform: translateY(30px);
}
</style>