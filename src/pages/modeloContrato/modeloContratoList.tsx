import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';

import { List } from '../../components/list/list';
import { Box} from '@mui/material';
import { titleTable } from '../../utils/titleTable';
import {  ModeloContratoService } from '../../domain/modeloContrato/modeloContratoService';
import { ModeloContrato } from '../../domain/modeloContrato/types';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export function ModeloContratoList(): React.ReactNode {
	const [responseApi, setResponseApi] = useState<ModeloContrato[]>([]);
	const [tableBody, setTableBody] = useState<React.ReactNode[]>([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const redirectToNewPage = (id: number) => {
		navigate('/ModeloContratoForm/' + id);
	};
	useEffect(() => {
		(
			async () => {
				ModeloContratoService.get()
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
															<p>{itemResponse.cargo_id}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.modelo}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.numero_modelo}</p>
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
						goForm={'/ModeloContratoForm/0'}
						tableHeader={titleTable.modeloContrato}
						tableBody={tableBody}
						lengthPage={Math.ceil(responseApi.length / 10)}
						title={'Modelo de contrato'}
						titleTable={'Todos os modelo de contrato'}
						placeholder='Pesquise em todos os modelo de contrato'
					/>
					: <></>
			}
			<ToastContainer />
		</Box>
	);
}