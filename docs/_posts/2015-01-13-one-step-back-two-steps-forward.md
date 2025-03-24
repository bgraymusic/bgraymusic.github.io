---
title:  One Step Back, Two Steps Forward
tagline: Evolution of my web site's proxying of 3rd party content
permalink: /2015-01-13-one-step-back-two-steps-forward/
date:   2015-01-13 18:20:00 -0500
categories: software
---

The whole "proxy and cache" thing is more complicated than I thought. I can put anything I want in a frame by doing that, and I can style it the way I want (like taking out the identifying headers so you don't see multiple layers of my name). But login and cookies and stuff messes things up. I want a perfect window to the application I'm framing, and if you can't sign into Wordpress or whatever, you can't comment or follow. It's not impossible, I'll just have to make my own compound cookies that contain the various cookies for each framed site, unpack them on the server, and send them in with the proxied request. Then take the returned cookies from the response, repack them, and send them to the browser. This probably effectively does away with the caching idea though, as every request will need to be made fresh in order to forward the cookies. This could take a while. So for now I'm just transparently framing things like a loser.

On the plus side...new top level tab! I made a "Social Media" tab and put in two frames side by side for Facebook and Twitter. They look good and work well, so I'm wondering if I'll ever bother to run them through the proxy. Maybe if I redesign in the future with weird colors that I want to be able to make them use.