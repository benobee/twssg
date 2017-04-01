import { $ } from './src/core';
// import { Collection } from './src/core/storage/index';
// import SQS from './src/sqs';
// import { Component } from 'component-literal/index';

//build the site object
class Site_Build {
	constructor() {
		this.methods();
	}
	methods() {
		//FAQ
		
		const faq = document.querySelectorAll('#shopify-section-1490305118107 h3');

		faq.forEach((node) => {
			$(node.nextElementSibling).data("hidden", true);

			node.addEventListener("click", (e) => {
				const text = e.currentTarget.nextElementSibling;

				const current = text.dataset;

				if (current.hidden == "true") {
					$(text).data("hidden", false);
					$(e.currentTarget).data("open", true);
				}	else {
					$(text).data("hidden", true);
					$(e.currentTarget).data("open", false);
				}

			});			
		});
	}
}

const Site = new Site_Build();

