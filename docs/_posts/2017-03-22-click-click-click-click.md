---
title:  Click, click-click, click
tagline: Comparative methods to implement karaoke-style lyric following
permalink: /2017-03-22-click-click-click-click/
date:   2017-03-22 20:07:00 -0500
categories: software
---

I was pretty happy with my code that allows for following along with syllables while the song plays. It even animates the highlighting as you scrub the song position slider back and forth. Pretty cool.

What I was NOT happy with was how much work goes into encoding a song for animation. Doing this by hand is excruciating, taking hours to get a single song right. Fundamentally, what’s required is two sets of information whatever form it takes. We need to know what characters comprise a syllable, and at what time the syllable happens. There must be like 47 different solutions to this. I originally made an array of objects noting characters and time, like:

```
lyricsAndTiming = [{c: 'a', t:11.96},{c:'no',t=12.12},{c='ther',t=12.32}];
```

That was the only structure I needed, but I wanted something that made the lyrics more readable. So then I tried making the lyrics normal and creating an array of objects mapping char offset to the lyrics string:

```
lyrics = 'another';

timing = [{c:0, t:11.96},{c:1,t=12.12},{c=3,t=12.32}];
```

That worked ok too, but in the end, I decided on a balance where I mark syllables in the original lyrics with an unprintable character and then make an array of times for each syllable. The code can split on the unprintable and match up array for array:

```
lyrics = '\u200Ca\u200Cno\u200Cther';

timing = [11.96, 12.12, 12.32];
```

What this allows is the creation of a new piece of software that I wrote and is available in my GitHub repo, which I call “Nerd Rock Karaoke Generator” (in the nrk directory). I do still have to go in manually and paste those ‘\u200C’ characters in front of each syllable, but when it comes to the timing, I can use this tool:

<p align="center"><img src="nrkg.png" width=480 /></p>

There are not yet very many advanced features, like being able to pause, scrub back, and overwrite sections you feel you got wrong. Nor does it load up the lyrics and show you visually what’s going to happen. All it does is load a song, allow you to record or not record button/key up events and if so how long a gap before the next button/key down is required to record the up. I only mark releases for slow songs, like “St. Agnes” where it’s nice to see the syllable go dark before the next one starts (and remember to put an extra unprintable char after the word if you’re doing this). You play the song, click “Mark Syllable” or hit a key for each syllable, then when it’s done hit “Copy”, and the JavaScript array of timings to the nearest hundredth of a second gets placed in your copy buffer for pasting into the track-info.js file where I keep these.

So now I use the tool, get a numbers dump, load it up and see what we’ve got. Surprisingly, it works really well! Occasionally I mess up and miss a beat, so I have to insert one manually or else the syllables are all off by one, but other than that it’s been great. I typically listen to it through, and then put a couple extra markers and highlight the “[Verse n]” headers a couple seconds before the verse starts, so that the reader/singer is ready.

I’ll likely add features as I need them, but right now the tool is very specific to my needs. The output format is how I almost arbitrarily decided to code my site. Plus, I don’t even compile to a stand-alone executable. It’s a JAR that loads and executes on my computer because my Java version is compatible. If you think you might want to try it out, feel free. Just clone the repo, go into nrk, and “mvn clean install”. And if you have different tech requirements, just open up the pom.xml and rejigger the java version or whatever you need.