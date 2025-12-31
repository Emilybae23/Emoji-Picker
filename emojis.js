// Unicode ranges for different emoji categories (SAFE)
export const emojiCategories = {
  Smileys: [0x1f600, 0x1f64f],
  Animals: [0x1f400, 0x1f43f],
  Food: [0x1f32d, 0x1f37f],
  Nature: [0x1f330, 0x1f343],
  Activities: [0x1f3c2, 0x1f3f0],
  Travel: [0x1f680, 0x1f6c5],
  Objects: [0x1f4a1, 0x1f4fb],
  Symbols: [0x1f300, 0x1f32f],
  New: [0x1fae0, 0x1faf6],
};

// Helper to convert hex code to emoji character
export const getEmoji = (hex) => String.fromCodePoint(hex);
