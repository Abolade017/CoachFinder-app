<template>
    <header>
        <nav
      class="bg-blue-900 flex justify-between items-center text-center h-20 rounded-sm px-20"
    >
      <button>
        <router-link to="/coaches" class=" text-white text-center font-bold text-md px-auto" 
          >Find a Coach</router-link>
      </button>
      <div class="flex">
        <div class=" mx-10 px-4 py-2 border-transparent border">
          <router-link to="/coaches" class="text-pink-300 font-semibold text-sm "
            >All Coaches</router-link
          >
        </div>
        <div class="px-4 py-2 active: border-pink-300 border-transparent" v-if="isLoggedIn">
          <router-link to="/requests" class="text-md text-pink-300 font-bold">Request</router-link>
        </div>
        <div class="px-4 py-2 active: border-pink-300 border-transparent" v-else>
           <router-link to="/auth" class="text-md text-pink-300 font-bold">Login</router-link>
        </div>
        <div>
          <base-button v-if="isLoggedIn" @click="logout">Logout</base-button>
        </div>
      </div>
    </nav>
    </header>
</template>

<script>
export default {
    computed: {
    isLoggedIn(){
      return this.$store.getters.isAuthenticated;
    }
    } ,
    methods: {
      logout(){
       this.$store.dispatch('logout');
       this.$router.replace('/coaches');
      }
    }
};
</script>