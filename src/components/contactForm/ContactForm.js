import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import styles from "./ContactForm.module.css";
import { addNewToList } from "../../redux/actions";
import { connect } from "react-redux";

class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (name, number) => {
    const isDuplicate = this.props.items.some((item) => item.name === name);

    if (isDuplicate) {
      alert(name + " is already in contacts ");
      return;
    }

    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.props.addNewToList(newContact);
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.handleSubmit(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form className={styles.formMain} onSubmit={this.onSubmit}>
        <label className={styles.formLabel}>
          Name
          <input
            className={styles.formInput}
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Enter your name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.formLabel}>
          Number
          <input
            className={styles.formInput}
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
            placeholder="123-45-67"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className={styles.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = {
  addNewToList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
