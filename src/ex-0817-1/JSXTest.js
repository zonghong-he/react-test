function JSXTest() {
  return (
    <>
      <h1>JSXTest</h1>
      <hr />
      <h2>Number</h2>
      {123}
      {123 - 99}
      {NaN}
      <h2>String</h2>
      {'abc'}
      {`hello ${100 - 5}`}
      <h2>Boolean</h2>
      {true}
      {false}
      <h2>null</h2>
      {null}
      <h2>undefined</h2>
      {undefined}
      <h2>Array</h2>
      {[1, 2, 3, 4]}
      <h2>Object</h2>
      {/* {{ a: 1, b: 2 }} borken */}
      <h2>Function</h2>
      {() => {}}
      {console.log(123)}
    </>
  );
}
export default JSXTest;
