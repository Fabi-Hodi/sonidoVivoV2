import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import TarjetaProducto from '../components/molecules/TarjetaProducto';

describe('TarjetaProducto', () => {

    test('muestra precio', () => {

        render(
            <BrowserRouter>
                <TarjetaProducto
                    nombre="Guitarra"
                    valor={100000}
                    disponible={true}
                    stock={5}
                />
            </BrowserRouter>
        );

        expect(
            screen.getByText('$100000')
        ).toBeInTheDocument();

    });

});