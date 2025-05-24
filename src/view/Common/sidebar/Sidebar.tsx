import './Sidebar.css';

export function Sidebar() {
    return (
        <aside className="sidebar" style={{ gridArea: 'sidebar' }}>
            <div className="sidebar-header">
                <h3>Menu</h3>
            </div>
            <ul className="sidebar-menu">
                <li className="active">
                    <i className="icon">📊</i>
                    <span>Home</span>
                </li>
                <li>
                    <i className="icon">📁</i>
                    <span>About</span>
                </li>
                <li>
                    <i className="icon">📅</i>
                    <span>Contact</span>
                </li>
                <li>
                    <i className="icon">✉️</i>
                    <span>Messages</span>
                </li>
                <li>
                    <i className="icon">⚙️</i>
                    <span>Settings</span>
                </li>
            </ul>
            <div className="sidebar-footer">
                <div className="help-section">
                    <i className="icon">❓</i>
                    <span>Help & Support</span>
                </div>
            </div>
        </aside>
    );
}