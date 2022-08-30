import React, { useState, useEffect } from "react";
// import "./styles.css";
import { buttons } from "./CategoriesItems";
import { getCategories, filterCategories } from "./service";

const Categories = () => {
	const [filtredCategories, setFiltredCategories] = useState(null);
	useEffect(() => {
		setFiltredCategories(getCategories());
	}, []);

	function handleCategories(e) {
		let typeCategories = e.target.value;
		typeCategories !== "all"
			? setFiltredCategories(filterCategories(typeCategories))
			: setFiltredCategories(getCategories());
	}

	return (
		<div className="mt-5">
			<div className="container">
				<div className="d-grid d-sm-flex gap-2 gap-sm-4 flex-sm-row justify-content-sm-center align-items-center">
					{buttons &&
						buttons.map((type, index) => (
							<button
								type="button"
								className="btn btn-secondary"
								key={index}
								value={type.value}
								onClick={handleCategories}
							>
								{type.name}
							</button>
						))}
				</div>
				<div className="row text-center pt-4 gx-4 gy-4 p-4">
					{filtredCategories &&
						filtredCategories.map((type) => (
							<div className="col-md-4" key={type.id}>
								<div className="card crop-img">
									<img
										src="https://media.suara.com/pictures/480x260/2020/04/18/15789-cara-membuat-website.jpg"
										className="card-img-top"
										width="200"
										height="200"
									/>
									<div className="card-body">
										<h5 className="card-title">{type.nome}</h5>
										<p className="card-text">
											Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis odit atque nam animi dolores
											itaque.
										</p>
										<button type="button" className="btn btn-secondary">
											Your Design
										</button>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Categories;
