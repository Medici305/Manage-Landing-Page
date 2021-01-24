import React from "react";
import BetterProduct from "../components/BetterProduct";
import Difference from "../components/Difference";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";
import { PageTransition } from "../Animation";

const Home = () => {
  return (
    <motion.div
      exit="exit"
      variants={PageTransition}
      initial="hidden"
      animate="show"
    >
      <BetterProduct />
      <Difference />
      <Testimonials />
    </motion.div>
  );
};

export default Home;
