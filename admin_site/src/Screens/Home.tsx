import * as React from "react";
import SideBar from "../Components/SideBar/SideBar";

export class Home extends React.Component<any, any> {
  render() {
    return (
      <div>
        <SideBar/>
        <div className="page-content sidebar-page right-sidebar-page clearfix">
          <div className="page-content-wrapper">
            <div className="page-content-inner">
              <div id="page-header" className="clearfix">
                <div className="page-header">
                  <h2>Data tables</h2>
                  <span className="txt">Represent big amount of data</span>
                </div>
                <div className="header-stats">
                  <div className="spark clearfix">
                    <div className="spark-info"><span className="number">2345</span>Visitors</div>
                    <div id="spark-visitors" className="sparkline"/>
                  </div>
                  <div className="spark clearfix">
                    <div className="spark-info"><span className="number">17345</span>Views</div>
                    <div id="spark-templateviews" className="sparkline"/>
                  </div>
                  <div className="spark clearfix">
                    <div className="spark-info"><span className="number">3700$</span>Sales</div>
                    <div id="spark-sales" className="sparkline"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default plain toggle panelMove panelClose panelRefresh">
                <div className="panel-heading">
                  <h4 className="panel-title">Basic Data tables</h4>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-6 col-xs-12 ">
                      <div className="dataTables_length" id="basic-datatables_length">
                        <label>
                        <span>
                          <select
                            name="basic-datatables_length" aria-controls="basic-datatables"
                            className="form-control input-sm">
                            <option
                              value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option
                              value="100">100</option>
                          </select>
                        </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div id="basic-datatables_filter" className="dataTables_filter">
                        <label>
                          <input type="search"
                                 className="form-control input-sm"
                                 placeholder=""
                                 aria-controls="basic-datatables"/>
                        </label>
                      </div>
                    </div>
                  </div>
                  <table id="basic-datatables" className="table table-striped table-bordered" cellSpacing={0}>
                    <thead>
                    <tr>
                      <th className="sorting">ID</th>
                      <th className="sorting">Full Name</th>
                      <th className="sorting">Role</th>
                      <th className="sorting">Birthday</th>
                      <th className="sorting">Account Name</th>
                      <th/>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>
                        <button type="button" className="btn btn-default btn-alt mr5 mr15"><i className="glyphicon glyphicon-trash"/></button>
                        <button type="button" className="btn btn-default btn-alt mr5"><i className="glyphicon glyphicon-edit"/></button>
                      </td>
                    </tr>
                    <tr>
                      <td>Garrett Winters</td>
                      <td>Accountant</td>
                      <td>Tokyo</td>
                      <td>63</td>
                      <td>2011/07/25</td>
                      <td>
                        <button type="button" className="btn btn-default btn-alt mr5 mr15"><i className="glyphicon glyphicon-trash"/></button>
                        <button type="button" className="btn btn-default btn-alt mr5"><i className="glyphicon glyphicon-edit"/></button>
                      </td>
                    </tr>
                    <tr>
                      <td>Ashton Cox</td>
                      <td>Junior Technical Author</td>
                      <td>San Francisco</td>
                      <td>66</td>
                      <td>2009/01/12</td>
                      <td>
                        <button type="button" className="btn btn-default btn-alt mr5 mr15"><i className="glyphicon glyphicon-trash"/></button>
                        <button type="button" className="btn btn-default btn-alt mr5"><i className="glyphicon glyphicon-edit"/></button>
                      </td>
                    </tr>
                    <tr>
                      <td>Cedric Kelly</td>
                      <td>Senior Javascript Developer</td>
                      <td>Edinburgh</td>
                      <td>22</td>
                      <td>2012/03/29</td>
                      <td>
                        <button type="button" className="btn btn-default btn-alt mr5 mr15"><i className="glyphicon glyphicon-trash"/></button>
                        <button type="button" className="btn btn-default btn-alt mr5"><i className="glyphicon glyphicon-edit"/></button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <div className="row">
                    <div className="col-md-4 col-xs-12">
                      <div className="dataTables_info" id="basic-datatables_info" role="status" aria-live="polite">
                        Showing 1 to 10 of 57 entries
                      </div>
                    </div>
                    <div className="col-md-8 col-xs-12">
                      <div className="dataTables_paginate paging_bootstrap" id="basic-datatables_paginate">
                        <ul className="pagination">
                          <li className="prev disabled"><a href="#">← Previous</a></li>
                          <li className="active"><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#">5</a></li>
                          <li className="next"><a href="#">Next → </a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}