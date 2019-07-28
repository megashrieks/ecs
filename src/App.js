import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookDetailProvider } from './components/context/BookDetails';
import Dashboard from './components/Dashboard'
import { CartProvider } from './components/context/CartDetails';
function App() {
	return (
		<div className="App">
			<BookDetailProvider>
				<CartProvider>
					<Router>
						<Dashboard />
					</Router>
				</CartProvider>
			</BookDetailProvider>
		</div>
	);
}

export default App;
