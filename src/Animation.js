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
            ease: 'anticipate',
            when: 'beforeChildren',
            staggerChildren: .25
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

export const titleAnim = {
    hidden: {
        y: 200
    },
    show: {
        y: 0,
        transition: {
            duration: .75,
            ease: 'anticipate'
        }
    }
}

export const fade = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: .75,
            ease: 'anticipate'
        }
    }
}

export const photoAnim = {
    hidden: {
        opacity: 0,
        scale: 1.5
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .75,
            ease: 'anticipate'
        }
    }
}