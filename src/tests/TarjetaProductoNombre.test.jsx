import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import TarjetaProducto from '../components/molecules/TarjetaProducto';

describe('TarjetaProducto', () => {

    test('muestra nombre producto', () => {

        render(
            <BrowserRouter>
                <TarjetaProducto
                    nombre="Guitarra Yamaha"
                    valor={100000}
                    disponible={true}
                    stock={5}
                    categoria="Guitarras"
                />
            </BrowserRouter>
        );

        expect(
            screen.getByText('Guitarra Yamaha')
        ).toBeInTheDocument();

    });

});
