import React from 'react'
import renderer from 'react-test-renderer'
import { ProducCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
    test('debe de mostrar el componente correctamente con la img perzonalizada', () => {
        const wrapper = renderer.create(<ProductImage
            img={product2.img}
        />);
        // console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debemos mostrar el componente con la img del producto', () => {
        const wrapper = renderer.create(
            <ProducCard
                product={product2}
            >
                {
                    () => (
                        <>
                            <ProductImage
                                img={product2.img}
                            />
                        </>
                    )
                }
            </ProducCard>
        );
        // console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
});