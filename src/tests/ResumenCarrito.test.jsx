import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import ResumenCarrito from '../components/organisms/ResumenCarrito';

describe('ResumenCarrito', () => {

    test('muestra total', () => {

        render(
            <BrowserRouter>
                <ResumenCarrito total={50000} />
            </BrowserRouter>
        );

        expect(
            screen.getAllByText('$50000')[0]
        ).toBeInTheDocument();

    });

});