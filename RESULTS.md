## 2026-11-09 — Push-CI eingefroren (Owner-Freeze)

- Check/Preview/Auto-Promote/Gemini nur noch `workflow_dispatch`.
- Keine Tooling-Pflege; Quelle habits→journal / learn→fitness.

## 2026-11-09 — Node Tooling (Biome/knip/engines/smoke)

- `engines.node: >=22.13`, Scripts `tooling:biome|knip|check`.
- Check.yml: Biome format auf `scripts/`; knip report (continue-on-error).
- SSOT-Vorlagen: `~/vitalos/tooling/`.


## 2026-11-09 — Remote-vitalos gelöscht; Pre-Push ohne vitalos-Deploy

`origin/vitalos` entfernt. Pre-Push: kein lokaler Firebase-Deploy mehr auf Branch vitalos; Reminder/Build auf `dev`.

## 2026-11-09 — Shell-Pin auf origin/master (CI/AGENTS)

CI: kein Auto-Vorspulen von `vitalos` mehr; Merge-Agent nur `master`; PR-Checks
auf `[master, dev]`. AGENTS Release-Weg: `dev → master` + Shell-Pin.
