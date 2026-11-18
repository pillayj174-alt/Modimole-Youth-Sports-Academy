# Modimolle Youth Sports Academy (MYSA) Website

A responsive, static website starter for Modimolle Youth Sports Academy. It is designed to publish directly from GitHub Pages and includes its HTML, CSS, JavaScript and locally bundled SVG artwork.

## Project contents

- `index.html` — homepage and all website sections
- `assets/css/style.css` — responsive layout, colours, typography and component styling
- `assets/js/app.js` — mobile navigation, automatic copyright year and enquiry form behaviour
- `assets/images/` — locally bundled SVG artwork used by the website
- `.nojekyll` — tells GitHub Pages not to run Jekyll processing

## Publish with GitHub Pages

1. Create or open the GitHub repository for MYSA.
2. Upload **all files and folders in this ZIP** to the repository root. Do not upload only the ZIP itself.
3. Ensure `index.html` is in the repository root (not inside another nested folder).
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for GitHub Pages to publish the site. The Pages screen will show the live website address.

## Required content updates before launch

Search the project for square-bracket placeholders such as `[Add official contact number]`, `[Add official email address]`, `[XX]` and replace them with verified MYSA information. Update the programme descriptions, history, player stories, achievements, social media links and development priorities to match approved facts.

### Configure the contact form

GitHub Pages hosts static files and does not run a server to receive form submissions. The included form opens the visitor's default email application using a `mailto:` link.

1. Open `assets/js/app.js`.
2. Replace `REPLACE-WITH-OFFICIAL-MYSA-EMAIL@example.com` with MYSA's real, monitored email address.
3. Commit the change to GitHub.

For a form that submits without opening the visitor's email application, connect a form provider or a secure backend and update the form handler. Do not put private API keys or passwords in this public repository.

## Important launch checks

- Replace placeholder contact details and all `[XX]` statistics with verified details.
- Add only approved photographs. Obtain parent/guardian consent before publishing identifiable images or personal details of children.
- Do not publish children's ID numbers, home addresses, medical details or other sensitive information.
- Add real social media links and confirm all contact channels are monitored.
- Confirm any sponsorship amounts, bank details, affiliations, registration credentials and tax claims before publishing them.
- Test the website on a phone and desktop after deployment.

## Design

Brand palette: navy `#071B35`, blue `#1455A0`, gold `#F4B942`, white and charcoal. The site uses no external CSS or JavaScript libraries. All image artwork is included locally in this package.
