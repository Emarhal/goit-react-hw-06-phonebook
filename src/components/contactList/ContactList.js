import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletedItem } from "../../redux/actions";

const ContactList = ({ items, handleDelete }) => {
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  const { items, filter } = state;

  const formattedFilter = filter.toLowerCase().trim();
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(formattedFilter)
  );
  return {
    items: filteredItems,
  };
};

const mapDispatchToProps = {
  handleDelete: deletedItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
