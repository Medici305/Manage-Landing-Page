export const PageTransition = {
    hidden: {
        opacity: 0,
        y: 200
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            duration: 1,
            ease: 'anticipate'
        }
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: .5
        }
    }
}