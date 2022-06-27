import React from 'react'
import renderer from 'react-test-renderer'
import { ProducCard } from '../../src/components';
import { product2 } from '../data/products';

const { act } = renderer;
describe('ProducCard', () => {
    test('debe de mostrar el componente correctamente', () => {
        const wrapper = renderer.create(
            <ProducCard
                product={product2}
            >
                {
                    () => (
                        <h1>Produc Card</h1>
                    )
                }
            </ProducCard>);
        // console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    test('debe incrementar el contador', () => {
        const wrapper = renderer.create(
            <ProducCard
                product={product2}
            >
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Produc Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}></button>
                        </>
                    )
                }
            </ProducCard>);

        let tree = wrapper.toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot();
        act(() => {
            (tree as any).children[2].props.onClick();
        })

        tree = wrapper.toJSON();
        expect((tree as any).children[1].children[0]).toBe('1');
    });
});