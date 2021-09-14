import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Pixel Density: Explained!"
          image="https://i.ytimg.com/vi/pzGsUp3yM8w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAymsPmeF2Sk0YaQ_iwcSe-ZwvZzg"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s48-c-k-c0x00ffffff-no-rj"
          views="215,765 views"
          timestamp="Feb 27, 2012"
          channel="Marques Brownlee"
        />
        <VideoCard
          title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
          views="160,447 views"
          timestamp="Streamed live on Jul 29, 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
        />
        <VideoCard
          title="Learn to Type Fast (95 words per minute)"
          image="https://i.ytimg.com/vi/V3XTz6xg9WE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLl3CekMW8pJUOIN7dlgbknqIubw"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjfgc1pmA7XcNqwcrbu-HpOzGwGUYpRg3CZnn_ARQ=s48-c-k-c0x00ffffff-no-rj"
          views="2,332,339 views"
          timestamp="Sep 16, 2020"
          channel="Mike Shake"
        />
        <VideoCard
          title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
          views="160,447 views"
          timestamp="Streamed live on Jul 29, 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
        />
        <VideoCard
          title="Samsung Galaxy S21 Ultra vs iPhone 12 Pro Max Camera Test Comparison."
          image="https://i.ytimg.com/vi/qxRpzr-862Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDOLF5jawmm8zbGNjTtCcCebIzzNQ"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s48-c-k-c0x00ffffff-no-rj"
          views="8,378,131 views"
          timestamp="Jan 21, 2021"
          channel="Mrwhosetheboss"
        />
        <VideoCard
          title="Pixel Density: Explained!"
          image="https://i.ytimg.com/vi/pzGsUp3yM8w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAymsPmeF2Sk0YaQ_iwcSe-ZwvZzg"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s48-c-k-c0x00ffffff-no-rj"
          views="215,765 views"
          timestamp="Feb 27, 2012"
          channel="Marques Brownlee"
        />
        <VideoCard
          title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
          views="160,447 views"
          timestamp="Streamed live on Jul 29, 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
        />
        <VideoCard
          title="Learn to Type Fast (95 words per minute)"
          image="https://i.ytimg.com/vi/V3XTz6xg9WE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLl3CekMW8pJUOIN7dlgbknqIubw"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjfgc1pmA7XcNqwcrbu-HpOzGwGUYpRg3CZnn_ARQ=s48-c-k-c0x00ffffff-no-rj"
          views="2,332,339 views"
          timestamp="Sep 16, 2020"
          channel="Mike Shake"
        />
        <VideoCard
          title="Pixel Density: Explained!"
          image="https://i.ytimg.com/vi/pzGsUp3yM8w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAymsPmeF2Sk0YaQ_iwcSe-ZwvZzg"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s48-c-k-c0x00ffffff-no-rj"
          views="215,765 views"
          timestamp="Feb 27, 2012"
          channel="Marques Brownlee"
        />
        <VideoCard
          title="Learn to Type Fast (95 words per minute)"
          image="https://i.ytimg.com/vi/V3XTz6xg9WE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLl3CekMW8pJUOIN7dlgbknqIubw"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjfgc1pmA7XcNqwcrbu-HpOzGwGUYpRg3CZnn_ARQ=s48-c-k-c0x00ffffff-no-rj"
          views="2,332,339 views"
          timestamp="Sep 16, 2020"
          channel="Mike Shake"
        />
        <VideoCard
          title="Learn to Type Fast (95 words per minute)"
          image="https://i.ytimg.com/vi/V3XTz6xg9WE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLl3CekMW8pJUOIN7dlgbknqIubw"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjfgc1pmA7XcNqwcrbu-HpOzGwGUYpRg3CZnn_ARQ=s48-c-k-c0x00ffffff-no-rj"
          views="2,332,339 views"
          timestamp="Sep 16, 2020"
          channel="Mike Shake"
        />
        <VideoCard
          title="Samsung Galaxy S21 Ultra vs iPhone 12 Pro Max Camera Test Comparison."
          image="https://i.ytimg.com/vi/qxRpzr-862Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDOLF5jawmm8zbGNjTtCcCebIzzNQ"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s48-c-k-c0x00ffffff-no-rj"
          views="8,378,131 views"
          timestamp="Jan 21, 2021"
          channel="Mrwhosetheboss"
        />
        <VideoCard
          title="Pixel Density: Explained!"
          image="https://i.ytimg.com/vi/pzGsUp3yM8w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAymsPmeF2Sk0YaQ_iwcSe-ZwvZzg"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s48-c-k-c0x00ffffff-no-rj"
          views="215,765 views"
          timestamp="Feb 27, 2012"
          channel="Marques Brownlee"
        />
        <VideoCard
          title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
          views="160,447 views"
          timestamp="Streamed live on Jul 29, 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
        />
        <VideoCard
          title="Learn to Type Fast (95 words per minute)"
          image="https://i.ytimg.com/vi/V3XTz6xg9WE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLl3CekMW8pJUOIN7dlgbknqIubw"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjfgc1pmA7XcNqwcrbu-HpOzGwGUYpRg3CZnn_ARQ=s48-c-k-c0x00ffffff-no-rj"
          views="2,332,339 views"
          timestamp="Sep 16, 2020"
          channel="Mike Shake"
        />
        <VideoCard
          title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
          views="160,447 views"
          timestamp="Streamed live on Jul 29, 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
        />
        <VideoCard
          title="Samsung Galaxy S21 Ultra vs iPhone 12 Pro Max Camera Test Comparison."
          image="https://i.ytimg.com/vi/qxRpzr-862Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDOLF5jawmm8zbGNjTtCcCebIzzNQ"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s48-c-k-c0x00ffffff-no-rj"
          views="8,378,131 views"
          timestamp="Jan 21, 2021"
          channel="Mrwhosetheboss"
        />
        <VideoCard
          title="Pixel Density: Explained!"
          image="https://i.ytimg.com/vi/pzGsUp3yM8w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAymsPmeF2Sk0YaQ_iwcSe-ZwvZzg"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s48-c-k-c0x00ffffff-no-rj"
          views="215,765 views"
          timestamp="Feb 27, 2012"
          channel="Marques Brownlee"
        />
        <VideoCard
          title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
          views="160,447 views"
          timestamp="Streamed live on Jul 29, 2020"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj"
          channel="Clever Programmer"
          image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
        />
        <VideoCard
          title="Learn to Type Fast (95 words per minute)"
          image="https://i.ytimg.com/vi/V3XTz6xg9WE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLl3CekMW8pJUOIN7dlgbknqIubw"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjfgc1pmA7XcNqwcrbu-HpOzGwGUYpRg3CZnn_ARQ=s48-c-k-c0x00ffffff-no-rj"
          views="2,332,339 views"
          timestamp="Sep 16, 2020"
          channel="Mike Shake"
        />
        <VideoCard
          title="Pixel Density: Explained!"
          image="https://i.ytimg.com/vi/pzGsUp3yM8w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAymsPmeF2Sk0YaQ_iwcSe-ZwvZzg"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s48-c-k-c0x00ffffff-no-rj"
          views="215,765 views"
          timestamp="Feb 27, 2012"
          channel="Marques Brownlee"
        />
        <VideoCard
          title="Learn to Type Fast (95 words per minute)"
          image="https://i.ytimg.com/vi/V3XTz6xg9WE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLl3CekMW8pJUOIN7dlgbknqIubw"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjfgc1pmA7XcNqwcrbu-HpOzGwGUYpRg3CZnn_ARQ=s48-c-k-c0x00ffffff-no-rj"
          views="2,332,339 views"
          timestamp="Sep 16, 2020"
          channel="Mike Shake"
        />
        <VideoCard
          title="Learn to Type Fast (95 words per minute)"
          image="https://i.ytimg.com/vi/V3XTz6xg9WE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCLl3CekMW8pJUOIN7dlgbknqIubw"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjfgc1pmA7XcNqwcrbu-HpOzGwGUYpRg3CZnn_ARQ=s48-c-k-c0x00ffffff-no-rj"
          views="2,332,339 views"
          timestamp="Sep 16, 2020"
          channel="Mike Shake"
        />
        <VideoCard
          title="Samsung Galaxy S21 Ultra vs iPhone 12 Pro Max Camera Test Comparison."
          image="https://i.ytimg.com/vi/qxRpzr-862Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDOLF5jawmm8zbGNjTtCcCebIzzNQ"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s48-c-k-c0x00ffffff-no-rj"
          views="8,378,131 views"
          timestamp="Jan 21, 2021"
          channel="Mrwhosetheboss"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
