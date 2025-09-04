import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Product = () => {
    // 4 - capturar o parâmetro
    const { id } = useParams();
    // carregar os dados do produto usando o id
    const url = `http://localhost:3000/products/${id}`;
    const { data: product, loading, error } = useFetch(url);

  return (
    <div>
        <h1>Detalhes do produto</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {product && (
          <>
            <p>ID do produto: {product.id}</p>
            <p>Nome do produto: {product.name}</p>
            <p>Preço: {product.price}</p>
          </>
        )}
    </div>
  )
}

export default Product;