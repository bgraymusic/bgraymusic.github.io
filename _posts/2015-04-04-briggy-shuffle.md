---
title:  Briggy Shuffle
tagline: I added an album shuffle feature to the web site
permalink: /2015-04-04-briggy-shuffle/
date:   2015-04-04 21:54:00 -0500
categories: software
---

New site features!

One thing that has really been bothering me was the lack of ability for the music on my site to keep playing. I had a player on each track, and you play or pause that individual track, then move on to another one. Well that can be a pain if you want to listen to multiple songs, which I'm sure you all want to do.

So I implemented a suite of album-level buttons that appear just below the album artwork. The first is a button instructing the playback engine to stop at the end of each song. This is how it used to work, but is now not the default. The second button is an album repeat feature that loops back around to the beginning when the last song has completed. The third is the eye candy button: shuffle play. Hit this one and the album shuffles itself. Hit it again and we're back to the original order. It's fun to play with.

I also expanded the items that are supported by tooltips. At some point soon I'll have a page-level set of preferences allowing things like tooltips to be turned off for those who feel they get in the way. Plus I'll start saving preference info in cookies so the site behaves the same way when you return as it did the last time you were there.

Finally, it looks like about 500 lines of JavaScript is where I need to care about maintainability. I refactored from one source file into five with classes for the BandCamp API, discography, album, and track. I'm also exploring ways to integrate automated regression testing so when I make a feature addition I know if I damaged anything else. This is always more difficult to do with UI-based code rather than code that just processes information.