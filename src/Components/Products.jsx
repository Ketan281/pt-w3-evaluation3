import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Table = styled.table`
    margin:auto;
    border:1px solid black;
    padding:30px;
    font-size:20px;
`


const Products = () => {
    const [product,setProduct] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3002/products')
        .then((response) => response.json())
        .then((res) => setProduct(res))
        .catch((err)=>console.log(err))
    },[])

  return (
    <Table>
        <thead>
            <tr>
                <th>Product </th>&nbsp;&nbsp;
                <th>Price</th>&nbsp;&nbsp;
                <th>More</th>
            </tr>
        </thead>
        <tbody>
            {
                product.map((item)=>(
                    <tr key={item.id}>
                        <td >{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <Link to={`/products/${item.id}`}>More Details...</Link>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
  )
}

export {Products}
