import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProducCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
    test('debe de mostrar el componente correctamente con el titulo perzonalizado', () => {
        const wrapper = renderer.create(<ProductTitle title="Titulo personalizado" className='custom-class' />);
        // console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debemos mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProducCard
                product={product1}
            >
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProducCard>
        );
        // console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debemos mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProducCard
                product={product1}
            >
                {
                    () => (
                        <>
                            <ProductTitle />
                        </>
                    )
                }
            </ProducCard>
        );
        // console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
});