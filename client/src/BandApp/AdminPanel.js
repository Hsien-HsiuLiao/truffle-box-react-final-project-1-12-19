import React from 'react';

function AdminPanel({}) {
    return (
        <header style={headerstyle}>
            <div id="adminpanel">
              
              <input type="text" id="BandMgrAcctAddress" placeholder="input band mgr account address" ></input>
              <button id="submitMgr" type="submit" class="btn  btn-primary">submit</button>
            </div>
        </header>
    );
}
const headerstyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'left',
    padding: '10px'
}

export default AdminPanel;