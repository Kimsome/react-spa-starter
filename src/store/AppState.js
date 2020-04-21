import { observable } from "mobx";

class AppState {
    @observable appname = "Hi~mobx";
}

export default new AppState();