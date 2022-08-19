function Test() {
  const nav = ['Home', 'About Us', 'Proudct', 'Seveice', 'Information'];
  return (
    <ul>
      {nav.map((item) => {
        <li>{`${item}`}</li>;
      })}
    </ul>
  );
}
export default Test;
