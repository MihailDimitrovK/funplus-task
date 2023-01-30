import { Card } from '../../components/Card/Card';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export default function Hero() {
  return (
    <Card as="section" radius>
      <Header />
      <Footer />
    </Card>
  );
}
