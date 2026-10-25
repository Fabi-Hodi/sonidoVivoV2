import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { describe, test, expect } from 'vitest';

import Resultado from '../pages/Resultado';

describe('Resultado', () => {

    test('muestra numero pedido', () => {

        localStorage.setItem(
            'pedido',
            JSON.stringify({
                numero: 12345,
                entrega: 'retiro'
            })
        );

        render(
            <BrowserRouter>
                <Resultado />
            </BrowserRouter>
        );

        expect(
            screen.getByText(/12345/)
        ).toBeInTheDocument();

    });

});