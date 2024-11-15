'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ShoppingCart, Menu, X, ChevronUp } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import HeroSection from './HeroSection'
import FeaturedAcaiBowls from './FeaturedAcaiBowls'
import Footer from './Footer'

const navItems = ['Home', 'Menu', 'About', 'Contact']

export default function AcaiParadise() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [cartItems, setCartItems] = useState(0)
    const [showScrollTop, setShowScrollTop] = useState(false)

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const addToCart = useCallback(() => {
        setCartItems(prevItems => prevItems + 1)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-purple-500 dark:bg-purple-400 origin-left z-50"
                style={{ scaleX }}
            />
            <motion.header
                className="bg-white dark:bg-gray-900 text-purple-800 dark:text-purple-200 p-4 sticky top-0 z-40 shadow-md transition-colors duration-200"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <motion.h1
                        className="text-3xl font-bold text-purple-600 dark:text-purple-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Açaí da Bebê
                    </motion.h1>
                    <nav className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-purple-700 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                        <motion.button
                            className="relative text-purple-700 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Shopping cart with ${cartItems} items`}
                        >
                            <ShoppingCart />
                            <AnimatePresence>
                                {cartItems > 0 && (
                                    <motion.span
                                        key="cart-count"
                                        className="absolute -top-2 -right-2 bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    >
                                        {cartItems}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                        <ThemeToggle />
                        <motion.button
                            className="md:hidden text-purple-700 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white dark:bg-gray-900 text-purple-800 dark:text-purple-200 p-4 shadow-lg transition-colors duration-200"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navItems.map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block py-2 text-purple-700 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
                                whileHover={{ x: 10 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="flex-grow">
                <HeroSection />
                <FeaturedAcaiBowls addToCart={addToCart} />
            </main>

            <Footer />

            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        className="fixed bottom-4 right-4 bg-purple-500 dark:bg-purple-600 text-white p-2 rounded-full shadow-lg"
                        onClick={scrollToTop}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Scroll to top"
                    >
                        <ChevronUp />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}