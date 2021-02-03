<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilter"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="control flex justify-between mb-4">
          <div class="">
            <base-button mode="outline" @click="loadCoaches(true)" class="">
              Refresh
            </base-button>
          </div>

          <base-button link to="/auth?redirect=register" v-if="!isLoggedIn"
            >Login to Register as a Coach</base-button
          >

          <base-button
            to="/register"
            v-if="isLoggedIn && !isCoach && !isLoading"
            class="px-4"
            link
            >Register as a Coach</base-button
          >
          <!-- <router-link to="/coaches/id">Coach List</router-link> -->
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
          <!--<li v-for="coach in filterCoaches" :key="coach.id">
         {{ coach.firstname }}
        </li> -->
          <coach-item
            v-for="coach in filterCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstname"
            :last-name="coach.lastname"
            :rate="coach.hourlyRate"
            :areas="coach.area"
          ></coach-item>
        </ul>
        <h3 v-else>No coaches avilable!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from "../../coach/CoachItems.vue";
import CoachFilter from "../../coach/CoachFilter.vue";
export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
    filterCoaches() {
      const coaches = this.$store.getters["coaches/coaches"]; //the first name is the namespaced's name and the second is the getters's name
      //console.log(coaches[0].area.includes("frontend"));
      console.log(coaches);
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.area.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.area.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.area.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters["coaches/hasCoaches"];
    }
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilter(filterUpdated) {
      this.activeFilters = filterUpdated;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/loadCoaches", {
          forceRefresh: refresh
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
</style>