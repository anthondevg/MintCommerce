import React from 'react';

import Product from '../Components/Product.js';

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

					console.log(this.state.products);
				});
		});
			
	}

	render(){
		

		if (this.state.products.length > 0) {
			return(	
				<span>
				{
					this.state.products.map(product=>
						<Product title={product.title} description={product.description} price={product.price} />
					)

				}	
				</span>
			);
		}

		return(
			<div>Cargando productos...</div>
		);

	}
}

export default ProductTable;