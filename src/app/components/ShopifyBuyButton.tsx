import { useEffect } from 'react';

interface ShopifyBuyButtonProps {
  productId: string;
  variantId?: string; // Optional: specify a specific weight/size
}

export function ShopifyBuyButton({ productId }: ShopifyBuyButtonProps) {
  useEffect(() => {
    // This is where you would place the script loading logic from Shopify.
    // Shopify provides a global "ShopifyBuy" object. 
    
    const scriptId = 'shopify-buy-button-script';
    
    const initShopify = () => {
      // @ts-ignore - ShopifyBuy is added to window by the script
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        // @ts-ignore
const client = window.ShopifyBuy.buildClient({
          domain: import.meta.env.VITE_SHOPIFY_DOMAIN,
          storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN,
        });

        // @ts-ignore
        ShopifyBuy.UI.onReady(client).then((ui) => {
          ui.createComponent('product', {
            id: productId,
            node: document.getElementById(`shopify-product-${productId}`),
            moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
            options: {
              product: {
                styles: {
                  button: {
                    'font-family': 'Proza Libre, sans-serif',
                    'font-weight': '500',
                    'background-color': '#7c8868', // dusty-olive
                    ':hover': {
                      'background-color': '#707a5e'
                    },
                    'border-radius': '6px',
                  }
                },
                buttonDestination: 'cart',
                contents: {
                  img: false,
                  title: false,
                  price: false,
                  options: true,
                  quantity: true,
                  quantityIncrement: true,
                  quantityDecrement: true,
                  quantityInput: true,
                },
                text: {
                  button: 'In den Einkaufswagen',
                }
              },
              cart: {
                styles: {
                  button: {
                    'background-color': '#7c8868',
                    ':hover': {
                      'background-color': '#707a5e'
                    }
                  }
                },
                title: 'Warenkorb',
                total: 'Zwischensumme',
                empty: 'Dein Warenkorb ist leer.',
                notice: 'Versandkosten werden beim Checkout berechnet.',
                button: 'Direkt zum Checkout',
              }
            }
          });
        });
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      script.async = true;
      script.onload = initShopify;
      document.body.appendChild(script);
    } else {
      initShopify();
    }
  }, [productId]);

  return (
    <div id={`shopify-product-${productId}`} className="w-full" />
  );
}
