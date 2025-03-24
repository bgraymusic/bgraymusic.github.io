---
title:  Frist Psot
tagline: In which Brian talk to himself about integrating a blog into his web site
permalink: /2013-11-26-frist-psot/
date:   2013-11-26 16:50:00 -0500
categories: software
---

I'm just writing this to explore how to take my WordPress blog and integrate it into a tabbed section on my web site. Probably via an IFrame. Will default browser security allow me to apply my own CSS to a framed page? These are the quandaries that try men's souls.

And now since the post is here and will likely be read by no one ever, here is where I'll put weird experimental stuff to test out integration with my web site. Right now I'm testing out whether or not it is possible to use JavaScript to link to the site or tell the parent frame to navigate, conditionally based on whether we're framed or not.

Aaaaaaand full stop. WordPress strips out all JavaScript, completely blocking any attempt to make this work elegantly. I'll probably have to switch blog providers at some point, as the best I can do now is make a link to my site, which renders in the iframe, notices it's in an iframe, and escapes itself, overwriting the main frame. This briefly flashes the site nested within itself before correcting. Ugly.