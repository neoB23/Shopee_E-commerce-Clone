import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    const [cartItems, setCartItems] = useState([
        { 
            id: 1, 
            title: 'Wireless Bluetooth Earbuds TWS Pro Max Noise Cancelling IPX5 Waterproof', 
            img: '/images/categories/12.png', 
            price: 299, 
            originalPrice: 1299, 
            qty: 1, 
            shop: 'TechGadgets Official Store',
            shopId: 1,
            variation: 'Black',
            voucher: '₱50 OFF'
        },
        { 
            id: 2, 
            title: 'Men Casual Sneakers Breathable Running Sports Shoes Lightweight 2024', 
            img: '/images/sneakers.png', 
            price: 899, 
            originalPrice: 1799, 
            qty: 2, 
            shop: 'SportShoe Hub',
            shopId: 2,
            variation: 'White, Size 42',
            voucher: null
        },
        { 
            id: 3, 
            title: 'Large Capacity Laptop Backpack Waterproof USB Charging Travel Bag', 
            img: '/images/bag.webp', 
            price: 399, 
            originalPrice: 899, 
            qty: 1, 
            shop: 'TechGadgets Official Store',
            shopId: 1,
            variation: 'Navy Blue',
            voucher: '₱50 OFF'
        },
    ]);

    const [selectedItems, setSelectedItems] = useState(new Set(cartItems.map(i => i.id)));

    const updateQty = (id, delta) => {
        setCartItems(items => items.map(item => 
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
        setSelectedItems(prev => {
            const newSet = new Set(prev);
            newSet.delete(id);
            return newSet;
        });
    };

    const toggleSelect = (id) => {
        setSelectedItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) newSet.delete(id);
            else newSet.add(id);
            return newSet;
        });
    };

    const toggleSelectAll = () => {
        if (selectedItems.size === cartItems.length) {
            setSelectedItems(new Set());
        } else {
            setSelectedItems(new Set(cartItems.map(i => i.id)));
        }
    };

    const selectedCartItems = cartItems.filter(item => selectedItems.has(item.id));
    const subtotal = selectedCartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const totalItems = selectedCartItems.reduce((acc, item) => acc + item.qty, 0);
    const totalSavings = selectedCartItems.reduce((acc, item) => acc + ((item.originalPrice - item.price) * item.qty), 0);

    // Group items by shop
    const groupedItems = cartItems.reduce((acc, item) => {
        if (!acc[item.shopId]) {
            acc[item.shopId] = { shop: item.shop, voucher: item.voucher, items: [] };
        }
        acc[item.shopId].items.push(item);
        return acc;
    }, {});

    const suggestedProducts = [
        { id: 101, title: 'Phone Case iPhone 15 Pro Max Clear', img: '/images/categories/2.png', price: 99, originalPrice: 299, sold: '12.3k' },
        { id: 102, title: 'USB-C Fast Charging Cable 2M', img: '/images/categories/2.png', price: 79, originalPrice: 199, sold: '45.6k' },
        { id: 103, title: 'Laptop Stand Aluminum Adjustable', img: '/images/categories/17.png', price: 349, originalPrice: 799, sold: '8.9k' },
        { id: 104, title: 'Wireless Mouse Rechargeable Silent', img: '/images/categories/17.png', price: 199, originalPrice: 499, sold: '23.4k' },
    ];

    return (
        <main className="bg-gray-100 min-h-screen py-3 sm:py-6">
            <div className="max-w-[1200px] mx-auto px-2 sm:px-4">
                {/* Header */}
                <div className="bg-white rounded-sm shadow-sm mb-3">
                    <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border-b border-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-shopee flex-shrink-0">
                            <path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h16.5l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4H1V2h3.25z"/>
                        </svg>
                        <h1 className="text-lg sm:text-xl text-shopee font-medium">Shopping Cart</h1>
                        <span className="text-gray-400 text-sm">({cartItems.length} items)</span>
                    </div>
                    
                    {/* Table Header - Desktop */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 text-xs text-gray-500 uppercase">
                        <div className="col-span-6 flex items-center gap-3">
                            <input 
                                type="checkbox" 
                                className="w-4 h-4 accent-shopee cursor-pointer" 
                                checked={selectedItems.size === cartItems.length && cartItems.length > 0}
                                onChange={toggleSelectAll}
                            />
                            <span>Product</span>
                        </div>
                        <div className="col-span-2 text-center">Unit Price</div>
                        <div className="col-span-2 text-center">Quantity</div>
                        <div className="col-span-1 text-center">Total</div>
                        <div className="col-span-1 text-center">Actions</div>
                    </div>
                </div>

                {/* Cart Items */}
                {cartItems.length === 0 ? (
                    <div className="bg-white rounded-sm shadow-sm p-8 sm:p-12 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" className="mx-auto mb-4 text-gray-200">
                            <path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M5.2 4h16.5l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4H1V2h3.25z"/>
                        </svg>
                        <p className="text-gray-500 text-sm sm:text-base mb-4">Your shopping cart is empty</p>
                        <Link to="/" className="inline-block bg-shopee hover:bg-shopee2 text-white px-6 sm:px-8 py-2 rounded-sm text-sm transition-colors">
                            Go Shopping Now
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {Object.entries(groupedItems).map(([shopId, group]) => (
                            <div key={shopId} className="bg-white rounded-sm shadow-sm overflow-hidden">
                                {/* Shop Header */}
                                <div className="flex flex-wrap items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 border-b border-gray-100">
                                    <input 
                                        type="checkbox" 
                                        className="w-4 h-4 accent-shopee cursor-pointer" 
                                        checked={group.items.every(item => selectedItems.has(item.id))}
                                        onChange={() => {
                                            const allSelected = group.items.every(item => selectedItems.has(item.id));
                                            setSelectedItems(prev => {
                                                const newSet = new Set(prev);
                                                group.items.forEach(item => {
                                                    if (allSelected) newSet.delete(item.id);
                                                    else newSet.add(item.id);
                                                });
                                                return newSet;
                                            });
                                        }}
                                    />
                                    <div className="flex items-center gap-2">
                                        <span className="bg-shopee text-white text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-sm font-medium">Mall</span>
                                        <span className="text-sm font-medium text-gray-800">{group.shop}</span>
                                    </div>
                                    <Link to="/" className="text-xs text-shopee hover:text-shopee2 ml-auto">
                                        View Shop &gt;
                                    </Link>
                                </div>
                                
                                {/* Voucher Banner */}
                                {group.voucher && (
                                    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-orange-50 border-b border-orange-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-shopee">
                                            <path fill="currentColor" d="M21 5H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1a2 2 0 0 1 0 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1a2 2 0 0 1 0-4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/>
                                        </svg>
                                        <span className="text-xs text-shopee">Shop Voucher: {group.voucher} (Min. Spend ₱500)</span>
                                        <button className="ml-auto text-xs text-shopee font-medium">Claim</button>
                                    </div>
                                )}
                                
                                {/* Products */}
                                {group.items.map((item, idx) => (
                                    <div key={item.id} className={`p-3 sm:p-4 ${idx !== group.items.length - 1 ? 'border-b border-gray-100' : ''}`}>
                                        {/* Mobile Layout */}
                                        <div className="md:hidden">
                                            <div className="flex gap-3">
                                                <input 
                                                    type="checkbox" 
                                                    className="w-4 h-4 accent-shopee self-start mt-1 cursor-pointer" 
                                                    checked={selectedItems.has(item.id)}
                                                    onChange={() => toggleSelect(item.id)}
                                                />
                                                <img src={item.img} alt={item.title} className="w-20 h-20 object-contain bg-gray-50 rounded flex-shrink-0" />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm text-gray-800 line-clamp-2">{item.title}</p>
                                                    <p className="text-xs text-gray-400 mt-1">Variation: {item.variation}</p>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className="text-gray-400 text-xs line-through">₱{item.originalPrice.toLocaleString()}</span>
                                                        <span className="text-shopee font-medium">₱{item.price.toLocaleString()}</span>
                                                    </div>
                                                    <div className="flex items-center justify-between mt-2">
                                                        <div className="flex items-center border border-gray-300 rounded-sm">
                                                            <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100">-</button>
                                                            <span className="w-10 text-center text-sm border-x border-gray-300">{item.qty}</span>
                                                            <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100">+</button>
                                                        </div>
                                                        <button onClick={() => removeItem(item.id)} className="text-xs text-gray-500 hover:text-shopee">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Desktop Layout */}
                                        <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                                            <div className="col-span-6 flex gap-3 items-center">
                                                <input 
                                                    type="checkbox" 
                                                    className="w-4 h-4 accent-shopee cursor-pointer" 
                                                    checked={selectedItems.has(item.id)}
                                                    onChange={() => toggleSelect(item.id)}
                                                />
                                                <img src={item.img} alt={item.title} className="w-20 h-20 object-contain bg-gray-50 rounded flex-shrink-0" />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm text-gray-800 line-clamp-2">{item.title}</p>
                                                    <p className="text-xs text-gray-400 mt-1">Variation: {item.variation}</p>
                                                </div>
                                            </div>
                                            <div className="col-span-2 text-center">
                                                <span className="text-xs text-gray-400 line-through block">₱{item.originalPrice.toLocaleString()}</span>
                                                <span className="text-sm text-gray-800">₱{item.price.toLocaleString()}</span>
                                            </div>
                                            <div className="col-span-2 flex justify-center">
                                                <div className="flex items-center border border-gray-300 rounded-sm">
                                                    <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100">-</button>
                                                    <span className="w-12 text-center text-sm border-x border-gray-300 py-1">{item.qty}</span>
                                                    <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100">+</button>
                                                </div>
                                            </div>
                                            <div className="col-span-1 text-center">
                                                <span className="text-shopee font-medium">₱{(item.price * item.qty).toLocaleString()}</span>
                                            </div>
                                            <div className="col-span-1 text-center">
                                                <button onClick={() => removeItem(item.id)} className="text-sm text-gray-500 hover:text-shopee transition-colors">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                {/* You May Also Like */}
                {cartItems.length > 0 && (
                    <div className="bg-white rounded-sm shadow-sm mt-3 overflow-hidden">
                        <div className="px-3 sm:px-4 py-3 border-b border-gray-100">
                            <h3 className="text-sm font-medium text-gray-700">You May Also Like</h3>
                        </div>
                        <div className="flex overflow-x-auto gap-2 p-3 sm:p-4 scrollbar-hide">
                            {suggestedProducts.map((product) => (
                                <Link 
                                    key={product.id}
                                    to="/"
                                    className="flex-shrink-0 w-[120px] sm:w-[150px] bg-white border border-gray-100 rounded-sm hover:shadow-lg transition-shadow group"
                                >
                                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                                        <img src={product.img} alt={product.title} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform" />
                                        <div className="absolute top-0 right-0 bg-yellow-400 text-red-600 text-[9px] px-1 py-0.5 font-bold">
                                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <p className="text-[11px] text-gray-800 line-clamp-2">{product.title}</p>
                                        <p className="text-shopee font-bold text-sm mt-1">₱{product.price}</p>
                                        <p className="text-gray-400 text-[10px]">{product.sold} sold</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Sticky Checkout Bar */}
                {cartItems.length > 0 && (
                    <div className="bg-white rounded-sm shadow-lg mt-3 sticky bottom-0 z-50 border-t-2 border-shopee">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-4">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <label className="flex items-center gap-2 text-sm cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="w-4 h-4 accent-shopee" 
                                        checked={selectedItems.size === cartItems.length && cartItems.length > 0}
                                        onChange={toggleSelectAll}
                                    />
                                    <span className="text-xs sm:text-sm">Select All ({cartItems.length})</span>
                                </label>
                                <button className="text-xs sm:text-sm text-gray-600 hover:text-shopee transition-colors">Delete</button>
                            </div>
                            <div className="flex items-center gap-3 sm:gap-6">
                                <div className="flex-1 sm:flex-none text-right">
                                    <div className="text-xs text-gray-500 hidden sm:block">
                                        Saved: <span className="text-shopee">₱{totalSavings.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-baseline gap-1 justify-end">
                                        <span className="text-xs sm:text-sm text-gray-600">Total ({totalItems} items):</span>
                                        <span className="text-lg sm:text-2xl text-shopee font-bold">₱{subtotal.toLocaleString()}</span>
                                    </div>
                                </div>                                <Link 
                                    to={selectedItems.size > 0 ? "/Checkout" : "#"}
                                    className={`px-6 sm:px-12 py-2.5 sm:py-3 rounded-sm text-sm uppercase font-medium transition-colors inline-block text-center ${
                                        selectedItems.size > 0 
                                            ? 'bg-shopee hover:bg-shopee2 text-white' 
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed pointer-events-none'
                                    }`}
                                >
                                    Check Out
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Cart;