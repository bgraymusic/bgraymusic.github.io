---
title:  Responsive Design
tagline: Announcing a better mobile experience for the NerdRock web site
permalink: /2015-10-16-responsive-design/
date:   2015-10-16 16:53:00 -0500
categories: software
---

It's been bugging me for a while now how my site isn't really designed for use on a mobile device. It has really just been the full desktop application, scaled down to fit on a small screen. Which of course means all the buttons, tabs, sliders, etc. all get scaled down too and it's really difficult to hit them reliably. So I needed a mobile interface.

In researching the best way to get this done, I read up on "responsive design", which I kind of knew about already from being in a world where this kind of thing exists to know about. But I didn't realize how cool it was until I played with it. It's not really anything more than using different styling based on some runtime factor. In my case, I used screen width (as do most people).

Now that I've deployed the responsive code, pull up my site (in a new tab since you're reading this article) and navigate to the music tab. Narrow the browser window until the controls would impinge the longest song name. The volume controls disappear and you get more room. Do it again a couple more times, and the track shuttle gets shorter. Do it again and the shuttle disappears altogether. One last time and you change up completely and are shown the "mobile" interface. This interface gets rid of all top-level tabs and just shows the music (no matter what tab you were on before). Also, the buttons and other interface elements get bigger, so it's easy to control the music on a phone.

A cool emergent phenomenon I noticed is that when I test on my iPhone, I get the mobile interface. But if I switch to landscape mode, the screen is now wider and I get the full interface. So I have my choice of how I use the site and can upgrade the feature set on the fly if, say, I want to fast-forward to a point in a song or read this blog -- features which only exist on the full site.

I'm also mulling over a top-level menu (top left corner) that can show different pages, but for now the mobile interface is centered on the music. And as always, the code is checked into my GitHub repo and can be viewed in the "Code" tab -- except, ironically, within the mobile interface.