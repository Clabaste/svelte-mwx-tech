const longpress = (node, options) => {
	let timer;
	const handleMousedown = () => {
		const { duration = 2000 } = options;
		timer = setTimeout(() => {
			node.dispatchEvent(new CustomEvent('longpress'));
		}, duration);
	};
	const handleMouseup = () => {
		clearTimeout(timer);
	};
	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('mouseup', handleMouseup);
	return {
		update(newOptions) {
			options = newOptions;
		},
		destroy() {
			clearTimeout(timer);
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('mouseup', handleMouseup);
		}
	};
};

export default longpress;