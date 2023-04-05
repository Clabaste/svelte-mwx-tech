import { derived } from 'svelte/store';
import {time} from './time'

export const daysToHoliday = derived(
	time,
	($time) => {
		const holiday = new Date('2023-06-30');
		return Math.round((holiday - $time) / (1000 * 3600 * 24))
	}
	
);