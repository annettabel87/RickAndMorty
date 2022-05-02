import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
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
  photo: string;
  agree: boolean;
}
export type IFormData = {
  name: string;
  surname: string;
  birth: string;
  country: string;
  gender: string;
  photo: FileList | null;
  agree: boolean;
};
const createPhotoFile = (photo: FileList | null) => {
  const url = photo ? URL.createObjectURL(new Blob([photo[0]])) : '';

  return url;
};

export const Form: FC<IAddCardData> = React.memo(({ addCardData }: IAddCardData) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>();
  const submitBtn = useRef<HTMLButtonElement>(null);

  const onSubmit = handleSubmit((data: IFormData) => {
    const cardData: IFormCard = {
      id: Date.now().toString(),
      ...data,
      photo: createPhotoFile(data.photo),
    };

    addCardData(cardData);
    unDisabledBtn();
    reset();

    if (submitBtn.current) {
      submitBtn.current.disabled = true;
    }
  });
  const unDisabledBtn = () => {
    if (submitBtn.current) {
      submitBtn.current.disabled = false;
    }
  };

  return (
    <form className="form" onSubmit={onSubmit} data-testid="form">
      <label htmlFor="name">
        Name:
        <input
          className="input-text"
          type="text"
          {...register('name', {
            required: 'enter your name',
            minLength: { value: validateConstants.MIN_LENGTH_NAME, message: 'your name too short' },
          })}
          onChange={unDisabledBtn}
          data-testid="input-name"
        />
        <p> {errors?.name && <span className="validation-error">{errors.name.message}</span>} </p>
      </label>
      <label htmlFor="surname">
        Surname:
        <input
          className="input-text"
          type="text"
          {...register('surname', {
            required: 'enter your surname',
            minLength: {
              value: validateConstants.MIN_LENGTH_NAME,
              message: 'your surname too short',
            },
          })}
          onChange={unDisabledBtn}
          data-testid="input-surname"
        />
        <p>
          {' '}
          {errors?.surname && (
            <span className="validation-error">{errors.surname.message}</span>
          )}{' '}
        </p>
      </label>
      <label htmlFor="birth">
        Date of Birth:
        <p> {errors?.birth && <span className="validation-error">{errors.birth.message}</span>} </p>
        <input
          className="input-date"
          type="date"
          {...register('birth', {
            required: 'enter date of birth',
          })}
          onChange={unDisabledBtn}
          data-testid="input-birth"
        />
      </label>
      <label htmlFor="country">
        Country:
        <p> {errors?.country && <span className="validation-error">select one option</span>} </p>
        <select
          {...register('country', {
            required: 'select country',
          })}
          data-testid="select-country"
        >
          <option value="Russia">Russia</option>
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
        </select>
      </label>
      <label className="switch-label-box" htmlFor="gender">
        <span className="switch--span">Male</span>
        <input
          className="input-switch"
          type="checkbox"
          {...register('gender')}
          data-testid="input-gender"
        />
        <span className="switch--span">Female</span>
      </label>
      <label htmlFor="photo">
        Load your photo
        <p> {errors?.photo && <span className="validation-error">{errors.photo.message}</span>} </p>
        <input
          className="input-file"
          type="file"
          {...register('photo', {
            required: 'add your photo',
          })}
          onChange={unDisabledBtn}
          data-testid="input-file"
        />
      </label>
      <label htmlFor="agree">
        <p> {errors?.agree && <span className="validation-error">{errors.agree.message}</span>} </p>
        <input
          className="input-checkbox"
          type="checkbox"
          {...register('agree', {
            required: 'your are not agree',
          })}
          onChange={unDisabledBtn}
          data-testid="input-agree"
        />
        I agree
      </label>
      <button type="submit" disabled={true} ref={submitBtn} data-testid="form-btn">
        Submit
      </button>
    </form>
  );
});
