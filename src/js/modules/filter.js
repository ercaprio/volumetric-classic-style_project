const filter = () => {
	const menu = document.querySelector('.portfolio-menu'),
		  items = menu.querySelectorAll('li'),
		  wrapper = document.querySelector('.portfolio-wrapper'),
		  markAll = wrapper.querySelectorAll('.all'),
		  no = document.querySelector('.portfolio-no');

	const typeFilter = (markType) => {
		markAll.forEach(mark => {
			mark.style.display = 'none';
			mark.classList.remove('animated', 'fadeIn');
		});

		no.style.display = 'none';
		no.classList.remove('animated', 'fadeIn');

		if (markType) {
			markType.forEach(mark => {
				mark.style.display = 'block';
				mark.classList.add('animated', 'fadeIn');
			});
		} else {
			no.style.display = 'block';
			no.classList.add('animated', 'fadeIn');
		}
	};

	const typeSelector = (type) => {
		menu.querySelector(type).addEventListener('click', () => {
			typeFilter(wrapper.querySelectorAll(type));
		});
	};

	typeSelector('.all');
	typeSelector('.lovers');
	typeSelector('.chef');
	typeSelector('.girl');
	typeSelector('.guy');
	typeSelector('.grandmother');
	typeSelector('.granddad');

	menu.addEventListener('click', (e) => {
		let target = e.target;

		if (target && target.tagName == 'LI') {
			items.forEach(btn => btn.classList.remove('active'));
			target.classList.add('active');
		}
	});
};
 
export default filter;