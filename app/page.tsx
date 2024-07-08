"use client";
import App from '@/app/containers/App';
import { Provider } from 'react-redux';
import store from "@/app/store/store";

export default function Home() {
  
  return (
      <Provider store={store}>
        <App />
      </Provider>
  );
}
