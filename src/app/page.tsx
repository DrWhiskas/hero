'use client'
import Image from "next/image";
import Hero from "../components/Hero";
import { motion } from 'framer-motion';


 const Home = () => {
  
  return (
		<div>
			<Hero
				backgroundImage="https://images.squarespace-cdn.com/content/v1/63d79882b8a43861cab41796/1b7285a5-7048-485e-8907-c9f9a0c8721d/Hand-03-White-stick.jpg"
				content={
					<div className="w-screen h-screen flex flex-col justify-between px-20 ">
						<div className="relative top-30">
							<div className="flex flex-col space-y-0 mb-10">
								<motion.span
									initial={{ x: -300, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.8, ease: 'easeOut' }}
									className="text-[15rem] leading-44"
								>
									feel
								</motion.span>
								<motion.span
									initial={{ x: 300, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
									className="text-[15rem] leading-44"
								>
									better
								</motion.span>
							</div>
							<motion.p
								initial={{y: 300, opacity: 0}}
								animate={{y: 0, opacity: 1}}
								transition={{duration: 0.8, delay: 0.6, ease: 'easeOut'}}
							
							>
								we have used plants for thousands of years in our search for
								better
								<br />
								wellness-sofi is chatting the future of plant-based remedies
							</motion.p>
						</div>

						<motion.button
							initial={{ y: 300, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							whileHover={{y:-8}}
							whileTap={{scale: 0.96}}
							transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
							className="relative bg-black text-white self-center w-[7%] rounded-full h-[5%] top-[10%] hover:text-black hover:border hover- hover:bg-white hover:cursor-pointer p-2 "
						>
							shop sofi
						</motion.button>
						<motion.p 
							initial={{x: -300, opacity: 0}}
							animate={{x:0, opacity:1}}
							transition={{duration: 0.8,delay: 0.8,  ease: "easeOut"}}
						className="relative bottom-5">purity of plant . power of people . preservation of planet</motion.p>
					</div>
				}
			/>
		</div>
	);
}
export default Home