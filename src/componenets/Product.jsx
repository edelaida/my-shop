
export const Product = ({ product }) => {
       // const dispatch = useDispatch();
        return (
          <li>
            <img src={product.thumbnail} />
            <div className="flex gap-4 items-center">
              <p>{product.title}</p>
              <button
                // onClick={() => dispatch(addToCart(product))}
                className="btn btn-primary"
              >
                Add to cart
              </button>
            </div>
          </li>
        );    
};