import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Boton from '../components/atoms/Boton';

describe('Boton', () => {

    test('muestra el texto recibido', () => {

        render(
            <Boton nombreBoton="Comprar" />
        );

        expect(
            screen.getByText('Comprar')
        ).toBeInTheDocument();

    });

});