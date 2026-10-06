<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/banner-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="docs/assets/banner-light.svg">
  <img src="docs/assets/banner-light.svg" alt="Until — a little closer, every day." width="1200">
</picture>

<h1 align="center">For the moments that matter.</h1>

<p align="center">
  A quiet, beautiful home for your important countdowns.<br>
  Name a moment. Set a date. Watch it get a little closer.
</p>

<p align="center">
  <img src="docs/assets/badge-version.svg" alt="Version 1.1.0" height="26">
  <img src="docs/assets/badge-offline.svg" alt="Offline PWA" height="26">
  <img src="docs/assets/badge-pages.svg" alt="GitHub Pages compatible" height="26">
  <img src="docs/assets/badge-local.svg" alt="Data saved on your device" height="26">
</p>

<p align="center">
  <a href="#features">Features</a> ·
  <a href="#get-started">Get started</a> ·
  <a href="#deploy-to-github-pages">Deploy</a> ·
  <a href="docs/guide.md">User guide</a> ·
  <a href="RELEASE.md">Release notes</a>
</p>

---

## A little anticipation. A lot to look forward to.

Until brings your milestones together in a calm space: warm beige, forest green, thoughtful typography, and gentle motion. Keep several countdowns, from next week to centuries away, with calendar-aware time remaining and a daily check-in while the app is open.

It runs as a static web app, installs on your Home Screen, and works offline after setup. Your collection stays in your browser. No account is needed.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/assets/app-dark.png">
  <img src="docs/assets/app-light.png" alt="Until's desktop interface with an empty collection, beige surfaces, green typography, and an Add countdown button." width="1200">
</picture>

<p align="center"><sub>A fresh collection starts empty. Every moment you add is your own.</sub></p>

<details>
<summary><strong>A closer look on your phone</strong></summary>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/phone-dark.png">
    <img src="docs/assets/phone-light.png" alt="Until's responsive phone layout with countdown, archive, and settings navigation." width="360">
  </picture>
</p>

</details>

## Features

| Your moments | Your rhythm |
| :--- | :--- |
| **Count days, months and years.** Create multiple named countdowns with no arbitrary duration cap. See calendar years, months, days and hours, or total days. | **A daily little nudge.** Choose a local check-in time, with an optional override for each countdown. Reopen later that day to catch up. |
| **Keep the important ones close.** Pin favourites, sort your collection, edit or duplicate a countdown, and archive moments you want to remember. | **Timezones that make sense.** Event dates keep their chosen timezone. Check-ins can follow your device, including daylight-saving changes. |
| **Make it feel like home.** Choose colours, symbols and notes. Switch between light, dark and system appearance, with motion that respects your device settings. | **Take it with you.** Install on iPhone or iPad, reopen offline, and export or restore a backup when moving devices. |

> **About reminders:** daily check-ins appear inside Until while it is visible. This static version cannot send scheduled notifications when the app is closed or the phone is locked.

## Get started

### Open the ready-made app

Extract **Until-github-pages.zip** and open `index.html`, or double-click **Until.html**. The built HTML includes its own code and styles. Use the built download for this route; the source entry point requires the development server or a build.

For Home Screen installation, publish the app over HTTPS, then open it in Safari:

1. Tap **Share → Add to Home Screen**.
2. Open the Until icon while online.
3. Wait for **Ready offline** before taking it offline.

### Run the source

Use **Node.js 24**, then run these commands from the source folder:

```sh
npm ci
npm run dev
```

Open [localhost:5173](http://127.0.0.1:5173). The development server leaves offline caching disabled; use a production preview to test installation and offline behavior.

## Deploy to GitHub Pages

| Ready-made files | Build from source |
| :--- | :--- |
| Upload the extracted release contents to your repository. Keep `index.html`, `sw.js`, the manifest, icons and `.nojekyll` together. Include this README and `docs/` for the repository presentation. | Commit the source, including `.github/workflows/pages.yml`, `package.json` and `package-lock.json`. |
| In **Settings → Pages**, choose **Deploy from a branch → main → / (root)**. | In **Settings → Pages**, choose **GitHub Actions**, then push to `main` or run the supplied deployment workflow. |
| GitHub provides the published HTTPS address once deployment finishes. | The workflow audits dependencies, checks types, runs tests, verifies the release, and deploys `dist/`. |

Root sites, repository paths and custom domains use the same build. No repository-name edits or custom secrets are needed. If your default branch has a different name, adjust the workflow's branch setting.

**[Read the full deployment and installation guide →](docs/guide.md)**

## Your collection stays with you

Until stores countdowns on this device, in this browser. It does not include analytics, external fonts, remote runtime scripts or an account service. Ordinary hosting requests still go to your hosting provider.

Use **Settings → Export backup** before changing devices, moving the app to another address, or clearing website data. **Import backup** validates the collection before replacing it. Unreadable saved data is preserved for recovery; blocked storage is clearly marked **Session only**.

<details>
<summary><strong>Storage, updates and security details</strong></summary>

- Browser storage and exported backups are not encrypted. Keep private notes and backup files accordingly.
- A local-file collection and a hosted collection use separate storage. Export and import to move between them.
- Offline readiness checks the complete cache. Clearing website data removes both the collection and the offline app; browsers may also reclaim storage.
- Updates download a complete version before offering **Update & reopen**. Save or cancel open edits first.
- Generated HTML includes a script/style hash policy. Publish complete builds together; rebuild rather than hand-editing the generated HTML or worker.

More detail is in the [user guide](docs/guide.md) and [release notes](RELEASE.md).

</details>

## Built with care

**React 19 · TypeScript · Vite · Native browser storage · Service workers**

The interface uses native CSS and IntersectionObserver for motion. Runtime assets are bundled locally, and the production build produces portable HTML with a complete offline cache.

```sh
npm run typecheck
npm test
npm run build
npm run preview
```

Open [localhost:5181](http://127.0.0.1:5181) for the production preview.

Release **1.1.0** passes **35 automated tests**, type checking and build integrity checks. These cover long dates, calendar boundaries, timezones, daylight saving, check-ins, storage failure, backup validation, offline caches and motion fallback. Validation scope and device-testing limits are recorded in [RELEASE.md](RELEASE.md).

**[Explore the development guide →](docs/development.md)**

---

<p align="center">
  <strong>Make the waiting part of the joy.</strong><br>
  <sub>Until · Things worth waiting for.</sub>
</p>
