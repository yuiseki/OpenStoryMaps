import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

// remark plugins
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";
import remarkSectionize from "remark-sectionize";

// rehype plugins
import rehypeSlug from "rehype-slug";

const mdxOptions = {
  remarkPlugins: [
    remarkFrontmatter,
    remarkMdxFrontmatter,
    remarkGfm,
    remarkSectionize,
  ],
  rehypePlugins: [rehypeSlug],
};

export default defineConfig(async () => {
  return {
    base: "/OpenStoryMaps/",
    plugins: [mdx(mdxOptions), react()],
  };
});
