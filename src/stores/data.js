import { writable } from 'svelte/store'

export function createDataStore() {
    const { subscribe } = writable([])

    return {
        subscribe,

        init: async () => {
            const res = await fetch('https://www.swapi.tech/api/people?page=1&limit=3');
            const {message, results, error} = await res.json();
            console.info('meee', results)
            if (message==='ok') {
                return results;
            } else {
                throw new Error(error);
            }
        }

    }
}

export const dataStore = createDataStore()