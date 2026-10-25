import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import TarjetaProducto from '../components/molecules/TarjetaProducto';

describe('TarjetaProducto', () => {

    test('muestra agotado', () => {

        render(
            <BrowserRouter>
                <TarjetaProducto
                    nombre="Bajo"
                    valor={1000}
                    disponible={false}
                    stock={0}
                />
            </BrowserRouter>
        );

        expect(
            screen.getByText('Agotado')
        ).toBeInTheDocument();

    });

});
