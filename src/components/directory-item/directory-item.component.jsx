import { useNavigate } from 'react-router-dom';

import { 
  BackGroundImg, 
  Body, 
  DirectoryContainer 
} from './directory-item.style.jsx';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const navigateHandler = () => navigate(route);
    
    return (
      <DirectoryContainer onClick={navigateHandler}>
        <BackGroundImg imageUrl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </DirectoryContainer>
    )
}

export default DirectoryItem;