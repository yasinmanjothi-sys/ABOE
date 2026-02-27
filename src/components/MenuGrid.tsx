'use client';
import { useState } from 'react';

type MenuItem = {
    name: string;
    price?: string;
    description?: string;
};

type MenuSection = {
    title?: string;
    items: MenuItem[];
};

const drinksData: MenuSection[] = [
    {
        title: 'Refreshments',
        items: [
            { name: 'Filtered Water on the house' },
            { name: 'Bottles Water Still/Sparkling', price: '300' },
            { name: 'Fresh Orange Juice', price: '500' },
            { name: 'Seasonal Fresh Juices', price: '350' },
            { name: 'Pot of Kenyan Tea', price: '250' },
            { name: 'Selection of Herbal Teas', price: '250' },
            { name: 'Lemon & Ginger Tea', price: '300' },
            { name: 'Pot of Fresh Mint Tea', price: '300' },
            { name: 'Lemongrass Iced Tea', price: '350/700' },
            { name: 'Classic/ Hibiscus Lemonade', price: '350/700' },
            { name: 'Chocolate Milkshake', price: '500' },
            { name: 'Vanilla Milkshake', price: '500' },
            { name: 'Strawberry Milkshake', price: '500' },
            { name: 'Sodas', price: '200' },
            { name: 'Redbull', price: '500' },
        ],
    },
    {
        title: 'Beer',
        items: [
            { name: 'Tusker Lager', price: '450' },
            { name: 'Tusker Malt', price: '450' },
            { name: 'Tusker Lite', price: '450' },
            { name: 'White Cap Lager', price: '450' },
            { name: 'White Cap Crisp', price: '450' },
            { name: 'Balozi Lager', price: '450' },
            { name: 'Guiness', price: '450' },
            { name: 'Pilsner', price: '450' },
            { name: 'Heineken', price: '500' },
            { name: 'Heineken Zero', price: '500' },
            { name: 'Savannah Cider', price: '500' },
        ],
    },
    {
        title: 'Coffees',
        items: [
            { name: 'Espresso S/D', price: '200/250' },
            { name: 'Macchiato', price: '300' },
            { name: 'Cortado', price: '350' },
            { name: 'Flat White', price: '350' },
            { name: 'Cappuccino S/D', price: '300/350' },
            { name: 'Latte', price: '350' },
            { name: 'Mocha', price: '400' },
            { name: 'Americano', price: '250' },
            { name: 'French Press', price: '250' },
            { name: 'House Brew', price: '300' },
        ],
    },
    {
        title: 'Signature Coffees',
        items: [
            { name: 'Tiramisu Iced Latte', description: 'single espresso, whipping cream, syrup', price: '500' },
            { name: 'Espresso Orange Iced Tonic', description: 'double espresso, tonic water, orange juice', price: '500' },
            { name: 'Classic Iced Affogato', description: 'single espresso, vanilla ice cream, pistachio', price: '500' },
            { name: 'Earl Grey Espresso Iced Tonic', description: 'double espresso, earl grey, tonic', price: '500' },
            { name: 'Earl Grey Coconut Iced Cloud', description: 'earl grey, whipping cream, sugar syrup, coconut water', price: '500' },
            { name: 'Spanish Iced Latte', description: 'double espresso, condensed milk', price: '500' },
            { name: 'Vietnamese Iced Latte', description: 'double espresso, condensed milk', price: '500' },
        ],
    },
    {
        title: 'Hot Chocolates',
        items: [
            { name: 'Hot Chocolate', price: '450' },
            { name: 'Mexican Hot Chocolate', price: '550' },
        ],
    }
];

