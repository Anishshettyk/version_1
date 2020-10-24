import { css } from 'styled-components';

const TransitionStyles = css`
  /*fade up */
  .fadeup-enter {
    opacity: 0.03;
    transform: translateY(20px);
    transition: opacity 350ms var(--cubic), transform 350ms var(--cubic);
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 350ms var(--cubic), transform 350ms var(--cubic);
  }

  /*fade down*/
  .fadedown-enter {
    opacity: 0.03;
    transform: translateY(-20px);
    transition: opacity 350ms var(--cubic), transform 350ms var(--cubic);
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 350ms var(--cubic), transform 350ms var(--cubic);
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transform: opacity 300ms var(--cubic);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: opacity 300ms var(--cubic);
  }
`;

export default TransitionStyles;
