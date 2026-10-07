# Hornet in Casualties: Unknown

Play Casualties: Unknown as Silksong's Hornet: her real moves, slashes and HUD, driven live by Silksong itself.

**Hornet in Casualties: Unknown is made by [Madgamer98](https://github.com/Madgamer98).** All credit for the mod goes to them. It is built on [rehan-remade/universal-modder](https://github.com/rehan-remade/universal-modder).

- Original project: https://github.com/madgamer98/CU-Hornet
- Report bugs and ask questions there: https://github.com/madgamer98/CU-Hornet/issues
- Upstream release packaged here: [v0.1.0](https://github.com/madgamer98/CU-Hornet/releases/tag/v0.1.0) (commit [`17598d6`](https://github.com/madgamer98/CU-Hornet/tree/17598d6a4997f14e3139900cccda8a4dc118ae3c))

> **Beta.** Nobody at SIGF has played this build yet. Back up your saves.
> Bugs in the mod itself go to the author's issue tracker above; problems with the one-click install go to this repository's issues.

## What you need

- **Casualties: Unknown (Demo)** ([Steam](https://store.steampowered.com/app/4576510/)): the free Steam demo (checked by the author, 2026-10-03).
- **Hollow Knight: Silksong** ([Steam](https://store.steampowered.com/app/1030300/)): Steam build of early October 2026 (checked by the author).
- Windows and the [SIGF app](https://sigf.ai). The app installs bepinex 5.4.23.5 for you.

## Install

In the SIGF app, open **Hornet in Casualties: Unknown** in the catalog, press **Install**, then **Play**. **Restore** puts your game folders back exactly as they were.
The app follows `mashup.json` in this repository: every download is pinned by sha256. The files come from the release [`v0.1.0`](../../releases/tag/v0.1.0).

### How to play

- Both games run at once: you play in Casualties: Unknown, and Silksong in the background moves Hornet, so her animations, slashes and HUD are the real ones.
- Start a run or course in Casualties: Unknown. In Silksong, load a save, and once Hornet is in play press F4 there to link her to Casualties' world.
- Back in Casualties: Unknown, move and jump with its own keys; J slashes, K dashes, L throws the needle, H binds.
- Silksong's health, silk and geo count: Casualties' biters cost a mask per hit, hitting enemies gives silk, and if Hornet dies the run ends.

### Good to know

- You need Casualties: Unknown Demo (free on Steam) and Hollow Knight: Silksong on Steam (Windows). Made in early October 2026; a game update can break it.
- A for-fun experiment the author does not plan to develop further: the bind and needle-throw effects do not show, and Hornet's size does not always match the world. In Silksong, F3 puts its own terrain back.
- BepInEx 5.4.23.5 is installed into both games and Restore removes it from both. Beta: report bugs on the upstream issue tracker with BepInEx/LogOutput.log from both games.

## What this repository holds

1. The upstream source tree at tag `v0.1.0`, commit [`17598d6a4997f14e3139900cccda8a4dc118ae3c`](https://github.com/madgamer98/CU-Hornet/tree/17598d6a4997f14e3139900cccda8a4dc118ae3c), every file unchanged (same git blobs). Upstream's own `README.md` is there, unchanged; GitHub shows this file (`.github/README.md`) first.
2. Added by SIGF in the same commit: this file, `THIRD-PARTY.md` (licenses and sources of the third-party files in the release), and `sigf/` (the scripts that built the release assets, for reference: they run inside the SIGF repository).
3. `mashup.json`, the SIGF app recipe (the next commit).
4. The release `v0.1.0` (its tag is the first commit):

| Asset | Size | sha256 | What it is |
|---|---|---|---|
| `BepInEx_win_x64_5.4.23.5.zip` | 639118 B | `82f9878551030f54657792c0740d9d51a09500eeae1fba21106b0c441e6732c4` | BepInEx 5.4.23.5 x64, the official build, unchanged (see THIRD-PARTY.md); unpacked into both the Casualties: Unknown folder and the Hollow Knight: Silksong folder. |
| `cu-hornet-casualties.zip` | 19826 B | `b0a40b1e968061d6faf22c99f8909ea3cf4719e1a70aca59ec1253cf18af0b45` | upstream's `HornetInCasualties.dll` from release `v0.1.0`, unchanged (sha256 `525ee90a...9967`), with upstream's LICENSE; unpacked into `BepInEx/plugins/HornetInCasualties` of Casualties: Unknown. |
| `cu-hornet-silksong.zip` | 20938 B | `e4c33cc6372c39d5245c30f77a1132fa0f08e25f81f66121ea8818b830694620` | upstream's `HornetExporter.dll` from release `v0.1.0`, unchanged (sha256 `492bdb47...3e4c`), with upstream's LICENSE; unpacked into `BepInEx/plugins/HornetExporter` of Hollow Knight: Silksong. |

The sha256 of every file inside the zips is in `mashup.json` (`contents`).

## Licenses

| Part | License | Where |
|---|---|---|
| CU-Hornet (all of the upstream tree) | MIT, Copyright 2026 Madgamer98 | `LICENSE` |
| BepInEx 5.4.23.5 and what its zip bundles (release asset) | MIT; UnityDoorstop LGPL-2.1 | `THIRD-PARTY.md` |

## Why this repository exists

The SIGF app (https://sigf.ai) installs mods from recipes (`mashup.json`) whose downloads are pinned release files. This repository makes Hornet in Casualties: Unknown installable in one click, credited to Madgamer98. If you are the author and want anything changed or taken down, open an issue here.
