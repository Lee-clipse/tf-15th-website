export const variants = {
  hidden: {
    opacity: 0,
  },
  visible: () => ({
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
      repeat: Infinity,
      repeatType: "reverse",
    },
  }),
};
