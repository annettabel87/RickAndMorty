import React from 'react';
import { validateConstants } from '../../../constants';
import { IAddCardData } from '../FormPage';
import './Form.css';

export interface IFormCard {
  id: string;
  name: string;
  surname: string;
  birth: string;
  country: string;
  gender: string;
  photo: FileList | null;
  agree: boolean;
}

export class Form extends React.Component<IAddCardData, Record<string, unknown>> {
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  countryInput: React.RefObject<HTMLSelectElement>;
  genderInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  agreeInput: React.RefObject<HTMLInputElement>;
  submitBtn: React.RefObject<HTMLButtonElement>;
  errors: Record<string, unknown>;
  newData: IFormCard;
  state: Record<string, unknown>;

  constructor(props: IAddCardData) {
    super(props);
    this.state = {
      errors: [],
    };
    this.newData = {
      id: '',
      name: '',
      surname: '',
      birth: '',
      country: '',
      gender: '',
      photo: null,
      agree: false,
    };
    this.errors = {};
    this.nameInput = React.createRef<HTMLInputElement>();
    this.surnameInput = React.createRef<HTMLInputElement>();
    this.dateInput = React.createRef<HTMLInputElement>();
    this.countryInput = React.createRef<HTMLSelectElement>();
    this.genderInput = React.createRef<HTMLInputElement>();
    this.fileInput = React.createRef<HTMLInputElement>();
    this.agreeInput = React.createRef<HTMLInputElement>();
    this.submitBtn = React.createRef<HTMLButtonElement>();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.unDisabledBtn = this.unDisabledBtn.bind(this);
  }

  handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const { addCardData } = this.props;

    this.newData = {
      id: Date.now().toString(),
      name: this.nameInput.current ? this.nameInput.current.value : '',
      surname: this.surnameInput.current ? this.surnameInput.current.value : '',
      birth: this.dateInput.current ? this.dateInput.current.value : '',
      country: this.countryInput.current ? this.countryInput.current.value : '',
      gender: this.genderInput.current?.checked ? 'Female' : 'Male',
      photo: this.fileInput.current ? this.fileInput.current.files : null,
      agree: this.agreeInput.current ? this.agreeInput.current.checked : false,
    };

    this.validate();
    if (Object.keys(this.errors).length === 0) {
      this.unDisabledBtn();
      addCardData(this.newData);
      this.reset();
    } else {
      if (this.submitBtn.current) {
        this.submitBtn.current.disabled = true;
      }
    }
  }
  unDisabledBtn() {
    if (this.submitBtn.current) {
      this.submitBtn.current.disabled = false;
    }
  }
  reset() {
    if (this.nameInput.current?.value) {
      this.nameInput.current.value = '';
    }
    if (this.surnameInput.current?.value) {
      this.surnameInput.current.value = '';
    }
    if (this.dateInput.current?.value) {
      this.dateInput.current.value = '';
    }
    if (this.countryInput.current?.value) {
      this.countryInput.current.value = '';
    }
    if (this.fileInput.current?.files) {
      this.fileInput.current.files = null;
    }
    if (this.agreeInput.current?.value) {
      this.agreeInput.current.checked = false;
    }
  }
  validate() {
    this.setState({ errors: [] });
    this.errors = {};
    if (!this.newData.agree) {
      this.errors.agree = true;
    }
    if (this.newData.name.length < validateConstants.MIN_LENGTH_NAME) {
      this.errors.name = true;
    }
    if (this.newData.surname.length < validateConstants.MIN_LENGTH_NAME) {
      this.errors.surname = true;
    }
    if (!this.newData.birth) {
      this.errors.birth = true;
    }
    if (!this.newData.country) {
      this.errors.country = true;
    }
    if (!this.newData.gender) {
      this.errors.gender = true;
    }
    if (!this.newData.photo) {
      this.errors.photo = true;
    }
    this.setState({ errors: this.errors });
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} data-testid="form">
        <label htmlFor="name">
          Name:
          <input
            className="input-text"
            type="text"
            name="name"
            ref={this.nameInput}
            onChange={this.unDisabledBtn}
            data-testid="input-name"
          />
          <p>
            {' '}
            {this.errors.name && <span className="validation-error">your name too short</span>}{' '}
          </p>
        </label>
        <label htmlFor="surname">
          Surname:
          <input
            className="input-text"
            type="text"
            name="surname"
            ref={this.surnameInput}
            onChange={this.unDisabledBtn}
            data-testid="input-surname"
          />
          <p>
            {' '}
            {this.errors.surname && (
              <span className="validation-error">your surname too short</span>
            )}{' '}
          </p>
        </label>
        <label htmlFor="birth">
          Date of Birth:
          <p> {this.errors.birth && <span className="validation-error">select date</span>} </p>
          <input
            className="input-date"
            type="date"
            name="birth"
            ref={this.dateInput}
            onChange={this.unDisabledBtn}
            data-testid="input-birth"
          />
        </label>
        <label htmlFor="country">
          Country:
          <p> {this.errors.country && <span className="validation-error">select country</span>} </p>
          <select ref={this.countryInput} data-testid="select-country">
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="Ukraine">Ukraine</option>
          </select>
        </label>
        <label className="switch-label-box" htmlFor="gender">
          <p> {this.errors.gender && <span className="validation-error">select again</span>} </p>
          <span className="switch--span">Male</span>
          <input
            className="input-switch"
            type="checkbox"
            name="gender"
            ref={this.genderInput}
            data-testid="input-gender"
          />
          <span className="switch--span">Female</span>
        </label>
        <label htmlFor="photo">
          Load your photo
          <p> {this.errors.photo && <span className="validation-error">add photo</span>} </p>
          <input
            className="input-file"
            type="file"
            name="photo"
            ref={this.fileInput}
            onChange={this.unDisabledBtn}
            data-testid="input-file"
          />
        </label>
        <label htmlFor="agree">
          <p>
            {' '}
            {this.errors.agree && <span className="validation-error">need your consent</span>}{' '}
          </p>
          <input
            className="input-checkbox"
            type="checkbox"
            name="agree"
            ref={this.agreeInput}
            onChange={this.unDisabledBtn}
            data-testid="input-agree"
          />
          I agree
        </label>
        <button type="submit" disabled={true} ref={this.submitBtn} data-testid="form-btn">
          Submit
        </button>
      </form>
    );
  }
}
