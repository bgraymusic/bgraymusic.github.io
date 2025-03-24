if (window.parent) {
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    const internalDomain = "briangraymusic.com";

    links.forEach((link) => {
      const url = new URL(link.href);
      if (url.hostname == internalDomain) {
        const params = url.searchParams;
        toptab = parseInt(params.get("toptab"));
        toptab = isNaN(toptab) ? 0 : toptab;
        song = params.get("song");
        songtab = parseInt(params.get("songtab"));
        songtab = isNaN(songtab) ? 0 : songtab;
        blog = params.get("blog");
        window.parent.navigate(toptab, song, songtab, blog);
      }
    });
  });
}
