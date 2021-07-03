import { NotificationContainer } from 'react-notifications'

import Header from "./Header";
import Footer from "./Footer";


const HomeLayout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <NotificationContainer />
            <Header />
            {children}
            <Footer />

        </div>
    )
}

export default HomeLayout
