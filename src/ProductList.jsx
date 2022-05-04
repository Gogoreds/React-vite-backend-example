import { useStates } from "./utilities/states";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function ProductList() {
  let s = useStates("main");

  return (
    <section className="mt-8">
      <div class="mt-4 text-center">
        <h3 class="text-2xl font-bold">Products</h3>
      </div>
      <div class="container w-full px-5 py-6 mx-auto">
        <div class="grid lg:grid-cols-4 gap-y-6">
          <div class="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
            {s.products.map(({ id, name, description, price }) => (
              <div className="product" key={id}>
                <div xxl="12">
                  <h3>{name}</h3>
                </div>
                <div xxl="12">
                  <p>{description}</p>
                </div>
                <div xxl="12">
                  <button class="px-4 py-2 bg-green-600 text-green-50">
                    Order Now
                  </button>
                  <span class="text-xl text-green-600">${price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
