//Stateless functional component
//sfc shortcut
const Navbar = (props) => {
    
    return (  
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="www.smchange.com">
                    Your Cart
                        <span className="badge badge-pill badge-secondary m-2">{props.totalItems} Items</span>
                    </a>
            </div>
        </nav>

    );
}
 
export default Navbar;

/* class Navbar extends Component {
    render() { 
        return ( 

        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Your Cart
                        <span className="badge badge-pill badge-secondary m-2">{this.props.totalItems} Items</span>
                    </a>
            </div>
        </nav>
         );
    }
}
 
export default Navbar; */