import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

import styles from './styles.module.css'


const cards = [
    'https://images.ctfassets.net/x7j9qwvpvr5s/3SH18J28QdaF37Pf7zDoyn/89348e03f2bd40d5059ad69485dfd527/MY23-Ducati-Streetfighter-Lamborghini-Model-Blocks-630x390.png',
    'https://images.ctfassets.net/x7j9qwvpvr5s/SH02gdny9igmzmJDkEtj7/d2416c646de79ca94496414a90a19fdd/MY-22-DesertX-Model-Blocks-630x390.png',
    'https://images.ctfassets.net/x7j9qwvpvr5s/3Qd6uyFBdJG1ncF2I0bZBG/a50a902695ac651a00f4d0863711859c/MY-22-Monster-937-plus-Rd-Model-Blocks-630x390-v06.png',
    'https://images.ctfassets.net/x7j9qwvpvr5s/1nCKIizDwNLjwFjSPoBBaD/6ed565659a7984c89f00ef4454a75e79/MY-22-Panigale-V4-SP2-Model-Blocks-630x390-v02.png',
    'https://images.ctfassets.net/x7j9qwvpvr5s/35BakkRe07iCPsmLQpdRW5/8138ab4aec94495678503e1c2d64d324/MY-22-HYM-950-01-Model-Blocks-630x390-v06.png',
    'https://images.ctfassets.net/x7j9qwvpvr5s/50z2yoRqtEYOCFZ8ATX3ZG/077713ad0c35089bdd7d7d79e3635932/MY-22-MTS-V4-S-Rd-Model-Blocks-630x390-v06.png',
    'https://images.ctfassets.net/x7j9qwvpvr5s/3XU38GP20poXjMUUIDANxP/7c499ffdf7c7f3952942c5e742e3dd06/MY-22-SF-V2-SG-Model-Blocks-630x390-v07.png',
    'https://images.ctfassets.net/x7j9qwvpvr5s/3ylApicpoYv3AjrfaqVDRp/d34c05cc4e4b01536d3116fc0730b1f4/MY-22-SCR-1100-Tribute-Model-Blocks-630x390.png',
    'https://images.ctfassets.net/x7j9qwvpvr5s/1RvUevmAcjNVCMTA98vJVO/eee98a808ce8027797b0337e1c351eeb/MY-22-Diavel-1260-S-BYG-01-Model-Blocks-630x390-v02.png',
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
})
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
    `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`



function Deck() {

    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, api] = useSprings(cards.length, i => ({
        ...to(i),
        from: from(i),
    })) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
        const trigger = vx > 0.2 // If you flick hard enough it should trigger the card to fly out
        if (!active && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        api.start(i => {
            if (index !== i) return // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
            const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0) // How much the card tilts, flicking it harder makes it rotate faster
            const scale = active ? 1.1 : 1 // Active cards lift up a bit
            return {
                x,
                rot,
                scale,
                delay: undefined,
                config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
            }
        })
        if (!active && gone.size === cards.length)
            setTimeout(() => {
                gone.clear()
                api.start(i => to(i))
            }, 600)
    })
    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
    return (
        <>
            {props.map(({ x, y, rot, scale }, i) => (
                <animated.div className={styles.deck} key={i} style={{ x, y }}>
                    <animated.div
                        {...bind(i)}
                        style={{
                            transform: interpolate([rot, scale], trans),
                            backgroundImage: `url(${cards[i]})`,
                        }}
                    />
                </animated.div>
            ))}
        </>
    )
}

export default Deck
