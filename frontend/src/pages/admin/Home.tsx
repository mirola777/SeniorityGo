import { useTranslation } from 'react-i18next';

function AdminHome() {
	// Translation component
	const { t } = useTranslation();

	return (
		<div className="py-8 pr-8 mx-auto w-full h-full">
			<div className="flex flex-col items-center  w-full h-full">
				<div className='max-w-5xl text-center'>
					<h1 className="text-5xl font-extrabold  text-white md:text-7xl lg:text-9xl">{t('welcome_to')} <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{t('app_name')}.</span></h1>
				</div>
			</div>
		</div>

	);
}

export default AdminHome;