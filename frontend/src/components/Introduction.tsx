import IntroductionLinkGroup from "./IntroductionLinkGroup.tsx"

const Introduction = () => {
    return (
        <div className="introduction">
            <h1>Authentic Tamales Made Fresh Daily</h1>
            <p>Family-crafted flavors passed down through generations</p>
            <IntroductionLinkGroup />
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default Introduction