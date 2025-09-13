import config from './../../config.js';
import Dialog_class from './../../libs/popup.js';

class Help_about_class {

	constructor() {
		this.POP = new Dialog_class();
	}

	//about
	about() {
		var email = 'info@jonas-barney.com';	
		
		var settings = {
			title: 'About',
			params: [
				{title: "", html: '<img style="width:200px;" class="about-logo" alt="" src="images/logo-colors.png" />'},
				{title: "Name:", html: '<span class="about-name">Jonas & Barney Coloring (Fork of miniPaint)</span>'},
				{title: "Version:", value: VERSION},
				{title: "Description:", value: "Online image editor."},
				{title: "Author:", value: 'Jens Richter (orginally by ViliusL)'},
				{title: "Email:", html: '<a href="mailto:' + email + '">' + email + '</a>'},
				{title: "GitHub Fork:", html: '<a href="https://github.com/jrichter24/miniPaint">https://github.com/jrichter24/miniPaint</a>'},
				{title: "GitHub (Orginal):", html: '<a href="https://github.com/viliusle/miniPaint">https://github.com/viliusle/miniPaint</a>'},
				{title: "Website:", html: '<a href="https://www.jonas-barney.com/">https://www.jonas-barney.com/</a>'},
			],
		};
		this.POP.show(settings);
	}

}

export default Help_about_class;
