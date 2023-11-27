import { Component } from "react";
import PropTypes from "prop-types";

export default class Toolbar extends Component {
  getItems() {
    const items = [];
    const item = this.props.filters.map((item) => (
      <li
        key={item}
        className={`nav-item ${item === this.props.selected ? `selected` : ``}`}
        onClick={this.props.onSelectFilter}
      >
        {item}
      </li>
    ));

    items.push(item);

    return items;
  }

  render() {
    return (
      <nav className="toolbar">
        <ul className="nav-items">{this.getItems()}</ul>
      </nav>
    );
  }
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};
