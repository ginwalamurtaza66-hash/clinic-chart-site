/* Clinic Chart user guide.
 *
 * One file, hash-routed, no build step -- the same constraints as the app:
 * everything is deployed by dragging files into a GitHub repository from a
 * phone, so anything needing npm or a bundler is not deployable here.
 *
 * Content is written from the app as it actually behaves, not from what it was
 * meant to do. Where the app is deliberately restrictive -- a patient cannot
 * cancel a confirmed booking, the clinic settings document is never public --
 * the guide says so and says why, because a user who does not know the reason
 * files it as a bug.
 */
(function () {
  'use strict';

  /* Screenshots are real captures of the app, not mockups, so a reader can
     match what is on their screen to what is on the page. Width-constrained
     and lazy so a phone on a slow line is not made to fetch six of them before
     the words appear. Every one carries alt text: the guide should still make
     sense read aloud, or with images turned off. */
  function fig(src, alt, caption) {
    return '<figure class="fig"><img src="./img/' + src + '" alt="' + alt +
           '" loading="lazy" decoding="async">' +
           (caption ? '<figcaption>' + caption + '</figcaption>' : '') +
           '</figure>';
  }

  var TOPICS = [
    { g: 'Getting started', id: 'start', t: 'First run and signing in', body: function () { return [
      '<h2>First run and signing in</h2>',
      '<p class="lede">What to do the first time you open Clinic Chart.</p>',
      '<p>Clinic Chart runs in the browser and installs like an app. Open the clinic',
      ' address, then use your browser\'s <b>Add to Home Screen</b> so it opens',
      ' full screen and works offline.</p>',
      '<h3>Signing in</h3>',
      '<ol><li>Enter the email and password the clinic gave you.</li>',
      '<li>Everything you see is scoped to your clinic. Staff at one clinic can',
      ' never see another clinic\'s patients.</li></ol>',
      '<div class="note"><b>Install it properly.</b> Used from a browser tab the app',
      ' still works, but offline support and the home-screen icon only apply once',
      ' it has been added to the home screen.</div>',
      '<h3>Roles</h3>',
      '<ul><li><b>Doctor</b> — full access, including online booking settings and',
      ' analytics.</li>',
      '<li><b>Assistant</b> — day-to-day work: patients, visits, receipts.</li></ul>',
      '<p>If a screen or button is missing, it is usually the role rather than a',
      ' fault. Check under <span class="path">Staff</span>.</p>'
    ].join(''); } },

    { g: 'Getting started', id: 'offline', t: 'Working offline', body: function () { return [
      '<h2>Working offline</h2>',
      '<p class="lede">The app keeps working when the connection does not.</p>',
      '<p>Clinic Chart is built to survive a bad line. Once loaded, the app itself',
      ' is stored on the device, so it opens with no signal at all.</p>',
      '<h3>Before an offline day</h3>',
      '<ol><li>Open <span class="path">Settings → Offline &amp; Sync</span>.</li>',
      '<li>Choose <b>Prepare for offline</b> while you still have a connection.</li>',
      '<li>Work normally. Edits are queued on the device.</li>',
      '<li>When you are back online they sync automatically.</li></ol>',
      '<div class="warn"><b>Do not sign out with unsynced work.</b> Signing out',
      ' while edits are queued risks losing them. The app warns you; take the',
      ' warning seriously and reconnect first.</div>',
      '<h3>If two people edited the same record</h3>',
      '<p>The app does not silently pick a winner. Conflicts are listed under',
      ' <span class="path">Settings → Offline &amp; Sync</span> with both versions',
      ' shown so a person decides.</p>'
    ].join(''); } },

    { g: 'Patients', id: 'new-patient', t: 'Creating a patient', body: function () { return [
      '<h2>Creating a patient</h2>',
      '<p class="lede">Adding someone to the clinic register.</p>',
      '<ol><li>Open the <span class="path">Patients</span> tab.</li>',
      '<li>Tap the <b>+</b> button, bottom right.</li>',
      '<li>Fill in the name and mobile number. Everything else can wait.</li>',
      '<li>Save. The patient gets a code such as <code>PT-1254</code>',
      ' automatically — you never type it yourself.</li></ol>',
      '<h3>Age or date of birth</h3>',
      '<p>Enter either. If you only know a rough age, enter the age; the list shows',
      ' it as <code>~45 yrs</code> so nobody mistakes an estimate for a birthday.</p>',
      '<h3>Finding someone later</h3>',
      fig('patients.png','The patient list, with the search box and the booking card above it','The Patients screen. The booking card sits above the list and is always there.') +
      '<p>The search box matches name, patient code and phone number, and it',
      ' searches the whole register — not only the patients currently on screen.</p>',
      '<div class="note"><b>Check before you create.</b> Search the mobile number',
      ' first. Duplicate patients are far easier to avoid than to merge, though',
      ' <span class="path">Settings → Data Tools → Duplicates</span> will help if',
      ' it happens.</div>'
    ].join(''); } },

    { g: 'Patients', id: 'visit', t: 'Recording a visit', body: function () { return [
      '<h2>Recording a visit</h2>',
      '<p class="lede">Consultation notes, vitals and prescriptions.</p>',
      '<ol><li>Open the patient.</li>',
      '<li>Choose <b>New visit</b>.</li>',
      '<li>Record complaints, findings, vitals and the prescription.</li>',
      '<li>Save.</li></ol>',
      '<h3>Vitals and BMI</h3>',
      '<p>Height and weight accept units — <code>168</code>, <code>1.68 m</code>,',
      ' <code>150 lb</code> all work. BMI is calculated for you. Blood pressure is',
      ' flagged against the thresholds in',
      ' <span class="path">Settings → Practice Settings</span>.</p>',
      '<h3>Visit templates</h3>',
      '<p>If you type the same consultation repeatedly, save it as a template under',
      ' <span class="path">Settings → Practice Settings → Visit templates</span>',
      ' and apply it in one tap.</p>',
      '<h3>Attachments</h3>',
      '<p>Photographs and reports can be attached to a visit. Storage is shared',
      ' across the clinic — see <span class="path">Settings → Storage</span> for',
      ' what is left.</p>'
    ].join(''); } },

    { g: 'Patients', id: 'masterlist', t: 'Managing master lists', body: function () { return [
      '<h2>Managing master lists</h2>',
      '<p class="lede">The medicines, complaints and diagnoses you pick from.</p>',
      '<p>Master lists are what turn free typing into consistent records. If every',
      ' assistant spells a remedy differently, analytics cannot count it.</p>',
      '<h3>Editing a list</h3>',
      '<ol><li>Open <span class="path">Settings → Data Tools → Master lists</span>.</li>',
      '<li>Pick the list: medicines, complaints, diagnoses, departments.</li>',
      '<li>Add, rename or remove entries.</li></ol>',
      '<div class="warn"><b>Renaming changes future entries, not past ones.</b>',
      ' Visits already recorded keep the text they were saved with. That is',
      ' deliberate — a consultation note is a record of what was written at the',
      ' time, and rewriting history would make old notes say something the doctor',
      ' never wrote.</div>',
      '<h3>Importing</h3>',
      '<p>Large lists can be imported from a spreadsheet under',
      ' <span class="path">Data Tools → Import</span>. The app shows what it',
      ' matched before anything is saved. Read that screen rather than skipping it.</p>',
      '<h3>Departments</h3>',
      '<p>Departments group work for analytics — general OPD, physiotherapy and so',
      ' on. Set them up before you start relying on the revenue breakdown.</p>'
    ].join(''); } },

    { g: 'Money', id: 'receipts', t: 'Receipts and payments', body: function () { return [
      '<h2>Receipts and payments</h2>',
      '<p class="lede">Charging for a visit and tracking what is unpaid.</p>',
      '<ol><li>Open the patient or the visit.</li>',
      '<li>Choose <b>New receipt</b>.</li>',
      '<li>Add the items and the amount, then record what was actually paid.</li></ol>',
      '<p>A receipt can be partly paid. The balance shows on the patient and in',
      ' <span class="path">Analytics → Unpaid</span>, so money owed does not quietly',
      ' disappear.</p>',
      '<h3>Printing and sharing</h3>',
      '<p>Receipts export as PDF, generated on the device. Nothing is sent to a',
      ' third-party service to make them.</p>'
    ].join(''); } },

    { g: 'Money', id: 'analytics', t: 'Analytics', body: function () { return [
      '<h2>Analytics</h2>',
      '<p class="lede">Revenue, patient counts and the daily register.</p>',
      '<p>Open <span class="path">Settings → Analytics</span>. Figures can be pivoted',
      ' by department, by period and by doctor.</p>',
      '<h3>Reading the date range</h3>',
      '<p>Analytics always shows the range it is reporting on. If a number looks',
      ' wrong, check the range first — it is the usual explanation.</p>',
      '<div class="note"><b>Unpaid is not lost.</b> The unpaid list is a working list',
      ' of balances, not a write-off. It clears as payments are recorded against the',
      ' original receipts.</div>'
    ].join(''); } },

    { g: 'Online booking', id: 'booking-setup', t: 'Setting up online booking', body: function () { return [
      '<h2>Setting up online booking</h2>',
      '<p class="lede">Letting patients request appointments themselves.</p>',
      '<p>Open <span class="path">Settings → Online Booking</span> (doctor only).</p>',
      '<ol><li>Set opening and closing times and the length of each slot.</li>',
      '<li>Add holidays and half-days. Those days stop being offered.</li>',
      '<li>Set the consultation fee and the UPI id if you take payment up front.</li>',
      '<li>Turn booking <b>on</b>.</li></ol>',
      '<p>Patients use the booking page at <code>book.html</code> on your clinic',
      ' address. Share that link on WhatsApp, a card, or a QR code.</p>',
      '<div class="note"><b>The booking page shows only what it must.</b> It can read',
      ' your clinic name, address, fee and which slots are taken. It cannot read',
      ' patients, visits, receipts or your other appointments — that is enforced by',
      ' the database rules, not merely by the page.</div>'
    ].join(''); } },

    { g: 'Online booking', id: 'requests', t: 'Confirming and declining requests', body: function () { return [
      '<h2>Confirming and declining requests</h2>',
      '<p class="lede">What arrives, and what to do with it.</p>',
      '<p>A booking card sits at the top of the <span class="path">Patients</span>',
      ' screen. It is always there: quiet when nothing is waiting, and tinted with a',
      ' count when something is. Tap it to open <b>Appointments</b>.</p>',
      fig('banner-active.png','The booking card tinted, showing one waiting request','A request has arrived: the card tints and shows a count.') +
      '<h3>New requests arrive on their own</h3>',
      '<p>While the app is open, new requests appear without anyone navigating, with',
      ' a short chime and a message on screen. You do not need to switch tabs to',
      ' check.</p>',
      '<div class="note"><b>If you hear nothing:</b> browsers refuse to play sound',
      ' until someone has touched the page. Tap anywhere once after opening the app',
      ' and the chime works from then on. The on-screen message always appears',
      ' regardless.</div>',
      '<h3>Confirming</h3>',
      '<ol><li>Open the request. If the patient is already registered, the app shows',
      ' the match.</li>',
      '<li>Choose <b>Confirm</b>. An appointment is created and the patient\'s status',
      ' page updates.</li></ol>',
      '<h3>Declining</h3>',
      '<p>Choose <b>Decline</b>, optionally with a reason. <b>Declining gives the',
      ' time back</b>, so it becomes available to other patients immediately.</p>',
      '<div class="warn"><b>Two requests for the same time.</b> Bookings made before',
      ' the slot-reservation feature can still overlap. Those cards say <b>Same time',
      ' as N other requests</b>. Confirming one takes the slot; the rest must be',
      ' declined or offered another time.</div>'
    ].join(''); } },

    { g: 'Online booking', id: 'slots', t: 'How slots are reserved', body: function () { return [
      '<h2>How slots are reserved</h2>',
      '<p class="lede">Why the same time cannot be booked twice.</p>',
      '<p>A time is reserved <b>the moment a patient submits the form</b>, not when',
      ' you confirm it. From that instant the slot is struck through on the booking',
      ' page and nobody else can take it.</p>',
      fig('booking-slots.png','The booking page with two times struck through','Times already taken are struck through and cannot be chosen.') +
      '<h3>What frees a slot again</h3>',
      '<ul><li><b>You decline the request</b> — freed immediately.</li>',
      '<li><b>You delete the booking</b> from All Bookings — freed immediately.</li>',
      '<li><b>The patient cancels</b> — freed the next time you open the clinic app.',
      ' The patient\'s browser is not allowed to release slots directly, so the app',
      ' tidies up on their behalf.</li></ul>',
      '<div class="warn"><b>The trade-off to know about.</b> The booking form does not',
      ' require a login, so a nuisance submission holds a real appointment time until',
      ' you decline it. Declining takes a moment and gives the time straight back.',
      ' If this is ever abused, the clinic can be moved behind a spam check.</div>',
      '<h3>Archiving does not free a slot</h3>',
      '<p>Archiving only tidies the list. If you want the time back, decline or',
      ' delete instead.</p>'
    ].join(''); } },

    { g: 'Online booking', id: 'all-bookings', t: 'All Bookings: history and cleanup', body: function () { return [
      '<h2>All Bookings: history and cleanup</h2>',
      '<p class="lede">Every request ever made, not just the ones waiting.</p>',
      '<p>From <b>Appointments</b>, choose <b>View all bookings</b>.</p>',
      fig('all-bookings.png','All Bookings with status filters and a date range','Filters by status and date. Archived rows are hidden until you ask for them.') +
      '<h3>Filtering</h3>',
      '<ul><li>Filter by status: pending, confirmed, declined, cancelled.</li>',
      '<li>Filter by date range using <b>From</b> and <b>To</b>.</li>',
      '<li>Tick <b>Show archived</b> to include things you have tidied away.</li></ul>',
      fig('all-bookings-select.png','All Bookings in selection mode with two rows ticked','Selection mode: tick rows, then Archive or Delete.') +
      '<h3>Archiving and deleting</h3>',
      '<ol><li>Choose <b>Select</b>.</li>',
      '<li>Tick the rows you want.</li>',
      '<li>Choose <b>Archive</b> to hide them, or <b>Delete</b> to remove them',
      ' permanently.</li></ol>',
      '<div class="note"><b>Prefer Archive.</b> A booking record is tiny — ten',
      ' thousand of them is a few megabytes — so deleting saves nothing worth having,',
      ' while the history is your only evidence if a patient ever disputes an',
      ' appointment. Archive hides; Restore brings it back.</div>'
    ].join(''); } },

    { g: 'Online booking', id: 'patient-side', t: 'What the patient sees', body: function () { return [
      '<h2>What the patient sees</h2>',
      '<p class="lede">Useful when someone phones to ask.</p>',
      '<p>After booking, the patient gets a <b>reference</b> and a link that reopens',
      ' their booking. They can save it to WhatsApp, send it by SMS, copy it, or add',
      ' the appointment to their calendar.</p>',
      fig('booking-status.png','A patient booking status page with save and cancel options','What the patient sees after booking.') +
      '<h3>If they lost the link</h3>',
      '<p>The booking page has <b>Track your appointment</b>: they paste the',
      ' reference, or the whole link, and their booking opens.</p>',
      '<div class="warn"><b>There is no lookup by phone number, on purpose.</b>',
      ' Anyone could then type a number, learn whether that person has an appointment',
      ' at your clinic, and open their booking. The reference is a secret; a phone',
      ' number is not. If a patient has genuinely lost their reference, confirm who',
      ' they are on the phone and handle it yourself.</div>',
      '<h3>Cancelling</h3>',
      '<p>A patient may cancel only while the request is still <b>pending</b>. Once',
      ' you have confirmed it, the cancel button disappears and the page asks them to',
      ' phone the clinic — so a confirmed appointment cannot vanish from your day',
      ' without you knowing.</p>'
    ].join(''); } },

    { g: 'Clinic', id: 'staff', t: 'Staff and access', body: function () { return [
      '<h2>Staff and access</h2>',
      '<p class="lede">Who can see and do what.</p>',
      '<p>Open the <span class="path">Staff</span> tab to add colleagues and set',
      ' whether each is a doctor or an assistant.</p>',
      '<div class="note"><b>One login per person.</b> Shared logins make the record of',
      ' who wrote a note meaningless, and that record is the point of keeping it.</div>',
      '<h3>Leaving</h3>',
      '<p>When someone leaves, remove their access the same day. Their existing',
      ' entries stay in the record, correctly attributed.</p>'
    ].join(''); } },

    { g: 'Clinic', id: 'data', t: 'Backups and data tools', body: function () { return [
      '<h2>Backups and data tools</h2>',
      '<p class="lede">Exports, imports, duplicates and attachments.</p>',
      '<p>Everything lives under <span class="path">Settings → Data Tools</span>.</p>',
      '<ul><li><b>Export</b> — take a copy of the clinic\'s records.</li>',
      '<li><b>Import</b> — bring in patients or master lists from a spreadsheet.</li>',
      '<li><b>Duplicates</b> — find patients entered twice.</li>',
      '<li><b>Attachments</b> — see what is using storage and clear what is not',
      ' needed.</li></ul>',
      '<div class="note"><b>Take an export before a big import.</b> Imports are shown',
      ' for review before saving, but an export is the thing that lets you undo a',
      ' decision you regret an hour later.</div>'
    ].join(''); } }
  ];

  var nav = document.getElementById('nav');
  var doc = document.getElementById('doc');
  var menuBtn = document.getElementById('menuBtn');

  function idFromHash() {
    var m = /^#\/?([a-z0-9-]+)/i.exec(location.hash || '');
    return m ? m[1] : TOPICS[0].id;
  }

  function buildNav() {
    var html = '', lastGroup = '';
    TOPICS.forEach(function (t) {
      if (t.g !== lastGroup) { html += '<div class="grp">' + t.g + '</div>'; lastGroup = t.g; }
      html += '<a href="#/' + t.id + '" data-id="' + t.id + '">' + t.t + '</a>';
    });
    nav.innerHTML = html;
  }

  function render() {
    var id = idFromHash();
    var i = 0, found = -1;
    for (i = 0; i < TOPICS.length; i++) { if (TOPICS[i].id === id) { found = i; break; } }
    if (found === -1) { found = 0; }
    var t = TOPICS[found];

    var prev = TOPICS[found - 1], next = TOPICS[found + 1];
    var pager = '<div class="pager"><span>' +
      (prev ? '<a href="#/' + prev.id + '">← ' + prev.t + '</a>' : '') + '</span><span>' +
      (next ? '<a href="#/' + next.id + '">' + next.t + ' →</a>' : '') + '</span></div>';

    doc.innerHTML = t.body() + pager;
    document.title = t.t + ' — Clinic Chart Guide';

    var links = nav.querySelectorAll('a');
    for (i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-id') === t.id) { links[i].className = 'on'; }
      else { links[i].className = ''; }
    }
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    // Move focus to the article so a keyboard or screen-reader user lands on the
    // new topic instead of staying in the topic list.
    doc.focus();
    window.scrollTo(0, 0);
  }

  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  window.addEventListener('hashchange', render);
  buildNav();
  render();
})();
