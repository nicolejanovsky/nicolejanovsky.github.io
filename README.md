# Nicole Janovsky — Portfolio

A responsive static portfolio with animated project previews, scroll reveals, keyboard-accessible case study dialogs, and reduced-motion support.

## Publish with GitHub Pages

1. Create a GitHub repository. Name it `YOUR-USERNAME.github.io` for a personal homepage, or choose another name for a project site.
2. Upload **the contents** of the `dist` folder to the repository root: `index.html`, `style.css`, `script.js`, and `assets`. Do not upload the outer `dist` folder.
3. In the repository, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose **main**, choose **/ (root)**, and save.
5. GitHub shows the website URL after deployment completes.

All asset links are relative, so the same files work on a personal homepage or a repository subpath. No build step or dependencies are needed. Google Fonts are optional; local fallback fonts are provided.

## Personalize

- Contact: replace the `contact-preview` paragraph in `index.html` with your email or LinkedIn link. Example: `<a class="contact-link" href="mailto:YOUR-EMAIL">Say hello ↗</a>`. The current page honestly marks contact information as coming soon.
- Copy and page sections: edit `index.html`.
- Case studies: edit the `projects` object in `script.js`.
- Colors, layouts, animation, and typography: edit `style.css`.
- Images: replace files inside `assets` and update references if filenames change.

The Yogger mobile images are supplied work. Milestone and the Yogger website preview are illustrative HTML interface directions and are identified as such in their case studies. Confirm case study wording and your role before using this portfolio publicly. No unverified testimonials, performance statistics, or conversion outcomes are included.

The `dist` folder includes `.nojekyll`, keeping this a plain static site.
