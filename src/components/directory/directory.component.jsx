import { CategoriesContainer } from './directory.style';

import DirectoryItem from '../directory-item/directory-item.component';

const CategoryMenu = ({ categories }) => {
    return (
        <CategoriesContainer>
          {categories.map((category) => (
          
          <DirectoryItem key={category.id} category={category} />
          ))}
        </CategoriesContainer>
    );
}

export default CategoryMenu;