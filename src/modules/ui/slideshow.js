import { Component, $ } from '../../core';
import { ComponentLiteral } from '../../core/component/index';
import * as data from '../../../data.json';

class Slideshow extends ComponentLiteral {
	constructor(props) {
		super(props);
		this.props = props;
	}
	render() {
		const items = this.props.data.items.map((item, i) => {
			return (
				Component `
					<div id="${item.id}" class="collection-item">
						<div class="content">
							<div class="media">
								<div class="image" style="background-image:url(${item.assetUrl});"></div>
							</div>
							<div class="title">
								${item.title}
							</div>
							<div class="tags">
								${item.categories}
							</div>
						</div>
					</div>
			`);
		});

		return(
			Component `
				<div class="collection-slide active-slide" data-slide-count="${this.slideCount}">
					${items}
				</div>`
		);
	}
}

export default Slideshow;