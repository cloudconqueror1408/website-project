module.exports = {
  ci: {
    collect: {
      staticDistDir: ".",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
