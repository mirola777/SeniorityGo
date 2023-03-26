import { useTranslation } from 'react-i18next';
import AppBackround from '../../assests/images/AppBackground.jpg'

function Home() {
	// Translation component
	const { t } = useTranslation();

	<h1>{t('welcome')}</h1>

	return (
		<div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: `url(${AppBackround})` }}>
			<div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-[#0f0c29]/95 via-[#302b63]/95 to-[#24243e]/95">
				<div className='max-w-5xl text-center'>
					<h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-7xl lg:text-9xl">{t('welcome_to')} <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{t('app_name')}.</span></h1>
				</div>

			</div>
		</div>
	);
}

export default Home;