# Open Instruments · FM-1 Lab

[Play Maradonna and Wa-Tur](https://matiasg-rgb.github.io/fm1-multiverse/) · [itch.io downloads](https://matiasg-rgb.itch.io/open-instruments) · GPL-3.0-only

Browser instruments with embedded WebAssembly synthesis, audio-linked graphics and offline HTML downloads. Click the audio activation button, then play the keys. Chrome desktop was checked on November 18, 2026. Physical MIDI, other browsers, mobile audio and hardware remain untested.

Complete corresponding source: [Maradonna](maradonna-gpl-source.zip) · [Wa-Tur](wa-tur-gpl-source.zip). Unzip each project, then run `sh build_web.sh` with LLVM clang supporting wasm32 (or set `CLANG` to WASI SDK clang). Existing Node.js regression tests are included. Serve this site with `python3 -m http.server 8000`.

[Credits and license](LICENSE-AND-CREDITS.md). This independent browser beta contains no flashable FM-1 firmware. No dedicated VST/AU/CLAP is included. Optional support links will appear when seller setup is complete.

## macOS native host simulations

The optional [host portability patch](FM1_macOS_Host_Build_Fix.patch) makes the inherited host simulations compile with Apple clang. It omits ELF pool section annotations only when `DINGHY_HOST` is defined; device builds keep their original sections.

From the unpacked developer archive root, apply `patch -p1 < FM1_macOS_Host_Build_Fix.patch`, then run `sh projects/maradonna/fw/tests/run_host.sh` or `sh projects/wa-tur/fw/tests/run_host.sh`. Install Python Pillow first. Both produced rendered frames and non-silent 44.1 kHz stereo WAVs on Intel macOS. These are native host simulations; hardware firmware and DAW plugins have separate tests.
