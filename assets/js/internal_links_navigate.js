if (window.parent) {
	document.addEventListener('DOMContentLoaded', () => {
		const links = document.querySelectorAll('a');
		const internalDomain = 'briangraymusic.com';

		links.forEach((link) => {
			const url = new URL(link.href);
			if (url.hostname == internalDomain) {
				let params = {
					topTab: url.searchParams.get('toptab'),
					song: url.searchParams.get('song') || '',
					songTab: url.searchParams.get('songtab') || '',
				};
				link.href =
					'javascript:window.parent.postMessage({ message: "navigate", params: ' + JSON.stringify(params) + '}, "*")';
			}
		});
	});
}
