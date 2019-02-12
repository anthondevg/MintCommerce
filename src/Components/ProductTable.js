import React from 'react';

import Product from '../Components/Product.js';

import { 
 Row } from  'reactstrap';

class ProductTable extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			products:[]
		};
	}


	componentDidMount(){
		fetch('http://mintapi.test/products')
			.then(response => response.json())
			.then(products=>{
				products.data.forEach(product=>{
					
					let data = {
						title: product.name,
						description: product.description,
						price: product.price
					}
					
					this.setState({products: this.state.products.concat([data])});

				});
		});
			
	}

	render(){
		

		if (this.state.products.length > 0) {
			return(	
				<Row>
				{
					this.state.products.map(
						product=><Product title={product.title} description={product.description} price={product.price} />
					)
				}	
				</Row>
			);
		}

		return(
			<div>Cargando productos...</div>
		);

	}
}

export default ProductTable;