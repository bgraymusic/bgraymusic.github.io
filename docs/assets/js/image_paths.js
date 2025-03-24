function prefix_image_paths(section, permalink, selector) {
  permalink = permalink.replace(/^\/+|\/+$/g, "");
  const img_tags = document.querySelectorAll(selector + " img");

  img_tags.forEach((img_tag) => {
    src = img_tag.getAttribute("src");
    src = "/assets/" + section + "/" + permalink + "/img/" + src;
    img_tag.setAttribute("src", src);
  });
}
