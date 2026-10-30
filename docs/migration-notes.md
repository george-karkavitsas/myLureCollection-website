# Migration inspection and verification

Inspected 30 October 2026. Workspace: G:\GVKSoftware\AndroidApplications\My Lure Collection\webpage. The folder and remote repository were empty; no existing implementation was overwritten. Origin is https://github.com/george-karkavitsas/myLureCollection-website.git.

## Source structure and link destinations

All main navigation items are separate pages, not section anchors:

| Label | Original destination | Independent destination |
| --- | --- | --- |
| Logo / brand / Home | https://www.mylurecollection.com/ | ./ |
| About | https://www.mylurecollection.com/about | about/ |
| Features | https://www.mylurecollection.com/features | features/ |
| Contact | https://www.mylurecollection.com/contact | contact/ |
| Privacy Policy | https://www.mylurecollection.com/privacy-policy | privacy-policy/ |

The homepage contains, in order: rocky-coast hero with the original slogan, Play badge and QR code; Passionate Anglers panel over fishing boats; five screenshot columns; dark contact section; white copyright/social footer. The About page has slightly different introductory text, which is preserved. Contact's separate page uses a light background. Features is the standalone five-image gallery. Privacy Policy is a separate text page.

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

Desktop retains the 144px sticky header, Poppins fonts, navy brand and download button, 80px outer gutters, 957px hero, 803px boat section, 726px cropped screenshot columns, neutral backgrounds, dark home contact block, and white footer. The original four-layer curved boat divider and privacy title rule are recreated using local SVG/CSS.

The observed Wix desktop layout puts most of the hero slogan, Play badge and QR code beyond the right viewport edge, and clips the left of the About panel. Those elements have been placed inside the viewport so the full content and download controls remain usable. At 375px and 768px, the source renderer maintains a 980px minimum scroll width; this migration adapts the layout. Phones have a keyboard-accessible menu, stacked sections, and full screenshot images. Tablets use two gallery columns. These responsive corrections mean the result is not pixel-identical to Wix's clipped narrow rendering.

The Wix form engine is replaced with a disabled preview and an explicit delivery notice. Browser-native field constraints and accessible inline feedback are provided. There are no Wix entrance effects, analytics, tracking scripts, APIs, or external image/font requests. The full original policy wording is unchanged; headings are now semantic h2 elements. Full-resolution source photographs are retained; runtime photos use high-quality 2560px local JPEG derivatives to reduce transfer size.

## Verification

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
