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
        <div id="hero-background">
          {/* @ts-ignore */}
          <img src={Story.titleImage} />
        </div>
        <div id="hero-content">
          {/* @ts-ignore */}
          <h1>{Story.title}</h1>
          {/* @ts-ignore */}
          <h3>{Story.subtitle}</h3>
          {/* @ts-ignore */}
          <div>{Story.author}</div>
          {/* @ts-ignore */}
          <div>{Story.date}</div>
        </div>
      </section>
      <div id="toc" />
      <Story.default />
    </>
  );
};
