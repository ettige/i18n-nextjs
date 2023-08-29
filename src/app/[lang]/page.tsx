const Home = ({
    params,
  }: {
    params: { lang: string; };
  }) =>{
    return <h1>{JSON.stringify(params)}</h1>;
  }

export default Home;