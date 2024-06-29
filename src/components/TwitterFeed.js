import { useEffect } from 'react';

export default function TwitterFeed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <a 
        className="twitter-timeline" 
        data-width="300" 
        data-height="600" 
        href="https://twitter.com/hashtag/gundobookclub?src=hash&ref_src=twsrc%5Etfw"
      >
        #gundobookclub Tweets
      </a>
    </div>
  );
}