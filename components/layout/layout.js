import MainHeader from "./main-header"

const Layout = (props) => {
    return (
        <div>
        <MainHeader />
            {props.children}
        </div>
    )
}

export default Layout
