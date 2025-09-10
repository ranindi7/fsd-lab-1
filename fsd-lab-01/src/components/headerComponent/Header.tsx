import logo from "../../assets/logo.svg";

export default function Header() {
    return (
        <header>
            <nav>
                <div id="logo">
                    <img src={logo} alt="Pixell River Logo" height="100px"/>
                </div>
                <ul>
                    <li><a href="#">Employee</a></li>
                    <li><a href="#">Organization</a></li>
                </ul>
            </nav>

            <div id="welcome-message">
                <h1>Pixell River Financial Employee and Organization Data</h1>
                <p>Welcome to Pixell River's employee and organization data page</p>
            </div>
        </header>
    )
}