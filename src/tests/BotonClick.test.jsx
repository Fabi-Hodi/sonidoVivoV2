import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import Boton from '../components/atoms/Boton';

describe('Boton', () => {

    test('ejecuta click', () => {

        const clickMock = vi.fn();

        render(
            <Boton
                nombreBoton="Eliminar"
                onClick={clickMock}
            />
        );

        fireEvent.click(
            screen.getByText('Eliminar')
        );

        expect(
            clickMock
        ).toHaveBeenCalled();

    });

});