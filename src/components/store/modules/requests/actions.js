export default {
  async contactCoach(context, payload) {
    const newRequest = {
     // id: new Date().toISOString(),
      coachId: payload.id,
      userEmail: payload.email,
      message: payload.message,
    };
   
    const response = await fetch(
      `https://coach-finderapp-default-rtdb.firebaseio.com/requests/${payload.id}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    // fetch("url")
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   });
    
    // console.log("hello");

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to send Request");
      throw error;
    }
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit("addRequest", newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://coach-finderapp-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=` + token
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to fetch requests"
      );
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }
    context.commit("setRequests", requests);
  },
};
