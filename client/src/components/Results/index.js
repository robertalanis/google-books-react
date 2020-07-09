import React, { Component } from "react";
import API from "../../utils/API";
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from "reactstrap";

class Results extends Component {
	state = {
		savedBooks: [],
	};

	componentDidMount() {
		API.savedBooks()
			.then((savedBooks) => this.setState({ savedBooks: savedBooks }))
			.catch((err) => console.error(err));
	}

	handleSave = (book) => {
		if (this.state.savedBooks.map((book) => book._id).includes(book._id)) {
			API.deleteBook(book._id)
				.then((deletedBook) =>
					this.setState({
						savedBooks: this.state.savedBooks.filter((book) => book._id !== deletedBook._id),
					})
				)
				.catch((err) => console.error(err));
		} else {
			API.saveBook(book)
				.then((savedBook) =>
					this.setState({ savedBooks: this.state.savedBooks.concat([savedBook]) })
				)
				.catch((err) => console.error(err));
		}
	};

	render() {
		return (
			<div>
				{!this.props.books.length ? (
					<h1 className="text-center">No Results to Display</h1>
				) : (
					<div>
						{this.props.books.map((result) => (
							<Card className="mb-3 border border-dark" key={result._id}>
								<div className="row">
									<div className="col-md-5">
										<CardImg alt={result.title} className="img-fluid" src={result.image}></CardImg>
									</div>
									<div className="col-md-7">
										<CardTitle className="pt-5 px-5">
											<h2 style={{ fontStyle: "italic" }}>{result.title}</h2>
											<h4>by {result.authors}</h4>
											<hr></hr>
										</CardTitle>
										<CardText className="px-5">
											{result.description}
											<div className="my-5">
												<a
													href={result.link}
													className="btn btn-lg btn-outline-primary mr-2"
													target="_blank"
												>
													View
												</a>
												<button
													onClick={() => this.handleSave(result)}
													className="btn btn-lg btn-outline-primary"
												>
													{this.state.savedBooks.map((book) => book._id).includes(result._id)
														? "Unsave"
														: "Save"}
												</button>
											</div>
										</CardText>
									</div>
								</div>
							</Card>
						))}
					</div>
				)}
			</div>
		);
	}
}

export default Results;
