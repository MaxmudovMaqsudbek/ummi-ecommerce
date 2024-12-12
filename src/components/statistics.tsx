import Image from "next/image";
import StatisticImg from '../../public/statisticsImg3.webp';

const Statistics = () => {
	return (
		<section className='text-gray-600 body-font'>
			<div className='container px-5 py-24 mx-auto flex flex-wrap'>

           

				<div className='flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10'>
					<div className='w-full sm:p-4 px-4 mb-6'>
						<h1 className='title-font font-medium text-3xl mb-2 text-gray-900 font-serif'>
                        Sales have grown by 25% this season thanks to our exclusive designs.
						</h1>
						<div className='leading-relaxed'>
							Pour-over craft beer pug drinking vinegar live-edge
							gastropub, keytar neutra sustainable fingerstache
							kickstarter.
						</div>
					</div>
					<div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
						<h2 className='title-font font-medium text-4xl text-gray-900'>
							10K
						</h2>
						<p className='leading-relaxed'>Users</p>
					</div>
					<div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
						<h2 className='title-font font-medium text-4xl text-gray-900'>
							7.8K
						</h2>
						<p className='leading-relaxed'>Subscribes</p>
					</div>
					<div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
						<h2 className='title-font font-medium text-4xl text-gray-900'>
							3.5K
						</h2>
						<p className='leading-relaxed'>Downloads</p>
					</div>
					<div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
						<h2 className='title-font font-medium text-4xl text-gray-900'>
							4.8K
						</h2>
						<p className='leading-relaxed'>Products</p>
					</div>
				</div>

                <div className='lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0'>
					<Image
                        width={400}
                        height={300}
						className='object-cover object-center  w-full h-96'
						src={StatisticImg}
						alt='stats'
					/>
				</div>
				
			</div>
		</section>
	);
};

export default Statistics;