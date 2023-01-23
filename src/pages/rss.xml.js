import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
	return rss({
		// `<title>` field in output xml
		title: "index",
		// `<description>` field in output xml
		description: "a resource aggregator and attempt to make information free",
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		site: import.meta.env.SITE,
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and glob imports
		items: import.meta.glob("./blog/**/*.md"),
	});
}