import React from 'react'


export const detail = () => {
    return (
        <div>
            var rows = [];
            for (var i = 0; i < 20; i++) 
            {
                rows.push(ObjectRow());
            }
            return tbody(rows);
        </div>
    )
}
export default detail;