import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTERS</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Marques Brownlee"
        verified
        subs="14M"
        noOfVideos={1349}
        description="MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!"
      />

      <hr />

      <VideoRow
        timestamp="6 years ago"
        title="Pixel Density: Explained"
        views="6M"
        subs="14M"
        description="MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!"
        channel="Marques Brownlee"
        image="https://i.ytimg.com/vi/pzGsUp3yM8w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAymsPmeF2Sk0YaQ_iwcSe-ZwvZzg"
      />

      <VideoRow
        timestamp="2 months ago"
        title="Dope Tech: The Fastest Drone AND Car Yet!"
        views="2.2M"
        subs="14M"
        description="MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!"
        channel="Marques Brownlee"
        image="https://i.ytimg.com/vi/syiQmaGZFXM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDCp2WFJGtHEwSUCygL1hZGlyrClw"
      />

      <VideoRow
        timestamp="6 months ago"
        title="Dope Tech: The iPad Pro Killer?!"
        views="6.5M"
        subs="14M"
        description="MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!"
        channel="Marques Brownlee"
        image="https://i.ytimg.com/vi/5NNO5Kb-PZo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBoJcFjQYH2iwHJd5wdDeJkP6i1zQ"
      />

      <VideoRow
        timestamp="6 years ago"
        title="Pixel Density: Explained"
        views="6M"
        subs="14M"
        description="MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!"
        channel="Marques Brownlee"
        image="https://i.ytimg.com/vi/pzGsUp3yM8w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAymsPmeF2Sk0YaQ_iwcSe-ZwvZzg"
      />

      <VideoRow
        timestamp="2 months ago"
        title="Dope Tech: The Fastest Drone AND Car Yet!"
        views="2.2M"
        subs="14M"
        description="MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!"
        channel="Marques Brownlee"
        image="https://i.ytimg.com/vi/syiQmaGZFXM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDCp2WFJGtHEwSUCygL1hZGlyrClw"
      />
      <VideoRow
        timestamp="6 years ago"
        title="Pixel Density: Explained"
        views="6M"
        subs="14M"
        description="MKBHD: Quality Tech Videos | YouTuber | Geek | Consumer Electronics | Tech Head | Internet Personality!"
        channel="Marques Brownlee"
        image="https://i.ytimg.com/vi/pzGsUp3yM8w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAymsPmeF2Sk0YaQ_iwcSe-ZwvZzg"
      />
    </div>
  );
}

export default SearchPage;
