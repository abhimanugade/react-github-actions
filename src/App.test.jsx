import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App';

describe('App component', () => {
    test('renders the application', () => {
        render(<App />);

        expect(screen.getByText(/vite/i)).toBeInTheDocument();
    });
});