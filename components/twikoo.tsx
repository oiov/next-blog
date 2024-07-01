"use client";

import { useEffect } from "react";

export default function TwikooComment() {
  useEffect(() => {
    const cdnScript = document.createElement("script");
    cdnScript.src =
      "https://cdn.staticfile.org/twikoo/1.6.32/twikoo.all.min.js";
    cdnScript.async = true;

    const loadSecondScript = () => {
      const initScript = document.createElement("script");
      initScript.innerHTML = `
        twikoo.init({
          envId: "https://comment.oiov.dev",
          el: '#twikoo-comment',
          pageSize: 10,
          includeReply: true,
          lang: "zh-CN",
          path: location.pathname
        });
      `;
      initScript.id = "twikoo-init-id";
      document.body.appendChild(initScript);
    };

    cdnScript.addEventListener("load", loadSecondScript);
    document.body.appendChild(cdnScript);

    return () => {
      if (loadSecondScript) {
        cdnScript.removeEventListener("load", loadSecondScript);
      }
      if (cdnScript) {
        document.body.removeChild(cdnScript);
      }
      const secondScript = document.querySelector("#twikoo-init-id");
      if (secondScript) {
        document.body.removeChild(secondScript);
      }
    };
  }, []);
  return <div id="twikoo-comment"></div>;
}
