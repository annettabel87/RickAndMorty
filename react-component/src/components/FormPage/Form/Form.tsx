import React from 'react';
import './Form.css';

type IEmptyprops = Record<string, never>;
interface IFormCard {
  name: string;
}
export class Form extends React.Component<IEmptyprops, IFormCard> {
  constructor(props: IEmptyprops) {
    super(props);
    this.state = { name: '' };
  }

  render() {
    return (
      <form className="form">
        <label htmlFor="name">
          Name:
          <input className="input-text" type="text" name="name" />
        </label>
        <label htmlFor="surname">
          Surname:
          <input className="input-text" type="text" name="surname" />
        </label>
        <label htmlFor="birth">
          Date of Birth:
          <input className="input-date" type="date" name="birth" />
        </label>
        <label htmlFor="country">
          Country:
          <select>
            <option selected value="Russia">
              Russia
            </option>
            <option value="Belarus">Belarus</option>
            <option value="Ukraine">Ukraine</option>
          </select>
        </label>
        <label className="switch-label-box" htmlFor="gender">
          <span className="switch--span">Male</span>
          <input className="input-switch" type="checkbox" name="gender" />
          <span className="switch--span">Female</span>
        </label>
        <label htmlFor="foto">
          Load your foto
          <input className="input-file" type="file" name="foto" />
        </label>
        <label htmlFor="agree">
          <input className="input-checkbox" type="checkbox" name="agree" />I agree
        </label>
      </form>
    );
  }
}
