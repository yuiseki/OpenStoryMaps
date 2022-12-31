import React, { useEffect } from "react";
import tocbot from "tocbot";
import * as Story from "../STORY.mdx";

export const App = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: "#toc",
      contentSelector: "#root",
      headingSelector: "h2",
    });
    return () => tocbot.destroy();
  }, []);

  return (
    <>
      <section id="hero">
        {/* @ts-ignore */}
        <h1>{Story.title}</h1>
        {/* @ts-ignore */}
        <div>{Story.author}</div>
        {/* @ts-ignore */}
        <div>{Story.date}</div>
      </section>
      <div id="toc" />
      <Story.default />
    </>
  );
};
