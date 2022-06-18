import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProducCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1', // id of the product
  title: 'Coffee Mug - Card',   // title of the product
  // img: './coffee-mug.png' // relative path to the image
}

const App = () => {
  return (
    <>
      <ProducCard
        product={product} // Product object
        initialValue={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, count, increaseBy, isMaxReached, maxCount }) => (
            <>
              <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }
      </ProducCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
