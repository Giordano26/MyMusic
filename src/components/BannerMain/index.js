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
  const bgUrl = `https://wallpaperaccess.com/full/5125158.png`

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
           1. Pigs On The Wing (Part One)
           <br />
           2. Dogs
           <br />
           3. Pigs (Three Different Ones)
           <br />
           4. Sheep
           <br />
           5. Pigs On The Wing (Part Two)
           
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            <a href="https://www.youtube.com/watch?v=uKiSWZxyY4U">Assistir</a>
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
