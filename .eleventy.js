module.exports = function (eleventyConfig) {
  // Passthrough Copy: moves these folders to _site without processing
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");

  // Shortcode (reusable block)
  eleventyConfig.addShortcode("statusCard", function (location, supplies, note) {
    return `
      <section class="status-card">
        <h2 class="status-title">Mission Status</h2>
        <ul class="status-list">
          <li><strong>Location:</strong> ${location}</li>
          <li><strong>Supplies:</strong> ${supplies}</li>
          <li><strong>Note:</strong> ${note}</li>
        </ul>
      </section>
    `;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
