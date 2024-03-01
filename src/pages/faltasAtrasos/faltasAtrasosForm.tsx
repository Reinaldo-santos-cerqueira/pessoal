import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Box } from '@mui/material';
import { Form } from '../../components/form/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { faltasatrasosSchema, FaltasAtrasosSchema } from './faltasAtrasosSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { FuncionarioService } from '../../domain/funcionario/funcionarioService';
import { Funcionario } from '../../domain/funcionario/types';
import { formatDateInput } from '../../utils/formatData';
import { FaltasAtrasosService } from '../../domain/faltasAtrasos/faltasAtrasosService';
import { ToastContainer, toast } from 'react-toastify';

export const FaltasAtrasosForm = (): React.ReactNode => {
	const { id } = useParams();
	const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<FaltasAtrasosSchema>({
		resolver: zodResolver(faltasatrasosSchema),
		defaultValues: {
			funcionario_id: 0,
			horas: '00:00',
			data_falta: new Date().toISOString().split('T')[0]
		},
		mode: 'onChange'
	});

	useEffect(() => {
		(
			async () => {
				FuncionarioService.get()
					.then((response) => {
						setFuncionarios(response);
					})
					.catch((error) => {
						toast.error(error.response.data.message);
					});
			}
		)();
	}, []);
	useEffect(() => {
		(
			async () => {
				if (Number(id) !== 0) {
					FaltasAtrasosService.getById(Number(id))
						.then((response) => {

							const {
								funcionario_id,
								horas,
								data_falta
                                
							} = response;
							setValue(
								'funcionario_id', Number(funcionario_id)
							);
							setValue(
								'horas', horas
							);
							setValue(
								'data_falta', formatDateInput(data_falta)
							);
						})
						.catch((error) => {
							toast.error(error.response.data.message);
						});
				}
			}
		)();
	}, []);
	const TextError = ({ text }: { text: string }): React.ReactElement => (
		<p style={{ color: '#FF0000', textAlign: 'center', marginTop: 5 }}	>{text}</p>
	);

	const onSubmit: SubmitHandler<FaltasAtrasosSchema> = (data) => {
		if (Number(id) === 0) {
			FaltasAtrasosService.post({ ...data, id: 0 })
				.then(() => {
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		} else {
			FaltasAtrasosService.put({ ...data, id: Number(id), })
				.then(() => {
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		}
	};

	const form = (
		<div className="block-content tab-pane active show bg-white" >
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='row'>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<select {...register('funcionario_id')} defaultValue="0" onChange={(e) => setValue('funcionario_id', Number(e.target.value))} name="funcionario" className='form-select'>
								<option value="0" disabled>Selecione um funcionario</option>

								{
									funcionarios.map((funcionario) => {
										if (funcionario.ativo) {
											return (
												<option value={funcionario.id} key={funcionario.id}>{funcionario.nome}</option>
											);
										}
									})
								}
							</select>
							<label className="form-label" htmlFor="funcionario">Funcionario</label>
							{errors.funcionario_id && <TextError text={errors.funcionario_id.message + ''} />}
						</div>
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input {...register('horas')} type='time' className="form-control" id='horas' name='horas'/>
							<label className="form-label" htmlFor='horas'>Data falta</label>
						</div>
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input  {...register('data_falta')} type="date" className="form-control text-uppercase valid" id="data_falta" name="data_falta" placeholder="Y-m-d" />
							<label className="form-label" htmlFor="datePickerFaltasAtrasos">Data falta</label>
							{errors.data_falta && <TextError text={errors.data_falta.message + ''} />}

						</div>
					</div>
				</div>
			</form>
		</div>
	);
	return (
		<Box style={{ backgroundColor: '#EDF0F7', minWidth: '100%', minHeight: '100vh' }}>
			<TopBar />
			<Form
				title='FaltasAtrasos'
				subTitle={`${Number(id) === 0 ? 'Cadastre ' : 'Atualize '}  faltas ou atrasos`}
				formHtml={form}
				goBack={'/FaltasAtrasosLista'}
				handleSubmit={handleSubmit(onSubmit)}
				titleBtn={`${Number(id) === 0 ? 'Salvar' : 'Atualizar'}`}
			/>
			<ToastContainer />
		</Box>
	);
};