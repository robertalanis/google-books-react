import React from "react";

function Form(props) {
	return (
		<div className="container">
			<form>
				<div className="form-group row">
					<div class="col-12">
						<label for="search" class="col-form-label">
							<h2>Search Here</h2>
						</label>
					</div>
					<div class="col-10 col-md-8 col-lg-6 col-xl-4">
						<input
							onChange={props.handleInputChange}
							value={props.search}
							name="search"
							type="text"
							className="form-control"
							placeholder="Search a Book"
							id="search"
						/>
					</div>
					<div class="col-xs-2">
						<button onClick={props.handleFormSubmit} className="btn btn-primary">
							SEARCH
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form;
