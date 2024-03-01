import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';

import { List } from '../../components/list/list';
import { Box} from '@mui/material';
import { titleTable } from '../../utils/titleTable';
import { TipoFolhaService } from '../../domain/tipoFolha/tipoFolhaService';
import { TipoFolha } from '../../domain/tipoFolha/types';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export function TipoDeFolhaList(): React.ReactNode {
	const [responseApi, setResponseApi] = useState<TipoFolha[]>([]);
	const [tableBody, setTableBody] = useState<React.ReactNode[]>([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const redirectToNewPage = (id: number) => {
		navigate('/TipoFolhaForm/' + id);
	};
	useEffect(() => {
		(
			async () => {
				TipoFolhaService.get()
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
															<p>{itemResponse.tipo_folha}</p>
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
						goForm={'/TipoFolhaForm/0'}
						tableHeader={titleTable.tipoFolha}
						tableBody={tableBody}
						lengthPage={Math.ceil(responseApi.length / 10)}
						title={'TIpo de Folha'}
						titleTable={'Todos os tipo de folha'}
						placeholder='Pesquise em todos os tipos de folha1'
					/>
					: <></>
			}
			<ToastContainer />
		</Box>
	);
}