import { BackGroundImg, Body, DirectoryContainer } from './directory-item.style.jsx';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    
    return (
        <DirectoryContainer>
        <BackGroundImg imageUrl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryContainer>
    )
}

export default DirectoryItem;