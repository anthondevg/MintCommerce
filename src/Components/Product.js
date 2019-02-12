import React from 'react';

import { 
 Col,
 Card,
 CardImg,
 CardText,
 CardBody,
 CardTitle,
 CardSubtitle,
 Button }from  'reactstrap';

class Product extends React.Component{
	constructor(props){
		super(props);

		this.state = {}
	}
	render(){
		return(
			<Col xs="6" sm="4" className="mt-1">
				<Card>
					<CardImg top width="100%" src="https://www.pimkie.es/on/demandware.static/-/Sites-pimkie-master-catalog/default/dw5f30befa/images/561241_326B06_portrait_HD_1.JPG" alt="Franela Nike negra" />
					<CardBody>
						<CardTitle>{this.props.title}</CardTitle>

						<CardSubtitle>Card subtitle</CardSubtitle>

						<CardText>
							{this.props.description}
						</CardText>

						<span>${this.props.price}USD</span>
						
						<Button>Comprar</Button>
					</CardBody>
				</Card>
			</Col>
		);
	}
}

export default Product;