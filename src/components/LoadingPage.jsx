import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        fontFamily: "sans-serif",
    },
    text: {
        fontSize: "4rem",
        margin: 0,
    }
}


const LoadingScreen = () => {
    const [percent, setPercent] = useState(0)

    useGSAP(() => {
        const obj = { value: 0 }

        gsap.to(obj, {
            value: 100,
            duration: 3,
            ease: "power2.out",
            onUpdate: () => {
                setPercent(Math.round(obj.value))
            }
        })
    }, [])

    return (
        <div style={styles.container}>
            <h1 style={styles.text}>{percent}%</h1>
            <p>Loading...</p>
        </div>
    )
}

export default LoadingScreen
