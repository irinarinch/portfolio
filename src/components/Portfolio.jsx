import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

import getData from '../data';

export default class Portfolio extends Component {
  constructor() {
    super();   

    this.filters = ["All", "Websites", "Flayers", "Business Cards"],
    this.selected = "All";    
    this.onSelectFilter = this.onSelectFilter.bind(this);     
    
    this.data = getData();    
    this.state = {data: this.data}
  }

  onSelectFilter(e) {
    this.selected = e.target.textContent;
    
    document.querySelector('.selected').classList.remove('selected');
    e.target.classList.add('selected');

    document.querySelectorAll('img').forEach(img => {
      const string = this.selected.toLowerCase();
      
      if (!img.classList.contains(string.split(' ')[0])) {
        img.classList.add('hidden');
      } else {
        img.classList.remove('hidden');        
      }

      if (this.selected === "All") {
        img.classList.remove('hidden');
        document.querySelector('.empty-img').classList.add('hidden');
      }
    });

    document.querySelectorAll('.my-masonry-grid-column').forEach(column => {      
      if (column.children.length === column.querySelectorAll('.hidden').length) {
        document.querySelector('.empty-img').classList.remove('hidden');
      } 
    });
  }
 
  render() {
    return (
      <div>
        <Toolbar
          filters={this.filters}
          selected={this.selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList
          state={this.state.data}
        />
      </div>
    );    
  }
}