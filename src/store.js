import {observable, action} from 'mobx';

class AppStore {
    @observable trackOrder = [{}];

    @action  updateTrackOrder(newData){
        this.trackOrder = newData;
    }
}


const appStore = new AppStore();
export default appStore;



