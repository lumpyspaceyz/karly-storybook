/**
 * 
 * @param {{
 *   children: React.ReactNode
 * }} props 
 * @returns 
 */
const 가격 = (props) => {
  return (
    <p className="text-l-lg text-content">
      {props.children}
      <span>원</span>
    </p>
  );
};

export default 가격;