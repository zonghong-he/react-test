function Child({ name = '訪客', text = '您好', total = 0 }) {
  return (
    <>
      <h1>Child</h1>
      {name},{text}
      <p>總共:{total}</p>
    </>
  );
}

// 類別型元件寫法，不推薦
// Child.defaultProps = {
//   name: '訪客',
//   text: '您好',
//   total: 0,
// };
export default Child;
