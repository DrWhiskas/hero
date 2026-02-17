"use client"

interface HeroProps {
  title?: string
  description?: string
  content?: React.ReactNode
  backgroundImage?: string
  backgroundColor?: string
  textSize?: string
  textColor?: string

}

const Hero: React.FC<HeroProps> = ({ title, description, content, backgroundColor, backgroundImage, textSize, textColor }) => {
  return (
		<section
			className={`w-screen h-screen relative ${backgroundColor}`}
			style={
				backgroundImage
					? {
							backgroundImage: `url(${backgroundImage})`,
							backgroundSize: 'contain',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
						}
					: undefined
			}
		>
			<div className="content">{content}</div>
		</section>
	);
}

export default Hero