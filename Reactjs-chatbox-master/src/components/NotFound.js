import React from 'react';
import imgNotFound from '../images/loupe.svg';

const NotFound = () =>  {
	return(
		<div className="bloc-nfound">
			<div className="container text">
				<p><img src={imgNotFound} alt="img-page-not-found" className="loupe" /></p>
				<h2>Page non trouvée !</h2>
			</div>
		</div>
	)
}

export default NotFound 