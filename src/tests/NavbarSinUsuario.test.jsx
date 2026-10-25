import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';

import NavBar from '../components/organisms/Navbar';

describe('Navbar', () => {

    test('muestra iniciar sesion', () => {

        localStorage.removeItem('usuario');

        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );

        expect(
            screen.getByText('Iniciar sesion')
        ).toBeInTheDocument();

    });

});