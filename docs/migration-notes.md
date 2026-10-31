# Migration inspection and verification

Inspected 30 October 2026. Workspace: G:\GVKSoftware\AndroidApplications\My Lure Collection\webpage. The folder and remote repository were empty; no existing implementation was overwritten. Origin is https://github.com/george-karkavitsas/myLureCollection-website.git.

## Source structure and link destinations

Main navigation uses sections within one continuous page, as requested by the owner. Home, About, Features, and Contact scroll to anchors; visitors can continue scrolling through every other section. Privacy Policy remains a separate page.

| Label | Current navigation destination | Previously published path |
| --- | --- | --- |
| Logo / brand / Home | #home | / |
| About | #about | /about/ forwards to ../#about |
| Features | #features | /features/ forwards to ../#features |
| Contact | #contact | /contact/ forwards to ../#contact |
| Privacy Policy | privacy-policy/ | /privacy-policy preserved |

On Privacy Policy, the four section links return to the main page at the selected anchor. Older section paths use a small static redirect with a normal link fallback, so bookmarks remain useful on GitHub Pages and under repository subpaths. Edit the shared main-page sections in `src/site.mjs`; `node scripts/build.mjs` regenerates the website and compatibility forwards.

The homepage contains, in order: rocky-coast hero with the original slogan, Play badge and QR code; Passionate Anglers panel over fishing boats; five screenshot columns; dark contact section; white copyright/social footer. About, the five-image Features gallery, and Contact remain together on the homepage. Privacy Policy is a separate text page.

External destinations preserved exactly:

- Play badge, QR image link, and Get it now: https://play.google.com/store/apps/details?id=co.uk.gvksoftware.mylurecollection
- Footer X: https://x.com/YourFishingApp (the original destination, even though its name looks like a placeholder).
- Google Play Services privacy: https://www.google.com/policies/privacy/
- AdMob privacy: https://support.google.com/admob/answer/6128543?hl=en
- Firebase Analytics privacy: https://firebase.google.com/policies/analytics
- Policy email: mailto:info@gvksoftware.co.uk
- Policy website: http://www.gvksoftware.co.uk

Copyright retained verbatim: © 2025 by George Karkavitsas. Powered and secured by GVK Software.

Titles, available descriptions, favicon, Apple icon, Open Graph title/description/URL/site/type, Twitter card/title/description, and site-verification metadata were preserved. The original policy page has no description. No sharing image was exposed in the original metadata. Wix generator/runtime metadata and generic “Business, tagline” keywords were omitted.

## Visual matching and intentional differences

Desktop retains the 144px sticky header, Poppins fonts, navy brand and download button, 80px outer gutters, 957px hero, 803px boat section, 726px cropped screenshot columns and 172px white footer. Following the owner’s later design request, the contact section is now a more compact navy email panel. The original four-layer curved boat divider and privacy title rule are recreated using local SVG/CSS.

Wide desktop placement matches the original fixed coordinates: at a 2192px viewport (2177px content width), the slogan starts at x=1315, the 314px Play badge at x=1441, and the QR code at x=1488. The 629px About panel follows the original centered-page offset, and the contact copy and form sit in the centers of the two equal page halves. At smaller desktop widths, placement is bounded inside the viewport to keep the content usable. At 375px and 768px, the source renderer maintains a 980px minimum scroll width; this migration adapts the layout. Phones have a keyboard-accessible menu, stacked sections, and full screenshot images. Tablets use two gallery columns. These responsive corrections mean the result is not pixel-identical to Wix's clipped narrow rendering.

At the owner’s request, both contact sections now use the same direct email approach as https://gvksoftware.co.uk/#contact: a visible mailto:info@gvksoftware.co.uk link that opens the visitor’s email app. There is no form, submission endpoint, message storage, or delivery-service account to configure. The visitor writes and sends the email in their email app. No message is sent automatically. There are no Wix entrance effects, analytics, tracking scripts, APIs, or external image/font requests. The full original policy wording is unchanged; headings are now semantic h2 elements. Full-resolution source photographs are retained; runtime photos use high-quality 2560px local JPEG derivatives to reduce transfer size.

## Initial migration verification

- Built all five pages and ran the static check script: headings, local page/asset paths, form constraints, disabled submission, CSS assets, and no Wix runtime references passed.
- Opened all five original and recreated pages at 375×812, 768×1000, and 1440×1000 Chromium viewports. Captured matching full-page screenshots for visual review.
- Recreated pages had no horizontal overflow at any of those widths. All original source pages exposed 980px scroll width at 375px and 768px.
- Checked the loaded local logo, photos, Play SVG badge, QR code, five full-resolution screenshots, and X icon. Scrolled the long homepage to load the lazy screenshot assets.
- Checked mobile menu navigation, field labels, missing required-name feedback, invalid-email feedback, and the disabled Submit state. No original or recreated form was submitted to a recipient.
- Compared complete policy text against the live DOM after normalizing whitespace: identical.
- Checked local root and repository-subpath routes, navigation URLs, and preserved external hrefs. External mail/social links were inspected without sending messages or changing external state.
- No warnings or errors were reported by the preview tab's browser console.
- No public deployment or live-domain change was performed. Hosted redirects, real form delivery, real mobile devices, and non-Chromium engines remain unverified.

Original page source, browser width reports, and screenshots are retained locally under `docs/reference/` (gitignored). Generated Wix HTML is only inspection material and is not used by the independent pages. All required runtime assets are committed under assets/.

## Screenshot correction

