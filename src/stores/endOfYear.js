import { derived } from 'svelte/store';
import {time} from './time'

export const endOfYear = derived(
	time,
	($time) => {
		const holiday = new Date(`${$time.getFullYear()}-12-31`);
		// get total seconds between the times
		let delta = Math.abs(holiday - $time) / 1000;

		// calculate (and subtract) whole days
		const days = Math.floor(delta / 86400);
		delta -= days * 86400;

		// calculate (and subtract) whole hours
		const hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;

		// calculate (and subtract) whole minutes
		const minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;

		const seconds = Math.floor(delta % 60);
	 	return `${days} Tage, ${hours} Stunden, ${minutes} Minuten und ${seconds} Sekunden`
	}
);