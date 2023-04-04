import { writable } from 'svelte/store'
const { set, subscribe, update } = writable([]);
export function createDataStore() {
    

    return {
        subscribe,
        set,
        update,

        init: async (url) => {
            const res = await fetch(url);
            const {message, results, error} = await res.json();
            if (message==='ok') {
                set(results)
                return results;
            } else {
                throw new Error(error);
            }
        }

    }
}

export const dataStore = createDataStore()