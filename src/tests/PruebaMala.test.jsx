import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import Boton from '../components/atoms/Boton';

describe('Prueba fallida', () => {

    test('busca un texto incorrecto', () => {

        render(
            <Boton
                nombreBoton="Comprar"
            />
        );

        expect(
            screen.getByText('Eliminar')
        ).toBeInTheDocument();

    });

});