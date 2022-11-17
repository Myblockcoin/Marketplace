import type { NextPage } from 'next';
import Layout from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
      <section className="grid grid-cols-3 gap-4">
        <div>Coin 1</div>
        <div>Coin 2</div>
        <div>Coin 3</div>
      </section>
      </>
    </Layout>
  );
};

export default Home;
