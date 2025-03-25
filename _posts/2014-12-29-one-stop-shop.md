---
title:  One Stop Shop
tagline: A first look at briangraymusic.com as an integrated web destination
permalink: /2014-12-29-one-stop-shop/
date:   2014-12-29 17:23:00 -0500
categories: software
---

So I'm trying to integrate everything into a single web site. This blog should appear under the "News" tab, and I'll have other tabs for other things like Facebook and Twitter. The tricky part is making everything look like it belongs together on a single site, so I'm kind of going out of my way to defeat the normal internet security rules. Instead of just loading stuff into an IFrame, I'm going to have everything proxy through my python-driven server code. Instead of framing `briangraymusic.wordpress.com`, I'll be framing `<site>/blog`. Your browser makes the request to my server, I go out and fetch WordPress's page, change all references to WP into references to me, and apply my own CSS. That way I can make everything have the same look and feel (which I can change all willy and nilly in a single place) without those pesky security warnings about cross-domain whatevers.

It's a bit inefficient to have my site proxy everything every time, so I'll need a caching system. Easiest way to get a foot in the door there is just to make an in-memory dictionary mapping URLs to content, with a timeout. Say 300 seconds. That way I only actually go out and fetch new content at most every 5 minutes rather than on every page request. Should make the site snappier too.

I'm a bit curious though about how people prefer to experience their social media. Do you want to go to Twitter and see what everyone on Twitter is saying, then go to Facebook and see what everyone on Facebook is saying? Or is it useful to slice it the other way and go to Brian Gray to see what I'm saying wherever I say it?