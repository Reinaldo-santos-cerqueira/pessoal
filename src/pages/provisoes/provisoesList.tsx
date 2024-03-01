import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';

import { List } from '../../components/list/list';
import { Box} from '@mui/material';
import { titleTable } from '../../utils/titleTable';
import {  ProvisoesService } from '../../domain/provisoes/provisoesService';
import { Provisoes } from '../../domain/provisoes/types';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export function ProvisoesList(): React.ReactNode {
	const [responseApi, setResponseApi] = useState<Provisoes[]>([]);
	const [tableBody, setTableBody] = useState<React.ReactNode[]>([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const redirectToNewPage = (id: number) => {
		navigate('/ProvisoesForm/' + id);
	};
	useEffect(() => {
		(
			async () => {
				ProvisoesService.get()
					.then((response) => {
						const arrayBody: React.ReactNode[] = [];
						setResponseApi(response);
						const countPage = Math.ceil(response.length / 10);
						for (let i = 1; i <= countPage; i++) { 
							arrayBody.push(
								<tbody>
									{
										response.map((itemResponse, index) => {
											if ((i - 1) * 10 <= index  && index  < (i * 10)) {
												return (
													<tr key={index} onClick={() => redirectToNewPage(itemResponse.id)} style={{ cursor: 'pointer' }}>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.id}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.provisao}</p>
														</td>
													</tr>
												);
											}
										})
									}
								</tbody>
							);
						}
						setTableBody(arrayBody);
					})
					.catch((error) => { 
						console.log('====================================');
						console.log(error);
						console.log('====================================');
					})
					.finally(() => {
						setLoading(true);
					});	
			}
		)();
	},[]);

	return (
		<Box style={{ backgroundColor:'#EDF0F7',minWidth: '100%',minHeight: '100vh' }}>
			<TopBar />
			{
				responseApi.length > 0 || loading 
					? <List
						goForm={'/ProvisoesForm/0'}
						tableHeader={titleTable.provisoes}
						tableBody={tableBody}
						lengthPage={Math.ceil(responseApi.length / 10)}
						title={'Provisoes'}
						titleTable={'Todos os provisoes'}
						placeholder='Pesquise em todos os provisoes'
					/>
					: <></>
			}
			<ToastContainer />
		</Box>
	);
}