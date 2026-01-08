import { motion } from "framer-motion";

export default function DeviceMockup() {
    return (
        <motion.div
            className="device" id="about"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
        >
            <div className="device-screen">
                <img src="/Users/pranay/Desktop/shopping-website/images/2ef66b2dc23c0230393891300639f3e1.jpg" alt="img" />

            </div>
        </motion.div>
    );
}