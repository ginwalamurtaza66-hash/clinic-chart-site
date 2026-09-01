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

  // Digits only, with country code, no + or spaces. e.g. "919876543210".
  // Leave "" and the WhatsApp button is hidden.
  //
  // WORTH FILLING IN. Email alone is a weak call to action for a doctor
  // reading this on a phone between patients, and every other contact route on
  // the page is email. This is the cheapest thing on the site to fix.
  whatsapp: "",

  // Subject line pre-filled into the email. Keep it short.
  emailSubject: "Clinic Chart — demo request",

  // Demo video. Put the file next to index.html and name it here.
  // MP4 (H.264) plays everywhere; WebM does not play on older iPhones.
  // Leave "" and the section shows the still screenshot instead.
  //
  // THE BIGGEST GAP ON THIS SITE. The offline claim is the one thing that
  // separates this from everything else a clinic could buy, and it is
  // demonstrable in ten seconds -- aeroplane mode on, register a patient,
  // write a prescription. Every other word here is an argument ABOUT that;
  // two minutes of phone footage is the thing itself.
  demoVideo: "",

  // Shown while the video loads, and instead of it when demoVideo is "".
  videoPoster: "chart.png"
};
