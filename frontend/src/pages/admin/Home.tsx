function Home() {
/*
	const [data, setData] = useState<Profile[]>([]);

	const apiUrl = process.env.REACT_APP_BACKEND_URL;
	useEffect(() => {
			axios.get(apiUrl +  'api/profile/all').then((response) => {
				const profiles: Profile[] = response.data.map((json: any) => {
					const profile = new Profile(
						json.id,
						json.name,
						json.description,
						[],
						[]
					);

					return profile;
				});

				setData(profiles);
			});
		})

	*/


    return (
        <h1 className="text-4xl font-bold underline">
            Helloa world!
        </h1>
    );
}

export default Home;