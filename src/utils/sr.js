import ScrollReveal from 'scrollreveal';

const isScrollReveal = typeof window === undefined;
const sr = isScrollReveal ? null : ScrollReveal();

export default sr;
