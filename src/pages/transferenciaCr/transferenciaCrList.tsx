import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';

import { List } from '../../components/list/list';
import { Box} from '@mui/material';
import { titleTable } from '../../utils/titleTable';
import { TransferenciaCrService } from '../../domain/transferenciaCr/transferenciaCrService';
import { TransferenciaCr } from '../../domain/transferenciaCr/types';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export function TransferenciaCrList(): React.ReactNode {
	const { id } = useParams();

	const [responseApi, setResponseApi] = useState<TransferenciaCr[]>([]);
	const [tableBody, setTableBody] = useState<React.ReactNode[]>([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		(
			async () => {
				TransferenciaCrService.get(Number(id))
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
													<tr key={index}>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.id}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.funcionario_id}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.centro_resultado_id}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.data_inicio_trabalho}</p>
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
						toast.error(error.response.datam.essage);
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
						goForm={'/TransferenciaCrForm/0'}
						tableHeader={titleTable.transferenciaCr}
						tableBody={tableBody}
						lengthPage={Math.ceil(responseApi.length / 10)}
						title={'Transferência de CR'}
						titleTable={'Todos os transferência de cr'}
						placeholder='Pesquise em todos os transferência de cr'
					/>
					: <></>
			}
			<ToastContainer />
		</Box>
	);
}