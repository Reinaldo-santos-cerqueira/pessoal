import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';

import { List } from '../../components/list/list';
import { Box} from '@mui/material';
import { titleTable } from '../../utils/titleTable';
import {  HorasExtrasService } from '../../domain/horasExtras/horasExtrasService';
import { HorasExtras } from '../../domain/horasExtras/types';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export function HorasExtrasList(): React.ReactNode {
	const [responseApi, setResponseApi] = useState<HorasExtras[]>([]);
	const [tableBody, setTableBody] = useState<React.ReactNode[]>([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const redirectToNewPage = (id: number) => {
		navigate('/HorasExtrasForm/' + id);
	};
	useEffect(() => {
		(
			async () => {
				HorasExtrasService.get()
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
															<p>{itemResponse.funcionario_id}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.solicitante_id}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.data_solicitacao}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.data_extra}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.horas_extras}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.observacao}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.autorizado_por}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.data_autorizacao}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.status_solicitacao_id}</p>
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
						toast.error(error.response.data.message);
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
						goForm={'/HorasExtrasForm/0'}
						tableHeader={titleTable.horasExtras}
						tableBody={tableBody}
						lengthPage={Math.ceil(responseApi.length / 10)}
						title={'Horas extras'}
						titleTable={'Todas as horas extras'}
						placeholder='Pesquise em todas as horas extras'
					/>
					: <></>
			}
			<ToastContainer />
		</Box>
	);
}