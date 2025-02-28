import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <Toaster reverseOrder={true} />
      <AppRoutes />
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
