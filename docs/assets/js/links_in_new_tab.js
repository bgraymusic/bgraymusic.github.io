document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  const whitelistedDomains = ["briangraymusic.com", "localhost"];

  links.forEach((link) => {
    const linkHostname = new URL(link.href).hostname;
    if (
      link.href.includes("http") &&
      !whitelistedDomains.some((domain) => linkHostname.includes(domain))
    ) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer nofollow");
    }
  });
});
