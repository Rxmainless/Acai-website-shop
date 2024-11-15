const navItems = ['Home', 'Menu', 'About', 'Contact']

export default function Footer() {
    return (
        <footer className="bg-purple-800 dark:bg-gray-900 text-white py-8 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Açaí Paradise</h3>
                        <p className="mb-4">Bringing the authentic taste of Brazilian açaí to your doorstep.</p>
                        <div className="flex space-x-4">
                            {/* Add social media icons here */}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-purple-300 transition-colors duration-200">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p>123 Açaí Street, Rio de Janeiro, Brazil</p>
                        <p>Phone: +55 (21) 1234-5678</p>
                        <p>Email: info@acaiparadise.com</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-purple-700 dark:border-gray-700 text-center">
                    <p>&copy; 2023 Açaí Paradise. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}