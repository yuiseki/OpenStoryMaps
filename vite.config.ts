import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";

// remark plugins
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkGfm from "remark-gfm";

// rehype plugins
import rehypeSlug from "rehype-slug";

const mdxOptions = {
  remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
  rehypePlugins: [rehypeSlug],
};

export default defineConfig(async () => {
  return {
    plugins: [mdx(mdxOptions), react()],
  };
});
