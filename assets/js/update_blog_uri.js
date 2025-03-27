function update_blog_uri(blogUri) {
	if (window.parent) window.parent.postMessage({ message: 'updateBlogUri', blogUri: blogUri }, '*');
}
