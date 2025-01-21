import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../rtk/Slices/ProductSlice";
import { useEffect } from "react";
import { addToCart } from "../../rtk/Slices/CartSlice";
function Products() {
  const products = useSelector((state) => state.Products);
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <div className="flex flex-wrap mt-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full  sm:w-2/4  lg:w-1/4 p-2  my-1 mx-auto group/button  overflow-hidden "
            >
              <div className="inner h-full p-2  rounded-md  border-2  border-emerald-600 transition-all duration-300 hover:shadow hover:shadow-emerald-400">
                <div>
                  <div className="mx-auto h-52">
                    <img
                      className="my-3 w-full h-full  object-center"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>

                  <h3 className="text-sm mt-2 md:text-lg font-semibold text-center dark:text-white line-clamp-1">
                    {product.title}
                  </h3>

                  <div className="mb-1 mt-2.5 flex justify-center items-center">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        className={`h-5 w-5 ${
                          index < Math.round(product.rating.rate)
                            ? "text-yellow-300"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}

                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                      {product.rating.rate}
                    </span>
                  </div>
                  <div className="price text-sm md:text-lg font-semibold flex justify-between m-2 px-6 lg:px-0 dark:text-white">
                    <span>
                      {product.price}{" "}
                      $
                    </span>
                    <span>{product.category} </span>
                  </div>
                </div>

                <button
                  className="translate-y-[150%] opacity-0 group-hover/button:opacity-100  group-hover/button:translate-y-0 bg-emerald-500 rounded-md w-full p-2 text-white transition-all duration-500"
                  onClick={() => {
                    const productExists = cart.some((p) => p.id === product.id);
                    if (productExists) {
                      dispatch(addToCart(product));
                    } else {
                      dispatch(addToCart(product));
                    }
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="inset-0 w-full h-dvh flex justify-center items-center">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
}

export default Products;
