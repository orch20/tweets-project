export const Button = ({ text, handelClick, styleButton }) => (
  <button type="button" className={styleButton} onClick={handelClick}>
    {text}
  </button>
);
