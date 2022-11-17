import {makeAutoObservable} from 'mobx';
import {createContext, useContext} from "react";

export const MainStore = makeAutoObservable({
    isLoading: false,
    user: undefined,
    setUser(user) {
        MainStore.user = user;
    }
});

export const MainStoreContext = createContext(MainStore);

export const useMainStore = () => useContext(MainStoreContext);
