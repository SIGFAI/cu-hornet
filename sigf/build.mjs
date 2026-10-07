// CU-Hornet (Madgamer98, MIT): Hornet from Hollow Knight: Silksong played inside Casualties: Unknown (free demo on
// Steam). Two BepInEx 5 plugins linked over the shared memory Local\HornetPassthrough_v1: HornetInCasualties (host,
// in CU) forwards input and publishes terrain and actors; HornetExporter (guest, in Silksong) runs Hornet on a mirror of
// CU's terrain and streams her frames, VFX and HUD back. Both games run.
//
// Rehosted on SIGFAI/cu-hornet (standard upstream fusion, source.hosted) with the official BepInEx 5 x64 build in both
// game folders, as library/ultra-repo does. Upstream releases the two DLLs as bare assets; our zips hold each one
// unchanged with the LICENSE at the tag, under the folder the csproj files deploy to (BepInEx/plugins/<name>).
//   node library/cu-hornet/build.mjs [--fixture]       (outputs: library/lib.mjs)
import { BEPINEX, asset, card, dl, emit, pinned, player, rawAt, zipAsset } from '../lib.mjs';

const UP = {
  repo: 'https://github.com/madgamer98/CU-Hornet', tag: 'v0.1.0', commit: '17598d6a4997f14e3139900cccda8a4dc118ae3c',
  license: 'MIT', authors: ['Madgamer98'],
  host: { file: 'HornetInCasualties.dll', sha256: '525ee90a46cff2c8cb1102e9fe8b243053017140fc3e19cb7559895c9b339967' }, // = GitHub digest
  guest: { file: 'HornetExporter.dll', sha256: '492bdb47486494f3e6aaea0f41103c5cd79ed6343d64d3ecb480fab839763e4c' }, // = GitHub digest
};
const ID = 'cu-hornet', VERSION = '0.1.0', NAME = 'Hornet in Casualties: Unknown';
const TAGLINE = 'Play Casualties: Unknown as Silksong\'s Hornet: her real moves, slashes and HUD, driven live by Silksong itself.';

const dll = async (f) => pinned(`${UP.repo}/releases/download/${UP.tag}/${f.file}`, f.sha256);
const license = await rawAt(UP.repo, UP.commit, 'LICENSE');
const bepinex = asset(BEPINEX.file, await pinned(BEPINEX.url, BEPINEX.sha256), { zipped: true });
const host = zipAsset(`${ID}-casualties.zip`, [{ name: UP.host.file, data: await dll(UP.host) }, { name: 'LICENSE', data: license }]);
const guest = zipAsset(`${ID}-silksong.zip`, [{ name: UP.guest.file, data: await dll(UP.guest) }, { name: 'LICENSE', data: license }]);
const assets = [bepinex, host, guest];

const make = (urls, set) => {
  const bep = { src: bepinex.name, dst: '{game}', unpack: true, contents: bepinex.contents, ...dl(bepinex, urls) };
  return {
    id: `sigf/${ID}`,
    version: VERSION,
    name: NAME,
    tagline: player(ID).tagline ?? TAGLINE,
    how_to_play: player(ID).howToPlay,
    kind: 'passthrough',
    games: [
      { game: 'casualtiesunknown', role: 'host', label: 'Casualties: Unknown (Demo)', engine: 'Casualties: Unknown Demo (Unity 2022.3, Mono) + BepInEx 5 plugin HornetInCasualties (C#)', apps: { steam: '4576510' }, runtime: 'the free Steam demo (checked by the author, 2026-10-03)' },
      { game: 'silksong', role: 'guest', label: 'Hollow Knight: Silksong', engine: 'Hollow Knight: Silksong (Unity 6000.0, Mono) + BepInEx 5 plugin HornetExporter (C#)', apps: { steam: '1030300' }, runtime: 'Steam build of early October 2026 (checked by the author)' },
    ],
    requires: [
      { id: BEPINEX.id, version: BEPINEX.version, license: `${BEPINEX.license}, shipped unchanged`, page: `${BEPINEX.repo}/releases/tag/v${BEPINEX.version}`,
        note: 'installed into both game folders by the app', source: { url: urls[bepinex.name], sha256: bepinex.sha256 } },
    ],
    install: [
      { game: 'casualtiesunknown', strategy: 'game-dir-snapshot', loader: 'bepinex', files: [
        bep, { src: host.name, dst: '{game}/BepInEx/plugins/HornetInCasualties', unpack: true, contents: host.contents, ...dl(host, urls) },
      ] },
      { game: 'silksong', strategy: 'game-dir-snapshot', loader: 'bepinex', files: [
        bep, { src: guest.name, dst: '{game}/BepInEx/plugins/HornetExporter', unpack: true, contents: guest.contents, ...dl(guest, urls) },
      ] },
    ],
    // Casualties: Unknown first: its plugin creates the shared memory that Silksong's plugin opens.
    launch: [{ game: 'casualtiesunknown', args: [] }, { game: 'silksong', args: [] }],
    files: set.map(a => ({ name: a.name, ...dl(a, urls) })),
    source: {
      repo: UP.repo, license: 'MIT AND LGPL-2.1', upstream_license: UP.license, tag: UP.tag, commit: UP.commit,
      hosted: `https://github.com/SIGFAI/${ID}`, based_on: 'https://github.com/rehan-remade/universal-modder',
      bundled: [{ name: 'BepInEx', version: BEPINEX.version, repo: BEPINEX.repo, commit: BEPINEX.commit, license: BEPINEX.license }],
    },
    media: {},
    built_by: { author: UP.authors[0], authors: UP.authors, packaged_by: 'SIGF' },
    idea_by: UP.authors[0],
    built_at: '2026-10-07T00:00:00.000Z',
    ...card(UP.repo),
    notes: player(ID).notes,
  };
};

emit({ slug: ID, version: VERSION, assets, fixtureAssets: assets, make });
