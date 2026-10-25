import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import NavBar from '../components/organisms/Navbar';

describe('Navbar', () => {

    test('muestra usuario', () => {

        localStorage.setItem(
            'usuario',
            JSON.stringify({
                nombre: 'Jonathan',
                rol: 'Administrador'
            })
        );

        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );

        expect(
            screen.getByText('Jonathan')
        ).toBeInTheDocument();

    });

});