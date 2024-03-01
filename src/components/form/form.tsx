import React from 'react';
import { Link } from 'react-router-dom';
interface props {
    title: string;
    subTitle: string;
    formHtml: React.ReactNode | React.ReactNode[];
	goBack: string;
	handleSubmit: () => void;
	titleBtn: string;
}
export const Form = ({ title, subTitle, formHtml, goBack, handleSubmit, titleBtn }: props): React.ReactNode => {
	return (
		<div className='container' style={{ marginTop: 30 }}>
			<div className="content">
				<div className="d-md-flex justify-content-md-between align-items-md-center py-3 pt-md-3 pb-md-0 text-center text-md-start">
					<div>
						<h1 className="h3 mb-1">
							{title}
						</h1>
						<p className="fw-medium mb-0 text-muted">
							{subTitle}
						</p>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="row g-0 flex-xl-grow-1">
					<div className="col-xl-12 bg-body-dark">
						<div className="block block-rounded myblock">
							<div className="block-header block-header-default" style={{justifyContent: 'flex-end'}}>
								<div className="block-options">
									<button type='submit' className="btn-block-option" onClick={handleSubmit}>
										<i className="si si-refresh"></i> {titleBtn}
									</button>
									<Link className="btn btn-sm btn-alt-primary" to={goBack} >
										<i className="si si-wrench"></i> Voltar
									</Link>
								</div>
							</div>
						</div>
						{formHtml}

					</div>
					
				</div>
                
			</div>
			
		</div>
	);
};