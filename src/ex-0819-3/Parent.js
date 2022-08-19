import Child from './Child';

function Parent() {
  return (
    <>
      <h1>Parent</h1>
      <Child text="Hello" name="Amy" total={212}/>
      <Child />
    </>
  );
}
export default Parent;
