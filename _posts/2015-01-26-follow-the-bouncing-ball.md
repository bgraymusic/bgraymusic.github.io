---
title:  Follow the bouncing ball
tagline: A new feature… lyrics that change color as the song plays
permalink: /2015-01-26-follow-the-bouncing-ball/
date:   2015-01-26 18:59:00 -0500
categories: software
---

Or more like “follow the slightly lighter blue words”. I’m playing around with making my lyrics follow along with the song as it plays. At first I thought it would just be a cool novelty, but now the most useful part to me is the ability to scrub through the song with the slider and find the part I want to play. Now you don’t have to guess that the second verse is at about 1:30, you can instead visually drag over until the words reach the end of the first chorus and hit “play”. Check them out:

[π Day](https://briangraymusic.com?toptab=1&song=πday)

[Man Crush](https://briangraymusic.com?toptab=1&song=mancrush)

I coded up two different ways of specifying the lyric timings. For the first method, I put unprintable characters (\u200C) everywhere I wanted to have an “event”, usually a syllable but sometimes I wanted to finish a word without starting a new one, so you’ll see: “/u200Cheld /u200Cnote!/u200C”. First the word “held” starts, then “note” starts, then “note” ends without anything else starting. Then I go through the grueling process of timing out every syllable and entering the time in seconds into a JavaScript array, each entry matching a \u200C character. The code uses the time constantly reported by the player to look up where we are and separate the lyrics into three sections. Elapsed (dark blue), now (light blue), and unelapsed (black).

The second method leaves the lyrics alone and creates an array of two-member arrays, denoting both the time of the event, and the character number of where the event matches up with the lyrics. It’s basically the same thing, but trades off having to count characters in exchange for readable lyrics (in the code). After trying them both, method 1 in “Pi Day” and method 2 for the first verse or so of “One More Cloud”, I decided to run with the first.

Seems to work great, the only drawback being that the timing resolution appears to be capped at 1/4 of a second. That’s a hard limit imposed by the browser, so we could find it works more smoothly on some browsers than others. But I see fast songs get two or even three syllables that happen very quickly get lumped together into one “jump” forward. There might be a way to smooth this out by scheduling multiple syllables to appear spread out over a single 1/4s span. I’ll think about it. For now, by far the most difficult part of all this is the tedium of encoding the songs. I’m clocking just a bit more than 1 minute of song per hour of work.

As always, the code is on my site. The encoding data is in /js/track-info.js, and the interpretation and rendering code is in /js/bg.js (see markElapsedLyrics()).