const dessertsData: MenuSection[] = [
    {
        title: 'Classics',
        items: [
            { name: 'Spiced Chocolate, Black Pepper & Coffee Mousse', price: '800' },
            { name: 'Sticky Toffee Pudding Served with Ice Cream', price: '800' },
            { name: 'Baked Cheesecake', price: '800' },
        ],
    },
    {
        title: 'Eggless Desserts',
        items: [
            { name: 'Carrot Cake Served With Whipping Cream', price: '600' },
            { name: '(VO) Chocolate Cake', price: '800' },
            { name: 'Lemon Tart', price: '600' },
            { name: 'Tres Leches', price: '800' },
        ],
    },
    {
        title: 'Sweet Pizzas',
        items: [
            { name: 'Pistachio Pizza With Strawberries And Chocolate Sauce', price: '600' },
        ],
    },
    {
        title: 'Ice Creams',
        items: [
            { name: 'Vanilla' },
            { name: 'Strawberry' },
            { name: 'Chocolate' },
            { name: 'Coffee' },
            { name: 'Salted Caramel' },
            { name: 'One Scoop- 200' },
            { name: 'Two Scoop- 300' },
        ],
    }
];

const foodData: MenuSection[] = [
    {
        title: 'Starters or Snacks',
        items: [
            { name: 'Loaded Fries', description: 'Fully-loaded fries with cheese and gourmet toppings.', price: "1'140" },
            { name: 'Greek Style Fries', description: 'Mediterranean-style fries with herbs and feta cheese.', price: "1'140" },
            { name: 'Masala Chips', description: 'Spiced potato chips with aromatic Indian masala.', price: "950" },
            { name: 'Paprika Fries', description: 'Smoky paprika-dusted golden potato fries.', price: "900" },
            { name: 'Garlic Fries', description: 'Aromatic garlic-infused crispy potato fries.', price: "760" },
            { name: 'Corn Ribs', description: 'Grilled corn ribs with special seasoning.', price: "760" },
            { name: 'Plain Fries', description: 'Classic crispy golden potato fries.', price: "635" },
        ],
    },
    {
        title: 'Salads',
        items: [
            { name: 'Watermelon and Feta Salad', description: 'Refreshing summer salad with juicy watermelon and feta.', price: "1'500" },
            { name: 'Beetroot And Blue Cheese Salad', description: 'Earthy beetroot with rich blue cheese crumbles.', price: "1'500" },
            { name: 'Mango Avocado Salad', description: 'Tropical mango and creamy avocado fusion.', price: "1'500" },
            { name: 'Garden Salad', description: 'Fresh mixed greens with crisp seasonal vegetables.', price: "900" },
            { name: 'Zaatar Bean Salad', description: 'Middle Eastern spiced bean medley with aromatic herbs.', price: "1'500" },
        ]
    },
    {
        title: 'Sandwiches & Toasties',
        items: [
            { name: 'Caprese Sandwich', price: "1'520" },
            { name: 'Leek and Cheddar Toastie', price: "1'330" },
        ]
    },
    {
        title: 'Pastas',
        items: [
            { name: 'Tagliatelle Mushroom Sauce', description: 'Handmade ribbon pasta with creamy mushroom sauce.', price: "2'285" },
            { name: 'Ravioli Ricotta And Spinach', description: 'Stuffed pasta with ricotta and spinach - choice of butter and sage or red sauce.', price: "2'030" },
            { name: 'Ravioli Ricotta And Butternut Squash', description: 'Sweet butternut squash filled ravioli - choice of butter and sage or red sauce.', price: "2'030" },
            { name: 'Cacio e Pepe', description: 'Roman cheese and black pepper pasta - simple elegance.', price: "1'900" },
            { name: 'Linguine Alla Puttanesca', description: 'Bold Mediterranean pasta with olives, capers and tomatoes.', price: "1'590" },
            { name: 'Rigatoni Arrabiata Sauce', description: 'Spicy tomato sauce with tube pasta - fiery Italian classic.', price: "1'395" },
            { name: 'Aglio Olio Linguine', description: 'Classic Italian garlic and olive oil pasta perfection.', price: "1'205" },
        ]
    },
    {
        title: 'Sourdough Pizza',
        items: [
            { name: 'Margherita', description: 'tomato, mozzarella, basil, olive oil', price: "950" },
            { name: 'Verde', description: 'tomato, mozzarella, onion, bell peppers, olives, olive oil', price: "1'200" },
            { name: 'Say Cheese!', description: 'mozzarella, scamorza, gorgonzola, parmesan, olive oil', price: "1'800" },
            { name: 'When Life Gives You Lemons', description: 'tomato, mozzarella, lemons, chillies, capers, parsley, olive oil', price: "1'400" },
            { name: 'The Forager', description: 'white sauce mozzarella, mushroom, truffle oil', price: "1'800" },
            { name: 'Spinach and Ricotta', description: 'spinach, ricotta cheese, mozzarella, olive oil', price: "1'700" },
            { name: 'Pesto and Artichoke', description: 'pesto, artichokes, mozzarella, lemony arugula, cherry tomato', price: "1'600" },
            { name: 'Potato and Rosemary', description: 'white mozzarella sauce, potato, rosemary, garlic, olive oil', price: "1'600" },
        ],
    }
];

