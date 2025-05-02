import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  github: {
    login: "wuhan005",
    type: "user",
  },
  width: 800,
  renderer: "tiers",
  formats: ["svg"],
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: "Backers",
      preset: tierPresets.base,
    },
  ],
});
