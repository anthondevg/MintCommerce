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
	render(){
		return(
			<Col xs="6" sm="4" className="mt-1">
				<Card>
					<CardImg top width="100%" src="https://http2.mlstatic.com/franela-unicolor-para-estampar-D_NQ_NP_802215-MLV25164157741_112016-F.jpg" alt="Franela Nike negra" />
					<CardBody>
						<CardTitle>Camisa Nike</CardTitle>

						<CardSubtitle>Card subtitle</CardSubtitle>

						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card's content.
						</CardText>
						<Button>Comprar</Button>
					</CardBody>
				</Card>
			</Col>
		);
	}
}

export default Product;