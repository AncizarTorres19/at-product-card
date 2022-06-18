# DO-Product-Card

este es un paqute de pruebas de despliegue en NPM

### Ancizar Torres

## Ejemplo
```
import {ProducCard, ProductImage, ProductTitle, ProductButtons} from 'at-product-card';
```

```
<ProducCard product={product}
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
```