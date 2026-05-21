// River of Life Memorization — verse plan (references only).
// Verse text is NOT bundled. It is fetched at runtime from Crossway's ESV API
// (https://api.esv.org) and cached in browser localStorage. The user supplies
// their own free API key via Settings.

window.VERSE_PLAN = {
  meta: {
    name: "River of Life Memorization",
    note: "ESV text is fetched from api.esv.org at runtime. Set your API key in Settings.",
  },
  months: [
    {
      month: 1,
      theme: "The Armor of God",
      passage: "Ephesians 6:12-18",
      refs: ["Eph 6:12", "Eph 6:13", "Eph 6:14", "Eph 6:15", "Eph 6:16", "Eph 6:17", "Eph 6:18"],
    },
    {
      month: 2,
      theme: "Pressing Toward the Goal",
      passage: "Philippians 3:10-14",
      refs: ["Phil 3:10", "Phil 3:11", "Phil 3:12", "Phil 3:13", "Phil 3:14"],
    },
    {
      month: 3,
      theme: "The Beatitudes",
      passage: "Matthew 5:3-10",
      refs: ["Matt 5:3", "Matt 5:4", "Matt 5:5", "Matt 5:6", "Matt 5:7", "Matt 5:8", "Matt 5:9", "Matt 5:10"],
    },
    {
      month: 4,
      theme: "The Suffering Savior",
      passage: "1 Peter 2:21-25",
      refs: ["1 Pet 2:21", "1 Pet 2:22", "1 Pet 2:23", "1 Pet 2:24", "1 Pet 2:25"],
    },
    {
      month: 5,
      theme: "Vision of the Church",
      passage: "Revelation 22:1-5",
      refs: ["Rev 22:1", "Rev 22:2", "Rev 22:3", "Rev 22:4", "Rev 22:5"],
    },
    {
      month: 6,
      theme: "Equipping the Saints",
      passage: "Ephesians 4:11-16",
      refs: ["Eph 4:11", "Eph 4:12", "Eph 4:13", "Eph 4:14", "Eph 4:15", "Eph 4:16"],
    },
    {
      month: 7,
      theme: "Team Ministry",
      passage: "Philippians 2:1-5",
      refs: ["Phil 2:1", "Phil 2:2", "Phil 2:3", "Phil 2:4", "Phil 2:5"],
    },
    {
      month: 8,
      theme: "Faith That Crosses Over",
      passage: "Hebrews 11:1-6",
      refs: ["Heb 11:1", "Heb 11:2", "Heb 11:3", "Heb 11:4", "Heb 11:5", "Heb 11:6"],
    },
    {
      month: 9,
      theme: "Behold, I Am Doing a New Thing",
      passage: "Isaiah 43:15-19",
      refs: ["Isa 43:15", "Isa 43:16", "Isa 43:17", "Isa 43:18", "Isa 43:19"],
    },
    {
      month: 10,
      theme: "Cheerful Generosity",
      passage: "2 Corinthians 9:6-11",
      refs: ["2 Cor 9:6", "2 Cor 9:7", "2 Cor 9:8", "2 Cor 9:9", "2 Cor 9:10", "2 Cor 9:11"],
    },
    {
      month: 11,
      theme: "The Shepherd's Trust",
      passage: "Psalm 23:1-6",
      refs: ["Ps 23:1", "Ps 23:2", "Ps 23:3", "Ps 23:4", "Ps 23:5", "Ps 23:6"],
    },
    {
      month: 12,
      theme: "The Lord's Prayer",
      passage: "Matthew 6:9-13",
      refs: ["Matt 6:9", "Matt 6:10", "Matt 6:11", "Matt 6:12", "Matt 6:13"],
    },
  ],
};

// Flatten for the app's queue: each entry is { ref, month, theme }.
// Note: no `text` field — fetched lazily by the app via the ESV API client.
window.VERSES = window.VERSE_PLAN.months.flatMap(m =>
  m.refs.map(ref => ({ ref, month: m.month, theme: m.theme }))
);
