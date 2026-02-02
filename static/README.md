# Static build (CPANEL upload)

This folder contains the **HTML/JS** version of the site. Binary assets (images and compiled CSS/JS bundles) were removed as requested.

## What to upload
Copy **all** contents of this `static/` folder to your server, including:

- `index.html`
- `product.html`
- `scripts/` (client-side JS)
- `assets/` (place your compiled CSS here)
- `images/` (place your images here)
- `404.html`

## Important
- The `assets/` and `images/` folders are intentionally empty (only `.gitkeep` files) because binary files were removed.
- Before upload, add your CSS bundle into `static/assets/` and all images into `static/images/`.

## Notes
- Product pages are accessed as:
  - `https://your-domain.tld/product.html?id=obsessio-x1`
- Keep the folder structure intact so relative paths keep working.
