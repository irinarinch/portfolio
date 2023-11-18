import { Component } from 'react';
import PropTypes from 'prop-types';
import  Masonry from 'react-masonry-css';

export default class ProjectList extends Component {  
  getImages() {
    const arr = [];   

    this.props.state.forEach((image, index) => {
      let string = image.category.toLowerCase();
      arr.push(<img key={index} className={string.split(' ')[0]} src={image.img}/>);
      index += 1;
    });
    
    arr.push(<div key='empty-img' className='empty-img hidden'></div>);
    return arr;
  }

  render() {    
    return (
      <Masonry 
        breakpointCols={3}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid-column'>
        {this.getImages()}        
      </Masonry>
    );
  }
}

ProjectList.propTypes = {
  state: PropTypes.func,  
}