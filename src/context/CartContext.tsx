
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define types for our Cart
export interface Product {
    id: string; // We will use the product name or a slug as ID for now
    name: string;
    price: string; // e.g. "12,50 €"
    image: string;
    description: string;
    category: 'Festkochend' | 'Vorwiegend festkochend' | 'Mehlig';
}

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
    isCartOpen: boolean;
    toggleCart: () => void;
    isShopifyEnabled: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem('local_cart');
        return saved ? JSON.parse(saved) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Persist to localStorage
    useEffect(() => {
        localStorage.setItem('local_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product, quantity: number) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
        // Optionally open cart or show toast
    };

    const removeFromCart = (productId: string) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(productId);
            return;
        }
        setCart(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => setCart([]);

    const toggleCart = () => setIsCartOpen(prev => !prev);

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    
    // Helper to parse "12,50 €" to number 12.50
    const parsePrice = (priceStr: string) => {
        return parseFloat(priceStr.replace(',', '.').replace(/[^0-9.]/g, '')) || 0;
    };

    const cartTotal = cart.reduce((acc, item) => acc + (parsePrice(item.price) * item.quantity), 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount,
            cartTotal,
            isCartOpen,
            toggleCart,
            isShopifyEnabled: false // Flag to easily switch to real Shopify later
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
