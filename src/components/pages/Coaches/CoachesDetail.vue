<template>
  <div>
    <!-- <h2>DETAILS FOR COACH</h2> -->
    <!-- <router-link to="/contact"> CONTACT</router-link> -->
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}</h3>
      </base-card>
    </section>
    <section>
      <header>
        <base-card>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">contact</base-button>
        </base-card>
      </header>
      <router-view></router-view>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstname + " " + this.selectedCoach.lastname;
    },
    areas(){
      return this.selectedCoach.area;
    },
    rate(){
      return this.selectedCoach.hourlyRate;
    },
    description(){
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    }
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      coach => coach.id === this.id
    );
  }
};
</script>