import { Table } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../../rtk/Slices/CartSlice";

function Cart() {
  let cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, pro) => {
    acc += pro.price * pro.quantity;
    return acc;
  }, 0);

  return (
    <>
      <div className="overflow-x-auto ">
        <h3 className="dark:text-white font-bold my-2">
          Total Price: {totalPrice.toFixed(2)}$
        </h3>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Img</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>

            <Table.HeadCell>
              <button
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                onClick={() => dispatch(clear())}
              >
                Clear
              </button>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {cart.map((product) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={product.id}
              >
                <Table.Cell className=" break-words text-gray-900 dark:text-white">
                  {product.title}
                </Table.Cell>
                <Table.Cell style={{ width: "80px", height: "80px" }}>
                  <img src={product.image} alt={product.title}></img>
                </Table.Cell>
                <Table.Cell>{product.price}$</Table.Cell>
                <Table.Cell>{product.quantity}</Table.Cell>
                <Table.Cell>
                  <button
                    href="#"
                    className="  text-cyan-600 hover:underline dark:text-cyan-500"
                    onClick={() => dispatch(deleteFromCart(product))}
                  >
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default Cart;
