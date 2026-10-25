import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Input from '../components/atoms/Input';

describe('Input', () => {

    test('muestra el placeholder', () => {

        render(
            <Input
                placeholder="Ingrese correo"
            />
        );

        expect(
            screen.getByPlaceholderText(
                'Ingrese correo'
            )
        ).toBeInTheDocument();

    });

});