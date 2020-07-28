import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
}) {
  const youTubeID = getYouTubeId(url);
  //const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  const bgUrl = `https://wallpapercave.com/wp/y0CeSA8.png`

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
           <h3>{videoDescription}</h3>
           <br />
           1. Speak To Me
           <br />
           2. Breathe (In the Air)
           <br />
           3. On the Run
           <br />
           4. Time
           <br />
           5. The Great Gig in the Sky
           <br />
           6. Money
           <br />
           7. Us and Them
           <br />
           8. Any Colour You Like
           <br />
           9. Brain Damage
           <br />
           10. Eclipse
           
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
