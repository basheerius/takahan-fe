import {makeAutoObservable} from 'mobx';
import {createContext, useContext} from "react";

export const MainStore = makeAutoObservable({
    isLoading: false
});

export const MainStoreContext = createContext(MainStore);

export const useMainStore = () => useContext(MainStoreContext);
