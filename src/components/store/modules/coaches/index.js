import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
namespaced: true,
state(){
    return{
        userIsCoach: false,
        lastFetch:null,
        coaches: [
            {
                id:'c1',
                firstname:'Maxmillan',
                lastname:'Schwarzmuller',
                area:['frontend', 'backend', 'career'],
                description:"i am maxmilian, and i work as a freelance web developer for years",
                hourlyRate:30
            },
            {
                id:'c2',
                firstname:'Julie',
                lastname:'Jones',
                area:['frontend', 'career'],
                description:"i am julie, and a developer in a big tech company, i can help you",
                hourlyRate: 30
               
            },
        ]
    };
},
mutations,
actions,
getters,
};