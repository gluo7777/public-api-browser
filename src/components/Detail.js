import React from 'react'

const Detail = (props) => (
    <div className="card">
        <div className="card-header">
            <a href="#" className="btn btn-primary">Back</a>
        </div>
        <div className="card-body">
            <h5 className="card-title">API Name</h5>
            <p className="card-text">API Description</p>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>HTTPS</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>CORS</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Authentication</td>
                        <td>OAuth2.0</td>
                    </tr>
                    <tr>
                        <td>Link</td>
                        <td><a href="https://www.google.com">https://www.google.com</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default Detail;