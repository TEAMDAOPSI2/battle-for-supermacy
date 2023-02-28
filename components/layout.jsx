import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Layout = ({children}) => {
    return (
        <>
            <div className="flex flex-row">
                <Navbar/>
                {/*wi*/}
                <main id="main-page">
                    {children}
                    <Footer/>
                </main>

            </div>
        </>
    )
}

export default Layout;