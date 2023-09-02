export const OchestraList = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const OchestraLeftXItem = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0 },
};

export const OchestraXItem = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0 },
};

export const OchestraYItem = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 },
};
