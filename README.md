# My Lure Collection website

Independent static recreation of [mylurecollection.com](https://www.mylurecollection.com/), inspected on 30 October 2026. The existing Wix site remains live. This repository has not been deployed and contains no custom-domain CNAME or deployment workflow.

## Run locally

Requires Node.js 18 or newer. No packages need installing.

~~~sh
npm start
~~~

Open http://127.0.0.1:4173/. Stop the server with Ctrl+C. The server binds only to the local computer. To test repository-subpath links, open http://127.0.0.1:4173/myLureCollection-website/.

After editing source content:

~~~sh
npm run build
npm run check
~~~

Refresh the browser after changes. The generated HTML is committed, so the published website needs no Node.js runtime or build service. Any ordinary static server with directory-index support can serve it.

## Structure and editing

| Location | Purpose |
| --- | --- |
| `src/site.mjs` | Original text, metadata, navigation, and shared HTML components. Edit here, then build. |
| `src/privacy-policy.html` | Complete original privacy text and links, with semantic headings. Edit here, then build. |
| `index.html` | Generated homepage. |
| `about/`, `features/`, `contact/`, `privacy-policy/` | Generated separate pages, each with an index.html. |
| `assets/styles.css` | Layout, colors, local fonts, and responsive breakpoints. |
| `assets/site.js` | Mobile menu, accessible field feedback, and submission guard. |
| `assets/images/` | Original full-resolution photos, screenshots, QR code, SVG branding, badge, and section curve. |
| `assets/fonts/` | Self-hosted Poppins fonts and their OFL license. |
| `scripts/` | Dependency-free build, local server, and static checks. |
| `docs/asset-sources.json` | Original asset provenance. |
| `docs/migration-notes.md` | Source links, verification, and deliberate differences. |

To replace an image, replace the corresponding asset or change its filename in `src/site.mjs`, and update its intrinsic width, height, and alt text. Keep asset paths relative. The two source photographs are 5922×2961 and 6000×3375; the five app screenshots are 1284×2778. The QR image encodes the original destination and should be replaced if that destination ever changes. The full-resolution source photographs are retained unchanged. Pages use local 2560px JPEG copies at quality 90, reducing their combined transfer size from about 28 MB to 2 MB. On Windows, run `./scripts/optimize-images.ps1` after replacing those sources, then build. Other systems can regenerate these two `-web.jpg` files with any image editor at the same dimensions.

## Contact form

Both forms preserve First Name (required), Last Name, Email (required and validated), Subject, and Message. Submission is disabled with a visible explanation; blur/input validation supplies associated live feedback. There is no endpoint, storage, Wix API, fake success, or message sending. No real test submission was made.

The simplest replacement is a hosted HTML-form service such as [Formspree](https://formspree.io/html/), which avoids a custom backend. It requires an account, a form endpoint, and a verified receiving email. Its [Free plan](https://formspree.io/plans/) currently allows 50 submissions per month; paid plans are available if needed (checked 30 October 2026). Nothing has been registered or purchased.

Once a service is selected, configure it, replace the guard with delivery handling, and enable Submit only when ready. Show success only after the service accepts the message; handle failures without discarding the visitor's text. A public form ID is not a secret API key. Never put private credentials in HTML or JavaScript. Obtain permission before sending test messages to a real inbox.

## Paths and future hosting

All navigation and asset paths are relative, supporting both a custom-domain root and GitHub Pages' `/myLureCollection-website/` subpath. Directory pages use trailing slashes. The development server redirects `/privacy-policy` to `/privacy-policy/`; GitHub Pages normally handles directory redirects too. Confirm this on the eventual host, and configure a redirect if necessary. The other three original page paths follow the same pattern. Home also supports `#about`, `#features`, and `#contact`, with sticky-header scroll offsets.

Canonical URLs and Open Graph URLs retain the existing custom domain and original extensionless public paths. If a public staging copy is ever enabled, decide its indexing/canonical policy before publishing; retain the original-domain canonicals for the eventual domain migration.

## Publishing later with GitHub Pages

Do this only after approving a public preview or launch:

1. Build and check; commit the generated pages and assets.
2. In the repository's **Settings → Pages**, select **Deploy from a branch**, then **main** and **/(root)**, and save. The included .nojekyll allows plain static hosting. No Actions workflow is required.
3. Verify the Pages repository-subpath URL, separate-page redirects, assets, keyboard/mobile navigation, and form delivery setup.
4. When separately authorized, configure the custom domain and HTTPS, verify every original public path, and plan the DNS cutover. Only then consider ending Wix hosting.

Pages has not been enabled as part of this migration. Domain, DNS, Wix subscription, and live traffic have not been changed.

Before replacing Wix: approve the visual result, configure real contact delivery, choose hosting, verify redirects/HTTPS/canonicals on that host, and authorize a later domain cutover. Browser checks here used Chromium viewport resizing; real Android/iOS devices and other browser engines were not tested.
