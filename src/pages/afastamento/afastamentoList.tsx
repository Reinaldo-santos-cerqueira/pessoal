import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';

import { List } from '../../components/list/list';
import { Box} from '@mui/material';
import { titleTable } from '../../utils/titleTable';
import { AfastamentoService } from '../../domain/afastamento/afastamentoService';
import { Afastamento } from '../../domain/afastamento/types';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export function AfastamentoList(): React.ReactNode {
	const [responseApi, setResponseApi] = useState<Afastamento[]>([]);
	const [tableBody, setTableBody] = useState<React.ReactNode[]>([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const redirectToNewPage = (id: number) => {
		navigate('/AfastamentoForm/' + id);
	};
	useEffect(() => {
		(
			async () => {
				AfastamentoService.get()
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
															<p>{itemResponse.data_afastamento}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.data_retorno}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.motivo_afastamento}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.funcionario_id}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.tipo_afastamento_id}</p>
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
						goForm={'/AfastamentoForm/0'}
						tableHeader={titleTable.afastamento}
						tableBody={tableBody}
						lengthPage={Math.ceil(responseApi.length / 10)}
						title={'Afastamento'}
						titleTable={'Todos os afastamentos'}
						placeholder='Pesquise em todos os afastamentos'
					/>
					: <></>
			}
			<ToastContainer />
		</Box>
	);
}