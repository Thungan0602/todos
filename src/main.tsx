import React from 'react';

import { createRoot } from 'react-dom/client';
import { Header } from './share/ui/Header';
import { Footer } from './share/ui/Footer';
import { TodoList } from './share/ui/TodoList';

const root = createRoot(document.getElementById('app')!);

function App() {
    return (
        <div>
            <Header />
            <TodoList />
            <Footer />
        </div>
    );
}
root.render(<App />);
