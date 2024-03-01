import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';

import { List } from '../../components/list/list';
import { Box} from '@mui/material';
import { titleTable } from '../../utils/titleTable';
import {  ParametroService } from '../../domain/parametro/parametroService';
import { Parametro } from '../../domain/parametro/types';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export function ParametroList(): React.ReactNode {
	const [responseApi, setResponseApi] = useState<Parametro[]>([]);
	const [tableBody, setTableBody] = useState<React.ReactNode[]>([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const redirectToNewPage = (id: number) => {
		navigate('/ParametroForm/' + id);
	};
	useEffect(() => {
		(
			async () => {
				ParametroService.get()
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
															<p>{itemResponse.centro_resultado}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.limite_hora_extra_diario}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.limite_hora_extra_mensal}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.fornecedor_agrupador_id}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.insumo_mao_de_obra_id}</p>
														</td>
														<td className="d-none d-md-table-cell text-center">
															<p>{itemResponse.servico_folha_pagamento_id}</p>
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
						goForm={'/ParametroForm/0'}
						tableHeader={titleTable.parametro}
						tableBody={tableBody}
						lengthPage={Math.ceil(responseApi.length / 10)}
						title={'Parametros'}
						titleTable={'Todos os parametros'}
						placeholder='Pesquise em todos os parametros'
					/>
					: <></>
			}
			<ToastContainer />
		</Box>
	);
}