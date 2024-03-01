import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';

import { List } from '../../components/list/list';
import { Box} from '@mui/material';
import { titleTable } from '../../utils/titleTable';
import { CargoService } from '../../domain/cargos/cargosService';
import { Cargo } from '../../domain/cargos/types';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export function CargosList(): React.ReactNode {
	const [responseApi, setResponseApi] = useState<Cargo[]>([]);
	const [tableBody, setTableBody] = useState<React.ReactNode[]>([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const redirectToNewPage = (id: number) => {
		navigate('/CargosForm/' + id);
	};
	useEffect(() => {
		(
			async () => {
				CargoService.get()
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
															<p>{itemResponse.cargo}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.remuneracao}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.comissao_direta}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.comissao_indireta}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.jornada_trabalho_id}</p>
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
						goForm={'/CargosForm/0'}
						tableHeader={titleTable.cargos}
						tableBody={tableBody}
						lengthPage={Math.ceil(responseApi.length / 10)}
						title={'Cargos'}
						titleTable={'Todos os cargoss'}
						placeholder='Pesquise em todos os cargoss'
					/>
					: <></>
			}
			<ToastContainer />
		</Box>
	);
}