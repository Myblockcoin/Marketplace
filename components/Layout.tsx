import Header from './Header';
import Footer from './Footer';
interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen items-center">
            <Header />
            <main className="container">{children}</main>
            <Footer />
        </div>
    );
}