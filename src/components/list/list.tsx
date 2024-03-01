import { Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
interface props {
    tableHeader: { title: string }[];
    tableBody: React.ReactNode[];
	lengthPage: number;
	title: string;
	titleTable: string;
	placeholder: string;
	goForm: string;
}
export function List({ tableHeader, tableBody, lengthPage, title, titleTable, placeholder, goForm }: props): React.ReactNode {
	
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(0);
	const changePage = (operation: 'A' | 'S') => {	
		if (operation === 'A') {
			page + 1 !== lengthPage && lengthPage > 0 ? setPage(page + 1) : '';
		}
		if (operation === 'S') {
			operation === 'S' && page > 0 && setPage(page - 1);
		}
	};
	return (
		<div className='container' style={{marginTop: 30}}>
			<div className="content">
				<div
					className="d-md-flex justify-content-md-between align-items-md-center py-3 pt-md-3 pb-md-0 text-center text-md-start">
					<div>
						<h1 className="h3 mb-1">
							{title}
						</h1>
					</div>
				</div>
			</div>
			<div className="content" style={{paddingBottom: 20}}>
				
				<div className="block block-rounded">
					<div className="block-header block-header-default">
						<h3 className="block-title">{titleTable}</h3>
						<div className="block-options">
							<Link className="btn btn-sm btn-alt-primary" to={goForm}>
								<i className="fa fa-cog"></i> Novo {title}
							</Link>

						</div>
					</div>
					<div className="block-content bg-body-dark">
						<form action="be_pages_ecom_products.php" method="POST">
							<div className="mb-4" style={{display: 'flex',gap: 5}}>
								<input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className="form-control form-control-alt" id="pesquisa" name="pesquisa"
									placeholder={placeholder} />
								<IconButton>
									<Search></Search>
								</IconButton>
							</div>
						</form>
					
					</div>
					<div className="block-content">
						<div className="table-responsive">

							<table className="table table-striped table-borderless table-vcenter">
								<thead>
									<tr className="bg-body-dark">

										{
											tableHeader.map((title, index) => (
												<th key={index} className="d-none d-md-table-cell text-center fw-bold">{title.title}</th>
											))
										}
									</tr>
								</thead>
								{tableBody[page]}
							</table>

						</div>
						<nav aria-label="Photos Search Navigation">
							<ul className="pagination justify-content-end mt-2 mb-4">
								<li className={`page-item ${page - 1 < 0 && 'disabled'}`} onClick={() => changePage('S')}>
									<p className="page-link" aria-label="Previous">
										Ant
									</p>
								</li>
								{
									lengthPage < 4 || page < 3
										?
										(
											<>
												<li
													onClick={() => {
														if (!(lengthPage < 1 && page !== 0)) {
															setPage(0);
														}
													} }
													className={`page-item ${lengthPage < 1 && page !== 0 ? 'disabled' : ''} ${page === 0 && 'active'} `}
												>
													<p className="page-link">1</p>
												</li>
												<li
													onClick={() => {
														if (!(lengthPage < 2 && page !== 1)) {
															setPage(1);
														}
													} }
													className={`page-item ${lengthPage < 2 && page !== 1 ? 'disabled' : ''} ${page === 1 && 'active'} `}
												>
													<p className="page-link">2</p>
												</li>
												<li
													onClick={() => {
														if (!(lengthPage < 3 && page !== 2)) {
															setPage(2);
														}
													} } className={`page-item ${lengthPage < 3 && page !== 2 && 'disabled'} ${page === 2 && 'active'} `}
												>
													<p className="page-link">3</p>
												</li>
												<li
													onClick={() => {
														if (!(lengthPage < 4 && page !== 3)) {
															console.log(1);
															setPage(3);
														}
													} }
													className={`page-item ${lengthPage < 4 && page !== 3 && 'disabled'} ${page === 3 && 'active'} `}
												>
													<p className="page-link">4</p>
												</li>
											</>
										)
										:
										page + 1 !== lengthPage
											?
											(
												<>
													<li
														onClick={() => {
															setPage(page - 2);
														}}
														className={'page-item'}
													>
														<p className="page-link">{page - 1}</p>
													</li>
													<li
														onClick={() => {
															setPage(page - 1);
														}}
														className={'page-item'}
													>
														<p className="page-link">{page}</p>
													</li>
													<li
														onClick={() => {
															setPage(page);
														}}
														className={'page-item  active '}
													>
														<p className="page-link">{page + 1}</p>
													</li>
													<li
														onClick={() => {
															setPage(page + 1);
														}}
														className={'page-item'}
													>
														<p className="page-link">{page + 2}</p>
													</li>
												</>
											)
											: 
											(
												<>
													<li
														onClick={() => {
															setPage(page - 3);
														}}
														className={'page-item'}
													>
														<p className="page-link">{page - 2}</p>
													</li>
													<li
														onClick={() => {
															setPage(page - 2);
														}}
														className={'page-item'}
													>
														<p className="page-link">{page - 1}</p>
													</li>
													<li
														onClick={() => {
															setPage(page - 1);
														}}
														className={'page-item'}
													>
														<p className="page-link">{page}</p>
													</li>
													<li
														onClick={() => {
															setPage(page);
														}}
														className={'page-item  active '}
													>
														<p className="page-link">{page + 1}</p>
													</li>	
												</>
											)
								}
								
								<li
									onClick={() => changePage('A')}
									className={`page-item ${page + 1 === lengthPage || lengthPage == 0 ? 'disabled' : ''}`}
								>
									<p className="page-link">
										Prox
									</p>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}