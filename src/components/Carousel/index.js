import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink,} from './styles';
import VideoCard from './components/VideoCard';
import'./styles.css';

function VideoCardGroup({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <VideoCardList>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.titulo}>
              <div className="box">
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
                />
              <div className="tracks">{video.titulo}</div>
                </div>
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;
