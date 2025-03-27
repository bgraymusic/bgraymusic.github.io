function prefix_image_paths(section, permalink, selector) {
	permalink = permalink.replace(/^\/+|\/+$/g, '');
	const img_tags = document.querySelectorAll(selector + ' img');

	img_tags.forEach((img_tag) => {
		let path = img_tag.getAttribute('path');
		if (path) {
			path = '/assets/' + section + '/' + permalink + '/img/' + path;
			img_tag.setAttribute('src', path);
		}
	});
}
