# Pro Emoji Picker - Chrome Extension

A lightweight, modern, and privacy-focused emoji picker for Chrome. Browse thousands of emojis, search by category, and enjoy features like dark mode and click history.

## Features

- **Massive Emoji Library:** Dynamically generated using Unicode ranges (no heavy JSON files).
- **Recently Used:** Automatically saves your favorite emojis for quick access.
- **Dark Mode:** Sleek dark theme toggle for late-night workflows.
- **Sound Feedback:** Satisfying "pop" sound when an emoji is copied.
- **Searchable:** Filter emojis instantly within each category.
- **History Management:** Dedicated button to clear your "Recently Used" list.

## Installation

1.  **Clone or Download** this repository to your local machine.
2.  Open Chrome and navigate to `chrome://extensions/`.
3.  Enable **Developer Mode** (toggle in the top right).
4.  Click **Load unpacked** and select the root folder of this project.
5.  Pin the extension to your toolbar for easy access!

## File Structure

```text
emoji-picker-extension/
├── assets/             # Sound files and icons
├── manifest.json       # Extension configuration
├── popup.html          # UI Structure
├── popup.css           # Modern styling & Dark Mode
├── popup.js            # Core logic & Storage
└── emojis.js           # Emoji Unicode generation logic
```
