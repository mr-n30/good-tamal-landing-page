import IntroductionLinkGroup from "./IntroductionLinkGroup.tsx"

const Introduction = () => {
    const imgURL: string = "https://images.unsplash.com/photo-1732118070605-8c5faa62d284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHRhbWFsZXN8ZW58MXx8fHwxNzY0NDc1NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    return (
        <section className="introduction">
            <img
                src={imgURL}
                alt="Good Tamal Introduction Image Showing Delicious Tamales"
                className="introduction-image" />
            <div className="introduction-image-overlay"></div>
            <h1>Authentic Tamales Made Fresh Daily</h1>
            <p>Family-crafted flavors passed down through generations</p>
            <IntroductionLinkGroup />
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="tmp-color w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </div>
        </section>
    )
}

export default Introduction