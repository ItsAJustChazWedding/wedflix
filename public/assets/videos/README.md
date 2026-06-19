# Wedding videos

Drop video files into this folder. Once committed and pushed to `main`,
they are deployed with the site and available at:

    https://rhkrys.github.io/wedflix/assets/videos/<your-file>.mp4

To show a video on the site, reference it from a component, e.g.:

    <video src="assets/videos/our-story.mp4" controls playsInline />

## Video format: use H.264 MP4

All videos on the site are encoded as **H.264 (AVC) video + AAC audio in an
MP4 container** — the most widely supported web video format. It plays in
every modern browser (Chrome, Safari, Firefox, Edge) and on iOS/Android
without any plugins.

Why this matters:

- Phone recordings are often **HEVC/H.265 `.mov`** (e.g. iPhone footage).
  HEVC does **not** play reliably in Chrome or Firefox, so those files must
  be converted before they go on the site.
- `.mov`, `.avi`, `.mkv`, and HEVC-in-MP4 are **not** safe for the web.

### Converting a source file to web-ready H.264 MP4

Using [ffmpeg](https://ffmpeg.org/):

    ffmpeg -i input.mov \
      -c:v libx264 -profile:v high -pix_fmt yuv420p -crf 23 -preset slow \
      -c:a aac -b:a 128k \
      -movflags +faststart \
      output.mp4

Key flags:

- `-c:v libx264` / `-pix_fmt yuv420p` — H.264 video with the
  maximum-compatibility pixel format.
- `-crf 23` — quality/size trade-off (lower = better quality, larger file;
  18–24 is a good range).
- `-c:a aac` — AAC audio.
- `-movflags +faststart` — moves the index to the front so the video can
  start playing before it has fully downloaded (streaming).

Also generate a poster image (the still shown before play):

    ffmpeg -ss 2.5 -i input.mov -frames:v 1 -q:v 3 output-poster.jpg

Keep files reasonably small (a few MB) so the page loads fast. For long or
many videos, consider hosting on YouTube/Vimeo and embedding instead.
