import React from 'react'
import FIELD from '../api/JsonUtil'

const Detail = (props) => (
    <div className="card">
        <div className="card-header">
            <button className="btn btn-primary" onClick={props.onBackBtnClicked}>Back</button>
        </div>
        <div className="card-body">
            <h5 className="card-title">{props.result[FIELD.NAME]}</h5>
            <p className="card-text">{props.result[FIELD.DESC]}</p>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>Category</td>
                        <td>{props.result[FIELD.CATEGORY]}</td>
                    </tr>
                    <tr>
                        <td>HTTPS</td>
                        <td>{props.result[FIELD.HTTPS]}</td>
                    </tr>
                    <tr>
                        <td>CORS</td>
                        <td>{props.result[FIELD.CORS]}</td>
                    </tr>
                    <tr>
                        <td>Authentication</td>
                        <td>{props.result[FIELD.AUTH]}</td>
                    </tr>
                    <tr>
                        <td>Link</td>
                        <td><a href={props.result[FIELD.LINK]}>{props.result[FIELD.LINK]}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default Detail;