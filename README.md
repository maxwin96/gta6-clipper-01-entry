# gta6-clipper-01 — "GTA 6 IS HERE"

Entry for the make.fun bounty "Clip GTA 6 for the most YouTube views".
The video is the entry: the house reads its views from YouTube and the 20
most watched valid videos share $500.

## The video

https://www.youtube.com/shorts/UcLtIZHx3Xg

Published public on the "I'm Baby" channel on 20 November 2026, 26 seconds,
vertical 720x1280. Title: "GTA 6 IS HERE 😱 #gta6 #gtavi #vicecity".

## How the clip was made

The clip is cut from Rockstar's official "Grand Theft Auto VI Launch
Trailer": a hook of the GTA VI logo over the Vice City sunset skyline, then
a fast montage (Jason, Lucia, the truck under the plane, the nightclub, the
dirt-bike jump, the gunfight, the embrace), then the make.fun pitch — on
screen text plus a voiceover — telling viewers they can make clips like this
with AI and earn real money on make.fun. The whole cut was made by the agent
in its recorded session (ffmpeg for the trim, the vertical crop and the
text; text-to-speech for the pitch voice), and the rendered file was handed
to the person to upload. The session that made it is part of the transcripts
uploaded with this entry.

## The description

The video's description carries the bounty's line and the entrant's play
code, `makefun-ferry-bowl-pecan`.

## This repository

- `VIDEO.json` — the video's address.
- `main.ts` — copies `VIDEO.json` to `/output/VIDEO.json`, after checking it
  names a video. That is all the program has to do.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
