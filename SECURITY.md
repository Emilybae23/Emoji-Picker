# Security Policy

## Reporting a Vulnerability

If you discover a vulnerability, please open an issue with a clear description of:

- Impact and affected components/files
- Steps to reproduce
- Suggested remediation if known

Do **not** include any sensitive personal data in reports.

## Design Principles

- No external network requests
- Minimal permissions (`storage` only)
- Clear separation of UI and content script
- Defensive coding: input validation, no `eval`, no inline event handlers

## Known Limitations

- Time-to-crack and entropy are heuristic estimates, not guarantees.
- The local breach/common-password list is small by design for footprint.
