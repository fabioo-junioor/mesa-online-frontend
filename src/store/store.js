import { createStore } from 'vuex';

const store = createStore({
    state: {
        alertConfig: {
            isAlert: false,
            message: '',
            type: ''
        },
        alertInfoUser: {
            isAlert: false,
            message: '',
            avatar: ''
        }
    },
    mutations: {
        setAlertConfig(state, data){
            state.alertConfig.isAlert = true;
            state.alertConfig.message = data.message;
            state.alertConfig.type = data.type;

            store.commit('removeAlertConfig');

        },
        setAlertInfoUser(state, data){
            state.alertInfoUser.isAlert = true;
            state.alertInfoUser.message = data.message;
            state.alertInfoUser.avatar = data.avatar;

            store.commit('removeAlertInfoUser');

        },
        removeAlertConfig(state){
            setTimeout(() => {
                state.alertConfig.isAlert = false;

            });
        },
        removeAlertInfoUser(state){
            setTimeout(() => {
                state.alertInfoUser.isAlert = false;

            });
        }
    },
    getters: {
        getAlertConfig(state){
            return state.alertConfig;

        },
        getAlertInfoUser(state){
            return state.alertInfoUser;

        }
    }
});

export default store;