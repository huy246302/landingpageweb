import {useParams} from "react-router-dom";
import React from 'react';

export function ItemDetailPage(props) {
    const {id} = useParams();
    console.log(id);
    
    return (
        <div className="container">
                <div className="row product pricing-tables">
                    <div>
                        {id}
                    </div>
                </div>
        </div>
    )
}
