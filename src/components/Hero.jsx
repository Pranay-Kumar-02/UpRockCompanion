import { motion, useScroll, useTransform } from "framer-motion";
import DeviceMockup from "./DeviceMockup";

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -80]);

    return (
        <section className="hero" id="technology">
            <DeviceMockup />
            <motion.h1 style={{ y }} id="pre-order">
                Feeling unheard?
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}

            >
                Companion listens, understands, and responds — just for you.

            </motion.p>

            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="cta"
            >
                Pre-order Now
            </motion.button>
        </section>
    );
}