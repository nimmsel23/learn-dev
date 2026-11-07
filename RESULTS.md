## 2026-11-07 — Gemini CI-Agent installiert

- CI-Agent fuer Check-Fehler, Dependabot-PRs und Merge-Konflikte ergänzt; Tailwind-/Paket-Upgrades bleiben erhalten.
- Quellreparaturen werden auf den betroffenen Branch geschrieben; Zielbranch-Reparaturen erhalten einen PR und werden erst nach gruenem Check gemergt.
- Gemini-API und `SYNC_TOKEN` muessen als Actions-Secrets vorhanden sein. Nachweis: erster erfolgreicher automatischer Reparatur- und Deploy-Lauf steht aus.

## 2026-10-21 — Gemeinsamer Changelog

Universalisierten VitalOS-Release-Dialog über vendorte Vite-Module eingebunden. Standalone mit eigener Bestätigung; eingebettet unterdrückt zugunsten des zentralen Shell-Dialogs.


## 2026-10-31 — Dependabot

Enabled Dependabot alerts and security updates. Configured weekly GitHub Actions and npm/pnpm updates; version updates target `dev`. Minor/patch updates are grouped; vendored mini-app-shell copies stay maintained at their source. Validated YAML, repository manifest paths and update targets.
