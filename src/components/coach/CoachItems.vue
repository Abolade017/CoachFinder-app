<template>
  <li>
    <div class=" border border-blue-900 rounded-md my-8">
    <h2 class="font-bold px-2">{{ fullName}}</h2>
    <h4 class="px-2 font-semibold">{{ rate }}/hour</h4>
    <div >
      <base-badge  v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    </div>
    <div class="flex justify-end pb-4 px-2">
      <base-button class="" mode="outline" link :to="coachContactLink" >Contact</base-button>
      <base-button class="" link :to="coachViewDetailLink">View Details</base-button>
    </div>
    </div>
  </li>
  
</template>
<script>
export default {
  props:['id','firstName','lastName','rate', 'areas'],
  computed:{
    fullName(){
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink(){
      return this.$route.path + '/' + this.id + '/contact';
    },
    coachViewDetailLink(){
      return this.$route.path + '/' + this.id;
    }
  }
}
</script>