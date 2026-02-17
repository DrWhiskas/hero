"use client"

interface HeroProps {
 
  content?: React.ReactNode
  backgroundImage?: string
  backgroundColor?: string
}

const Hero: React.FC<HeroProps> = ({ content, backgroundColor, backgroundImage,}) => {
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