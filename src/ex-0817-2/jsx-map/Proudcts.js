import productData from './data/product.json';

function Proudcts() {
  return (
    <>
      <h1>Proudct</h1>
      <table className="table table-striped align-middle text-center">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">stock</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col">tags</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => {
            return (
              <tr key={product.id}>
                <td>
                  <img src={`${product.picture}`} />
                </td>
                <td>{product.stock}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.tags}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Proudcts;
