/* ---------------- SITE CONFIGURATION ----------------
   The only file you edit to change contact details or add the demo video.
   index.html reads these and needs no changes.

   Same idea as clinic-config.js in the app: anything that changes lives in a
   small file of its own, so the page itself stays untouched.

   Leave a value as "" and the page handles it — the demo section falls back to
   a "coming soon" note rather than rendering a dead link, and the video slot
   falls back to a still screenshot rather than an empty black box. */
window.__SITE_CONFIG = {

  // Where demo requests go. Shown on the page AND used for the mailto link,
  // because tapping a mailto on a phone is unreliable enough that a visible,
  // copyable address is worth having.
  email: "clinicchart919@gmail.com",

  // Optional. Digits only, with country code, no + or spaces.
  // e.g. "919876543210". Leave "" to hide the WhatsApp button.
  whatsapp: "",

  // Subject line pre-filled into the email. Keep it short.
  emailSubject: "Clinic Chart — demo request",

  // Optional demo video. Put the file next to index.html and name it here.
  // MP4 (H.264) plays everywhere; WebM does not play on older iPhones.
  // Leave "" and the section shows the still screenshot instead.
  demoVideo: "",

  // Shown while the video loads, and instead of it when demoVideo is "".
  videoPoster: "chart.png",

  // Where the user guide lives. It ships WITH the app rather than being copied
  // into this site, so there is one copy and it cannot drift out of date
  // against the app it documents. Point this at the clinic's own deployment.
  // Leave "" and the Guides link is hidden rather than pointing at a 404.
  guideUrl: "https://ginwalamurtaza66-hash.github.io/clinic-app/guide/"
};
