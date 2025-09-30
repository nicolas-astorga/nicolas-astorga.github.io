# nicolas-astorga.github.io

This is a minimal static site for **Nicolás Astorga**. It’s designed to look and feel close to [Kasia Kobalczyk’s website](https://kasia-kobalczyk.github.io/) but:
- it **starts with “About Me”** at the very top (no hero block), and
- there is **no “Accomplishments”** section.

## How to publish

1. Create a repository named **`nicolas-astorga.github.io`** in your GitHub account.
2. Upload (or push) the contents of this folder to the repo root (e.g., `index.html`, the `assets/` folder, etc.).
3. Go to **Settings → Pages** and set **Source** to “Deploy from a branch”, then keep **Branch** set to `main` and `/ (root)`.
4. Wait a minute and visit **https://nicolas-astorga.github.io**.

No build step is required because this is a plain static site (no Hugo/Quarto).

## Replace your profile photo
Replace the placeholder image at `assets/img/profile.svg` with your own photo named `profile.jpg` or `profile.png` and update the `<img>` tag in `index.html` accordingly (or just keep the SVG if you prefer).

## Where to edit your content
- **About / Research / Experience / Education / Skills / Contact**: `index.html`
- **Full publications list**: `publications.html`
- **Colors / spacing / fonts**: `assets/css/styles.css`

## Notes
- The layout and content were created from your CV and Scholar profile link you provided.
- If you prefer to use the Wowchemy/Hugo template (like Kasia), we can also generate a Hugo project with matching sections and set up a GitHub Action to build — just say the word.
