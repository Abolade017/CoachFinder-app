export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstname: data.first,
      lastname: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      area: data.area,
    };
   const token = context.rootGetters.token;
    //firebase code
    const response = await fetch(
      `https://coach-finderapp-default-rtdb.firebaseio.com/coaches/${userId}.json?auth=` + token,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );
    //const responseData = await response.json();
    if (!response.ok) {
      //error
    }
    context.commit("registerCoach", {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://coach-finderapp-default-rtdb.firebaseio.com/coaches.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error= new Error(responseData.message || 'Failed to fetch');
      throw error;
    }
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstname: responseData[key].firstname,
        lastname: responseData[key].lastname,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        area: responseData[key].area,
      };
      coaches.push(coach);
      
    }
    context.commit("setCoaches", coaches);
    context.commit('setFetchTimestamp');
  },
};
