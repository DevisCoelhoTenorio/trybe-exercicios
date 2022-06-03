import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a App.js', () => {
  it('Verificando se o label e o input existem no documento', () => {
    render(<App />);
    const labelTask = screen.getByText('Tarefa:');
    const inputTask = screen.getByLabelText('Tarefa:');

    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  it('Verificando o tipo do input', () => {
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    expect(inputTask.type).toBe('text');
  });
  it('Verificando o botão adicionar', () => {
    render(<App />);
    const buttonAdd = screen.getByRole('button');
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd).toHaveTextContent('Adicionar');
  });
  it('Verificando a funcionalidade do botão', () => {
    render(<App />);
    const buttonAdd = screen.getByRole('button');
    const inputTask = screen.getByLabelText('Tarefa:');
    const userList = screen.getByRole('list');
    userEvent.type(inputTask, 'Tarefa teste');
    userEvent.click(buttonAdd);
    expect(inputTask).toHaveValue('');
    expect(userList).toHaveTextContent(/Tarefa teste/i);
  });
});
