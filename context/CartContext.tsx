'use client';

// context/CartContext.tsx
// Gerencia o estado global do carrinho.
// Persiste no localStorage para sobreviver a recarregamentos.

import { createContext, useContext, useEffect, useReducer, useCallback } from 'react';
import type { CartItem } from '@/types/cart';
import type { Product } from '@/types/product';

// ─── Estado e ações ───────────────────────────────────────────────────────────

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_ITEM';    item: CartItem }
  | { type: 'REMOVE_ITEM'; id: string }
  | { type: 'INCREMENT';   id: string }
  | { type: 'DECREMENT';   id: string }
  | { type: 'CLEAR' }
  | { type: 'LOAD';        items: CartItem[] };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {

    case 'LOAD':
      return { items: action.items };

    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.item.id
              ? { ...i, quantidade: i.quantidade + action.item.quantidade }
              : i
          ),
        };
      }
      return { items: [...state.items, action.item] };
    }

    case 'REMOVE_ITEM':
      return { items: state.items.filter((i) => i.id !== action.id) };

    case 'INCREMENT':
      return {
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantidade: i.quantidade + 1 } : i
        ),
      };

    case 'DECREMENT':
      return {
        items: state.items
          .map((i) =>
            i.id === action.id ? { ...i, quantidade: i.quantidade - 1 } : i
          )
          .filter((i) => i.quantidade > 0),
      };

    case 'CLEAR':
      return { items: [] };

    default:
      return state;
  }
}

// ─── Interface do contexto ────────────────────────────────────────────────────

interface CartContextValue {
  items: CartItem[];
  totalItens: number;
  subtotal: number;
  addToCart: (product: Product, cor: string, tamanho: string, quantidade?: number) => void;
  removeFromCart: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'estacao-country-cart';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Carrega do localStorage uma única vez após montar
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: CartItem[] = JSON.parse(saved);
        dispatch({ type: 'LOAD', items: parsed });
      }
    } catch {
      // ignora erros de parse
    }
  }, []);

  // Persiste sempre que o carrinho mudar
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = useCallback(
    (product: Product, cor: string, tamanho: string, quantidade = 1) => {
      const id = `${product.id}-${cor}-${tamanho}`;
      dispatch({
        type: 'ADD_ITEM',
        item: {
          id,
          productId: product.id,
          nome: product.nome,
          marca: product.marca,
          imagem: product.imagens[0],
          preco: product.preco,
          cor,
          tamanho,
          quantidade,
        },
      });
    },
    []
  );

  const removeFromCart = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  }, []);

  const increment = useCallback((id: string) => {
    dispatch({ type: 'INCREMENT', id });
  }, []);

  const decrement = useCallback((id: string) => {
    dispatch({ type: 'DECREMENT', id });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const totalItens = state.items.reduce((acc, i) => acc + i.quantidade, 0);
  const subtotal   = state.items.reduce((acc, i) => acc + i.preco * i.quantidade, 0);

  return (
    <CartContext.Provider
      value={{ items: state.items, totalItens, subtotal, addToCart, removeFromCart, increment, decrement, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart deve ser usado dentro de <CartProvider>');
  return ctx;
}
