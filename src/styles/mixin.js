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
    color: var(--blue);
    background-color: transparent;
    border: 1px solid var(--blue);
    font-size: var(--fs-xs);
    font-family: var(--font-bit);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    padding: 0.7rem 1.3rem;
    transition: var(--transition);

    &:hover,
    &:focus,
    &:active {
      color: var(--blue-hover);
      outline: none;
      border: 1px solid var(--blue-hover);
    }
  `,
  bigButton: css`
    color: var(--blue);
    background-color: transparent;
    border: 1px solid var(--blue);
    border-radius: var(--border-radius);
    font-size: var(--fs-m);
    font-family: var(--font-bit);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    padding: 1.5rem 2.2rem;
    transition: var(--transition);

    &:hover,
    &:focus,
    &:active {
      color: var(--blue-hover);
      outline: none;
      border: 1px solid var(--blue-hover);
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
