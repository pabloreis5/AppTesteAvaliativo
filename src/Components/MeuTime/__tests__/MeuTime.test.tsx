import React from 'react'
import { render, fireEvent, } from '@testing-library/react-native';
import MeuTime from '../MeuTime';

const TIME = "Atlético-MG"

describe('Componente MeuTime', () => {
    test('Mostra o nome do time corretamente', () => {
        const { getByTestId, getByText, } = render(<MeuTime time={TIME}/>)

        const botaoMostrarTime = getByTestId('botaoMostrarTime');
        fireEvent.press(botaoMostrarTime);

        const time = getByText(TIME);
        
        expect(time).toBeTruthy();
    });

    test('Alteração do nome do time', () => {
        const { getByPlaceholderText, getByText, getByTestId } = render(<MeuTime time={TIME} />);
        const inputTime = getByPlaceholderText('Digite o nome do time');
      
        const botaoMostrarTime = getByTestId('botaoMostrarTime');
        fireEvent.press(botaoMostrarTime);

        fireEvent.changeText(inputTime, 'Cruzeiro');
      
        const time = getByText('Cruzeiro');
        expect(time).toBeTruthy();
      });
});