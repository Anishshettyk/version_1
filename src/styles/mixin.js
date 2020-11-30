import { css } from 'styled-components';

const mixin = {
  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    color: var(--blue);
    &:hover,
    &:focus,
    &:active {
      color: var(--blue-hover);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--blue) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--blue);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  flex_between: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  flex_start: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
  flex_center: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flex_around: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
  flex_column: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  button: css`
    color: var(--blue);
    background-color: transparent;
    border: 1px solid var(--blue);
    border-radius: var(--border-radius);
    font-size: var(--fs-s);
    font-family: var(--font-bit);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    padding: 1.3rem 1.8rem;
    transition: var(--transition);

    &:hover,
    &:focus,
    &:active {
      color: var(--blue-hover);
      outline: none;
      border: 1px solid var(--blue-hover);
    }
  `,
  smallButton: css`
    border: 3px solid transparent;
    border-image: linear-gradient(to right, var(--blue) 0%, var(--blue-hover) 100%);
    border-image-slice: 1;
    background-color: var(--black);
    color: var(--white-lightest);
    font-size: var(--fs-xs);
    font-family: var(--font-bit);
    line-height: 1;
    box-shadow: var(--button-shadow);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 0.7rem 1.3rem;
    transition: none;

    &:hover,
    &:focus,
    &:active {
      border-image: linear-gradient(to right, var(--yellow-dark) 0%, var(--red-dark) 100%);
      border-image-slice: 1;
      color: var(--white);
      outline: none;
      box-shadow: var(--button-shadow-click);
    }
  `,
  smallButtonRed: css`
    border: 3px solid transparent;
    border-image: linear-gradient(to right, var(--red-dark) 0%, var(--yellow-dark) 100%);
    border-image-slice: 1;
    background-color: var(--black);
    color: var(--white-lightest);
    font-size: var(--fs-xs);
    font-family: var(--font-bit);
    line-height: 1;
    box-shadow: var(--button-shadow);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    padding: 0.7rem 1.3rem;
    transition: none;

    &:hover,
    &:focus,
    &:active {
      border-image: linear-gradient(to right, var(--blue-hover) 0%, var(--blue) 100%);
      border-image-slice: 1;
      color: var(--white);
      outline: none;
      box-shadow: var(--button-shadow-click);
    }
  `,
  verySmallButton: css`
    border: 2px solid transparent;
    border-image: linear-gradient(to right, var(--blue) 0%, var(--blue-hover) 100%);
    border-image-slice: 1;
    background-color: var(--black);
    color: var(--white-lightest);
    font-size: var(--fs-xs);
    font-family: var(--font-bit);
    font-weight: 900;
    line-height: 1;
    box-shadow: var(--button-shadow);
    text-decoration: none;
    cursor: pointer;
    padding: 0.5rem 0.8rem;
    transition: none;

    &:hover,
    &:focus,
    &:active {
      border-image: linear-gradient(to right, var(--blue-hover) 0%, var(--blue) 100%);
      border-image-slice: 1;
      color: var(--blue-hover);
      outline: none;
      box-shadow: var(--button-shadow-click);
    }
  `,

  fillSmallButton: css`
    padding: 0.6rem 1.3rem;
    border: 3px solid transparent;
    background: linear-gradient(to right, var(--blue) 0%, var(--blue-hover) 100%);
    font-size: var(--fs-xs);
    font-family: var(--font-bit);
    font-weight: 900;
    color: var(--blue-inside);
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: var(--transition);
    box-shadow: var(--button-shadow);
    &:hover,
    &:focus,
    &:active {
      border: 3px solid var(--blue);
      background: var(--black);
      color: var(--white-lightest);
      box-shadow: var(--button-shadow-click);
    }
  `,
  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--navy);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy);
    }
  `,
};

export default mixin;
