<template>
  <div>
    <section>
      <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="saveData"></coach-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachForm from "../../coach/CoachForms.vue";
export default {
  components: {
    CoachForm
  },
  computed:{
   
  },
  methods: {
    saveData(data) {
      console.log(data);
      
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace("/coaches");
    }
  }
};
</script>
