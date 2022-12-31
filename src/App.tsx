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
      {/* @ts-ignore */}
      <h1>{Story.title}</h1>
      {/* @ts-ignore */}
      <p>{Story.author}</p>
      {/* @ts-ignore */}
      <p>{Story.date}</p>
      <div id="toc" />
      <Story.default />
    </>
  );
};
