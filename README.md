# Ximie clone

A self-contained clone of the [Ximie](https://fine-code-quest-go.base44.app/) learning app UI: a Duolingo-style path for learning HTML, CSS and JavaScript.

## Run

```bash
npm start
```

Then open <http://localhost:3000>. No dependencies or build step are required (Node.js 18+).

## Web app and Android APK

- The web app is deployed to GitHub Pages at <https://randomcatuser.github.io/Ximie/> by `.github/workflows/deploy.yml` on every push to `main`.
- `.github/workflows/android.yml` builds a signed WebView APK with Gradle and Android SDK on the runner. Trigger it manually from the Actions tab, or push a `v*` tag to build and attach the APK to a GitHub release. The `v1.0.0` APK is at <https://github.com/RandomCatUser/Ximie/releases/tag/v1.0.0>.
- The APK is a thin WebView pointed at the Pages URL above, so it always loads the latest published web app. It needs an internet connection.
- GitHub Pages has no server-side routing; `404.html` preserves deep links such as `/lesson/html-1-1` and restores them in the app.

## What's included

- Landing / course path with HTML, CSS and JavaScript tracks
- All 3 courses and 155 exercises: the original 27 lessons plus four new HTML lessons on tables/colspan, images, audio/video and details/embeds
- Lesson player with multiple choice, word-bank and code exercises (including live HTML/CSS/JS previews)
- Daily recall quiz in the navigation, profile and settings screens (sign-in and leaderboard show an under-development notice)
- XP, gems, hearts, streaks, daily goal and achievements stored locally in `localStorage`
- Original colours, typography and responsive header/bottom navigation, with a custom dark-creature reading logo (`assets/logo.svg`)

## Notes

This is a front-end clone. Sign-in and the leaderboard are not implemented yet — those routes display an under-development notice. No data is sent anywhere. Completed lessons live under the `ximie.state.v1` key and an in-progress lesson is resumed from `ximie.session.v1`; clear both to start over. Remote images in code previews fall back to a local panda placeholder when they cannot load.
