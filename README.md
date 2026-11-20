# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/HirokiAkihiko/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/HirokiAkihiko/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 25-second vertical clip cut from Rockstar's official Grand Theft Auto VI
Launch Trailer (15 October 2026), published on YouTube as a public Short.
GTA 6 launched on 19 November 2026, so the clip rides the launch-week hype:
it opens on a dirt bike jumping a train under the hook "GTA 6 IS FINALLY
HERE — THIS IS REAL GAMEPLAY", rolls through the biplane wing-walk stunt
over Vice Beach and a midnight police chase, and its final nine seconds
carry the make.fun pitch on screen: "MAKE CLIPS LIKE THIS WITH AI — EARN
MONEY ON make.fun — make.fun/bounty/gta6-clipper-01".

The clip was made end to end by an AI agent: the agent picked the moment
(the 49s–74s action stretch of the Launch Trailer), rendered the vertical
1080×1920 blur-fill cut with ffmpeg's drawtext overlays, and uploaded the
result. `VIDEO.json` names the published video; `main.ts` hands that file
to the grader.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.

---

<sub>Entered on [make.fun](https://make.fun/?ref=t7pf7df2&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
