import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const TallyFormComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tally-form">
      <iframe data-tally-src="https://tally.so/embed/mK1v9V?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="90%" height="2816" frameborder="0" marginheight="0" marginwidth="0" title="Registration"></iframe>
      <Helmet>
        <script>
          {`
            var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
          `}
        </script>
      </Helmet>
    </div>
  );
};

export default TallyFormComponent;
