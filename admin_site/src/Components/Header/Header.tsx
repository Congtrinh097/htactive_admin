import * as React from 'react';

class Header extends React.Component<any, any> {
  render() {
    return (
      <div id="header" className="page-navbar">
        <a href="#" className="navbar-brand hidden-xs hidden-sm">
          <img src="./assets/img/logo.png" className="logo hidden-xs" alt="Dynamic logo"/>
          <img src="./assets/img/logosm.png" className="logo-sm hidden-lg hidden-md" alt="Dynamic logo"/>
        </a>
        <div id="navbar-no-collapse" className="navbar-no-collapse">
          <ul className="nav navbar-nav">
            <li className="toggle-sidebar">
              <a href="#">
                <i className="fa fa-reorder"/>
                <span className="sr-only">Collapse sidebar</span>
              </a>
            </li>
            <li>
              <a href="#" className="reset-layout tipB" title="Reset panel position for this page">
                <i className="fa fa-history"/></a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" data-toggle="dropdown">
                <i className="fa fa-bell-o"/>
                <span className="sr-only">Notifications</span>
                <span className="badge badge-danger">6</span>
              </a>
              <ul className="dropdown-menu right dropdown-notification" role="menu">
                <li><a href="#" className="dropdown-menu-header">Notifications</a>
                </li>
                <li><a href="#"><i className="l-basic-life-buoy"/> 2 support request</a>
                </li>
                <li><a href="#"><i className="l-basic-gear"/> Settings is changed</a>
                </li>
                <li><a href="#"><i className="l-weather-lightning"/> 5 min server downtime</a>
                </li>
                <li><a href="#"><i className="l-basic-server2"/> Databse backup is complete</a>
                </li>
                <li><a href="#"><i className="l-basic-lightbulb"/> SuggeElson push 1 commit</a>
                </li>
                <li><a href="#" className="view-all">View all <i className="l-arrows-right"/> </a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" data-toggle="dropdown">
                <i className="fa fa-cog"/>
                <span className="sr-only">Settings</span>
              </a>
              <ul className="dropdown-menu dropdown-form dynamic-settings right" role="menu">
                <li><a href="#" className="dropdown-menu-header">Template settings</a>
                </li>
                <li>
                  <div className="toggle-custom">
                    <label className="toggle" data-on="ON" data-off="OFF">
                      <input type="checkbox" id="fixed-header-toggle" name="fixed-header-toggle" checked/>
                      <span className="button-checkbox"/>
                    </label>
                    <label>Fixed header</label>
                  </div>
                </li>
                <li>
                  <div className="toggle-custom">
                    <label className="toggle" data-on="ON" data-off="OFF">
                      <input type="checkbox" id="fixed-left-sidebar" name="fixed-left-sidebar" checked/>
                      <span className="button-checkbox"/>
                    </label>
                    <label>Fixed Left Sidebar</label>
                  </div>
                </li>
                <li>
                  <div className="toggle-custom">
                    <label className="toggle" data-on="ON" data-off="OFF">
                      <input type="checkbox" id="fixed-right-sidebar" name="fixed-right-sidebar" checked/>
                      <span className="button-checkbox"/>
                    </label>
                    <label>Fixed Right Sidebar</label>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-power-off"/>
                <span className="sr-only">Logout</span>
              </a>
            </li>
            <li>
              <a id="toggle-right-sidebar" href="#" className="tipB" title="Toggle right sidebar">
                <i className="l-software-layout-sidebar-right"/>
                <span className="sr-only">Toggle right sidebar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;