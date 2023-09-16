export const variants = {
  hidden: {
    opacity: 0.2,
    x: 5,
    y: 5,
  },
  visible: () => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
    },
  }),
};