export default function MenuGrid() {
    const [activeTab, setActiveTab] = useState<'food' | 'drinks' | 'desserts'>('food');
    const [activeSubTabIndex, setActiveSubTabIndex] = useState<number>(0);

    let activeData = foodData;
    if (activeTab === 'drinks') activeData = drinksData;
    if (activeTab === 'desserts') activeData = dessertsData;

    const handleTabChange = (tab: 'food' | 'drinks' | 'desserts') => {
        setActiveTab(tab);
        setActiveSubTabIndex(0);
    };

    const activeSections = [activeData[activeSubTabIndex] || activeData[0]];

    return (
        <section id="menu" className="w-full bg-cream text-sage py-24 px-6 md:px-12 relative z-20 min-h-screen">
            <div className="max-w-4xl mx-auto flex flex-col items-center">

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-10 font-bristol text-3xl md:text-5xl lg:text-6xl tracking-wide">
                    <button
                        onClick={() => handleTabChange('food')}
                        className={`transition-opacity ${activeTab === 'food' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                    >
                        FOOD
                    </button>
                    <button
                        onClick={() => handleTabChange('drinks')}
                        className={`transition-opacity ${activeTab === 'drinks' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                    >
                        DRINKS
                    </button>
                    <button
                        onClick={() => handleTabChange('desserts')}
                        className={`transition-opacity ${activeTab === 'desserts' ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                    >
                        DESSERTS
                    </button>
                </div>

                {/* Sub-Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 lg:gap-x-8 lg:gap-y-4 mb-16 font-bristol text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide uppercase">
                    {activeData.map((section, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveSubTabIndex(idx)}
                            className={`transition-all ${activeSubTabIndex === idx ? 'opacity-100 border-b-2 border-sage-dark' : 'opacity-40 hover:opacity-70'}`}
                        >
                            {section.title?.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Optional Addons note */}
                {activeTab === 'food' && (
                    <div className="mb-12 w-full text-center font-caveat text-xl md:text-2xl tracking-wide italic opacity-90">
                        *all additional add-ons are a flat rate ksh150
                    </div>
                )}

                {/* Menu Content */}
                <div className="w-full max-w-xl mx-auto font-caveat">
                    {activeSections.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="break-inside-avoid mb-12">
                            {/* Title intentionally omitted as it is now in the sub-tabs array */}

                            <ul className="flex flex-col space-y-6">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex flex-col text-center">
                                        <div className="flex justify-center items-end text-2xl md:text-3xl font-bold tracking-[0.05em] leading-tight w-full max-w-[90%] mx-auto">
                                            <span>{item.name}</span>
                                        </div>
                                        {item.price && (
                                            <div className="text-center font-bold text-xl md:text-2xl mt-1 opacity-90">{item.price}</div>
                                        )}
                                        {item.description && (
                                            <p className="lowercase text-base md:text-lg opacity-85 italic mt-1.5 leading-snug w-full max-w-[85%] mx-auto">
                                                {item.description}
                                            </p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Copy */}
                {activeTab === 'desserts' && (
                    <div className="mt-16 text-center font-caveat text-xs md:text-sm uppercase tracking-widest opacity-80">
                        <p>V-VEGAN, N-CONTAINS NUTS, GF-GLUTEN FREE, VO-VEGAN OPTION AVAILABLE</p>
                    </div>
                )}

                <div className="mt-16 w-full flex justify-center py-8">
                    <span className="font-caveat text-3xl md:text-4xl lowercase opacity-90 italic">
                        a bit of everything
                    </span>
                </div>
            </div>
        </section>
    );
}
