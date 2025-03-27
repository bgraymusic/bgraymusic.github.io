function update_blog_uri(blogUri) {
	if (window.parent) {
		console.log('Posting blogUri: ' + blogUri);
		window.parent.postMessage({ message: 'updateBlogUri', blogUri: blogUri }, '*');
	}
}
