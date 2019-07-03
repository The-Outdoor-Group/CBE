import React from 'react';
import './../assets/css/line-item.css';

const LineItem = props => {
  return (
    <tr>
     <td><img src={"https://via.placeholder.com/135x135"} /></td>
     <td className="line-item-product-title"><h5>Product Title</h5><p>Delete</p></td>
     <td>$xx.xx</td>
     <td>- x +</td>
    </tr>
  );
};

export default LineItem;
