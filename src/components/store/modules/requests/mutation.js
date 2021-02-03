export default{
    addRequest(state, payload){
        return state.requests.push(payload);

    },
     setRequests(state, payload){
        state.requests = payload;
    }


};