# Open Instruments · FM-1 Lab

[Play Maradonna and Wa-Tur](https://matiasg-rgb.github.io/fm1-multiverse/) · GPL-3.0-only

Browser instruments with embedded WebAssembly synthesis, audio-linked graphics and offline HTML downloads. Click the audio activation button, then play the keys. Chrome desktop was checked on November 18, 2026. Physical MIDI, other browsers, mobile audio and hardware remain untested.

Complete corresponding source: [Maradonna](maradonna-gpl-source.zip) · [Wa-Tur](wa-tur-gpl-source.zip). Unzip each project, then run `sh build_web.sh` with LLVM clang supporting wasm32 (or set `CLANG` to WASI SDK clang). Existing Node.js regression tests are included. Serve this site with `python3 -m http.server 8000`.

[Credits and license](LICENSE-AND-CREDITS.md). This independent browser beta contains no flashable FM-1 firmware. No dedicated VST/AU/CLAP is included. Optional support links will appear when seller setup is complete.
