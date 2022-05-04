import { useEffect } from 'react';
import { useStates } from './utilities/states';
import { factory } from './utilities/FetchHelper';
import ProductList from './ProductList';

const { Product } = factory;

export default function App() {

  let s = useStates('main', {
    products: []
  });

  useEffect(() => {
    (async () => {
      s.products = await Product.find();
    })();
  }, []);

  return s.products.length ? <>
    <ProductList />
  </> : null;
}