The supplied original/recreated screenshots revealed wide-screen positioning errors in the first implementation. Rechecked the live source at 2192px and matched hero control coordinates and sizes, About panel coordinates and typography, contact column positions, form row spacing, logo scale, and the footer height. At that stage, the corrected homepage and live source both measured 3831 CSS pixels high in this browser. The later email-contact update replaces the preview form and its notice. Reference captures are original-home-wide.png and corrected-home-wide.png under docs/reference/.

## Email contact update

The owner requested email delivery or the contact approach used on the GVK Software site. Inspected that live site and confirmed its published address and mailto link are info@gvksoftware.co.uk. Replaced the inactive form on the homepage and Contact page with that address, an email link, and “Opens your email app.” Updated the contact copy and search/sharing descriptions, removed the unused form styles and JavaScript, and updated the static checks. A configured email app or browser mail handler is needed to open the link; the address is visible and can also be copied into webmail. No real email or test message was sent. This needs no email service credentials or backend.

## Contact design refinement

At the owner’s request, redesigned only the contact component after replacing its form. Removed the oversized empty space, added a compact navy layout, a white email card with an envelope icon and a “Write an email” action, and clearer type hierarchy. The Contact page presents this panel within a neutral surround; the homepage uses a full-width navy section. Both stack on smaller screens. The entire card remains a normal mailto link to info@gvksoftware.co.uk, with visible keyboard focus, an accessible name, and reduced-motion support. No form service, message sending, or delivery confirmation was introduced.

## GitHub Pages activation — 30 October 2026

After the owner explicitly requested the live switch, enabled GitHub Pages from `main` and `/` (repository root), and set the custom domain to `www.mylurecollection.com`. GitHub created the committed `CNAME` file. Preserve that file when rebuilding the pages.

Changed only the website DNS records in the owner's Wix domain account:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | george-karkavitsas.github.io |

Both Wix nameservers remain in place. Domain registration, subscriptions, the Wix site, and non-website DNS records were not changed. The previous three Wix A records and Wix `www` alias are saved in the local, ignored `docs/reference/dns-before-cutover.txt` for rollback.

Verified the new records directly against the authoritative nameserver and confirmed the live HTTP homepage returns 200 from GitHub.com with the new email contact component. All five pages passed the static checks. DNS caches and GitHub's HTTPS certificate issuance can take time after the change. At the initial activation check the custom-domain certificate was still pending; HTTPS must be verified and enforcement enabled once GitHub issues it. Do not bypass browser certificate warnings.

Future updates: edit `src/site.mjs`, `src/privacy-policy.html`, or `assets/`; run `node scripts/build.mjs` and `node scripts/check.mjs`; then commit and push `main`, including the generated HTML pages. GitHub Pages republishes automatically. Run `node scripts/serve.mjs` for the local preview at http://127.0.0.1:4173/.

## HTTPS diagnostics

The manual Actions workflow `.github/workflows/diagnose-pages.yml` can be run from Actions → Diagnose Pages DNS and HTTPS → Run workflow. It checks public DNS (including IPv6 and CAA), GitHub's published health checker, HTTP routing, and certificate-verified HTTPS for both the root and `www` hostnames. It has no repository token permissions and sends no messages. Its RubyGems dependency runs only on the temporary diagnostic runner; the website itself remains plain static files with no runtime packages.

During the initial HTTPS cutover, the public and authoritative DNS records matched GitHub's required configuration. An independent runner in westus3 confirmed the root redirected to `www` and the homepage was served by GitHub. GitHub's published `github-pages-health-check` 1.19.2 reported the primary domain valid, served by Pages, not proxied, and eligible for HTTPS. However, the Pages API health result still identified the former Cloudflare destination. Secure connections to both hostnames failed because the edge servers presented `CN=*.github.io` instead of a certificate for this domain.

Evidence: https://github.com/george-karkavitsas/myLureCollection-website/actions/runs/41151251906. The failed HTTPS diagnostic is an intentional check exposing the missing certificate, separate from the successful site build. A provisioning restart using GitHub's documented custom-domain remove-and-readd procedure was performed at 00:28 UTC on 31 October. DNS was not changed again. Local records and a draft escalation report are under the ignored `docs/reference/` directory.


## One-page navigation correction

Replaced the section-only navigation pages with native #home, #about, #features, and #contact links. The homepage retains all four sections in their original order. The sticky-header scroll offsets remain 144px on desktop/tablet and 100px on phones; reduced-motion visitors get immediate scrolling. The mobile menu closes after selection and the active section link follows the URL hash. Privacy Policy is a separate page with return links to the homepage sections. Previously shared /about/, /features/, and /contact/ paths forward to the corresponding main-page anchors instead of isolating that content.

Verified the navigation correction locally in Chromium at 375px, 768px, and 1440px. All section links keep all four sections in the same document; manual scrolling continues beyond About. The About anchor aligns below the sticky header (100px on phones, 144px on desktop). The mobile menu closes after selection. Privacy navigation returns to the requested homepage section, and all three old section URLs plus a repository-subpath URL redirect correctly. No horizontal overflow or browser console warnings/errors were observed. The build and section-navigation regression checks pass.

## HTTPS resolved and live navigation verified

GitHub subsequently approved a certificate covering both `www.mylurecollection.com` and `mylurecollection.com`, with HTTPS enforcement enabled. Both addresses were checked with normal certificate verification and returned HTTP 200. The navigation fix (94738ee) finished deploying successfully. The public HTTPS homepage now uses section anchors; clicking About in the live browser kept all four sections available in the same document, with no overflow or console warnings/errors. The old About path also serves the section forward. The earlier provisioning diagnostic describes the failure before this resolution, not the current HTTPS status.
