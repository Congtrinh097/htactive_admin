import * as React from 'react';

class SideBar extends React.Component<any, any> {
  render() {
    return (
      <aside id="sidebar" className="page-sidebar hidden-md hidden-sm hidden-xs">
        <div className="sidebar-inner">
          <div className="sidebar-scrollarea">
            <div className="sidebar-panel">
              <h5 className="sidebar-panel-title">Profile</h5>
            </div>
            <div className="user-info clearfix">
              <img src="./assets/img/avatars/128.jpg" alt="avatar"/>
              <span className="name">SuggeElson</span>
              <div className="btn-group">
                <button type="button" className="btn btn-default btn-xs"><i className="l-basic-gear"/>
                </button>
                <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                  settings <span className="caret"/>
                </button>
                <ul className="dropdown-menu right" role="menu">
                  <li><a href="#"><i className="fa fa-edit"/>Edit profile</a>
                  </li>
                  <li><a href="#"><i className="fa fa-money"/>Windraws</a>
                  </li>
                  <li><a href="#"><i className="fa fa-credit-card"/>Deposits</a>
                  </li>
                  <li className="divider"/>
                  <li><a href="#"><i className="fa fa-power-off"/>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-panel">
              <h5 className="sidebar-panel-title">Navigation</h5>
            </div>
            <div className="side-nav">
              <ul className="nav">
                <li><a href="#"><i className="l-basic-laptop"/><span className="txt">Dashboard</span></a>
                </li>
                <li>
                  <a href="#"><i className="l-ecommerce-graph1"/> <span className="txt">Charts</span></a>
                  <ul className="sub">
                    <li><a href="#"><span className="txt">Flot charts</span></a>
                    </li>
                    <li><a href="#"><span className="txt">Morris charts</span></a>
                    </li>
                    <li><a href="#"><span className="txt">Chartjs </span></a>
                    </li>
                    <li><a href="#"><span className="txt">Other charts</span></a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="sidebar-panel">
              <h5 className="sidebar-panel-title">Server stats</h5>
              <div className="sidebar-panel-content">
                <div className="sidebar-stat mb10">
                  <p className="color-white mb5 mt5"><i className="fa fa-hdd-o mr5"/> Disk Space <span
                    className="pull-right small">30%</span>
                  </p>
                  <div className="progress flat transparent progress-bar-xs">
                    <div className="progress-bar progress-bar-white" role="progressbar" style={{width: '30%'}}/>
                  </div>
                  <span className="dib s12 mt5 per100 text-center">3001.56 / 10000 MB</span>
                </div>
                <div className="sidebar-stat">
                  <p className="color-white mb5 mt5"><i className="glyphicon glyphicon-transfer mr5"/> Bandwidth
                    Transfer <span className="pull-right small">78%</span>
                  </p>
                  <div className="progress flat transparent progress-bar-xs">
                    <div className="progress-bar progress-bar-white" role="progressbar" style={{width: '78%'}}/>
                  </div>
                  <span className="dib s12 mb10 mt5 per100 text-center">87565.12 / 120000 MB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default SideBar;