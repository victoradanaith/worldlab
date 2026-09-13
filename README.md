# Dio's Constellation

A star map of every subject Dio is learning — at school and beyond — that you
can connect together over time. Each star is a subject, colored by its World
Lab category (Inner World, Com Lab, Logic Lab, System Lab, Growth Lab); drag
stars to arrange them, click one then another to draw a connection between
them, and add/edit/delete subjects from the side panel.

It's a plain static site (HTML/CSS/JS, no build step), so it can be hosted for
free on GitHub Pages.

## Running it locally

Just open `index.html` in a browser, or serve the folder so relative paths and
the Firebase SDK behave the same as they will in production:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Without any setup, it works immediately using your browser's local storage —
data stays on that one device/browser.

## Turning on cross-device sync (Firebase)

By default the app saves only to the browser you're using. To make it sync
across devices (e.g. your phone and your laptop), connect a free Firebase
project:

1. Go to <https://console.firebase.google.com>, sign in, and create a new
   project (you can turn off Google Analytics for it, it's not needed).
2. In the project, open **Build → Firestore Database → Create database**.
   Choose any region close to you, and start in **production mode** (the
   security rules below will open up just the one document this app needs).
3. Go to **Project settings** (gear icon) → **General** → scroll to
   **Your apps** → click the **</>** (web) icon to register a new web app.
   You don't need Firebase Hosting — just registering the app is enough.
4. Copy the `firebaseConfig` object it shows you.
5. Open `firebase-config.js` in this repo and paste your values in, replacing
   the `YOUR_...` placeholders.
6. In the Firebase console, go to **Firestore Database → Rules** and replace
   the rules with:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /boards/main {
         allow read, write: if true;
       }
       match /{document=**} {
         allow read, write: if false;
       }
     }
   }
   ```

   Click **Publish**.

7. Reload the page — the badge under the subject count should switch from
   "Saved on this device only" to "Synced across devices".

### About security

These rules leave the one board document open to anyone who has your Firebase
config values — there's no login. Once this is deployed on GitHub Pages, the
config is visible to anyone who visits the page (that's normal for a
client-only Firebase app; it isn't a secret key, see the comment in
`firebase-config.js`). For a personal family curriculum tracker this is a
reasonable trade-off, but it does mean anyone who finds the page's URL and
looks at its source could read or edit the board. If you'd rather lock it down
to just you, the next step would be adding Firebase Authentication (e.g.
Google sign-in restricted to specific email addresses) — ask if you'd like
that added.

## Deploying with GitHub Pages

Once this is on your default branch:

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to "Deploy from a branch".
3. Pick your default branch and the `/ (root)` folder, then **Save**.
4. GitHub will publish it at `https://<your-username>.github.io/<repo-name>/`
   (shown on that same Pages settings screen once it's live).
