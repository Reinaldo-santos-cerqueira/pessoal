import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Box } from '@mui/material';
import { Form } from '../../components/form/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { horasextrasSchema, HorasExtrasSchema } from './horasExtrasSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { FuncionarioService } from '../../domain/funcionario/funcionarioService';
import { Funcionario } from '../../domain/funcionario/types';
import { formatDateInput } from '../../utils/formatData';
import { HorasExtrasService } from '../../domain/horasExtras/horasExtrasService';
import { ToastContainer, toast } from 'react-toastify';

export const HorasExtrasForm = (): React.ReactNode => {
	const { id } = useParams();
	const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<HorasExtrasSchema>({
		resolver: zodResolver(horasextrasSchema),
		defaultValues: {
			funcionario_id: '',
			autorizado_por: '',
			solicitante_id: '',
			data_solicitacao: new Date().toISOString().split('T')[0],
			data_extra: new Date().toISOString().split('T')[0],
			data_autorizacao: new Date().toISOString().split('T')[0],
			status_solicitacao_id: '',
			horas_extras: '00:00',
			observacao: '',	
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
					HorasExtrasService.getById(Number(id))
						.then((response) => {

							const {
								funcionario_id,
								autorizado_por,
								solicitante_id,
								data_solicitacao,
								data_extra,
								data_autorizacao,
								status_solicitacao_id,
								horas_extras,
								observacao,	
							} = response;
							setValue(
								'funcionario_id', funcionario_id + ''
							);
							setValue(
								'horas_extras', horas_extras
							);
							setValue(
								'data_solicitacao', formatDateInput(data_solicitacao)
							);
							setValue(
								'data_extra', formatDateInput(data_extra)
							);
							setValue(
								'data_autorizacao', formatDateInput(data_autorizacao)
							);
							setValue(
								'autorizado_por', autorizado_por + ''
							);
							setValue(
								'solicitante_id', solicitante_id + ''
							);
							setValue(
								'status_solicitacao_id', status_solicitacao_id + ''
							);
							setValue(
								'observacao', observacao + ''
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

	const onSubmit: SubmitHandler<HorasExtrasSchema> = (data) => {
		if (Number(id) === 0) {
			HorasExtrasService.post({ ...data, id: 0, funcionario_id: Number(data.funcionario_id), solicitante_id: Number(data.solicitante_id), autorizado_por: Number(data.autorizado_por)})
				.then(() => {
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		} else {
			HorasExtrasService.put({ ...data, id: 0, funcionario_id: Number(data.funcionario_id), solicitante_id: Number(data.solicitante_id), autorizado_por: Number(data.autorizado_por) })
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
							<select {...register('funcionario_id')} defaultValue="0" onChange={(e) => setValue('funcionario_id', e.target.value)} name="funcionario" className='form-select'>
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
							<select {...register('solicitante_id')} defaultValue="0" onChange={(e) => setValue('solicitante_id', e.target.value)} name="solicitante_id" className='form-select'>
								<option value="0" disabled>Selecione um solictante</option>

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
							<label className="form-label" htmlFor="solicitante_id">Solicitante</label>
							{errors.solicitante_id && <TextError text={errors.solicitante_id.message + ''} />}
						</div>
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<select {...register('autorizado_por')} defaultValue="0" onChange={(e) => setValue('funcionario_id', e.target.value)} name="autorizado_por" className='form-select'>
								<option value="0" disabled>Selecione o aprovador</option>

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
							<label className="form-label" htmlFor="autorizado_por">Aprovador</label>
							{errors.autorizado_por && <TextError text={errors.autorizado_por.message + ''} />}
						</div>
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input {...register('horas_extras')} type='time' className="form-control" id='horas_extras' name='horas_extras' />
							<label className="form-label" htmlFor='horas_extras'>Data falta</label>
						</div>
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input  {...register('data_autorizacao')} type="date" className="form-control text-uppercase valid" id="data_autorizacao" name="data_autorizacao" placeholder="Y-m-d" />
							<label className="form-label" htmlFor="data_autorizacao">Data da autorização</label>
							{errors.data_autorizacao && <TextError text={errors.data_autorizacao.message + ''} />}
						</div>
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input  {...register('data_extra')} type="date" className="form-control text-uppercase valid" id="data_extra" name="data_extra" placeholder="Y-m-d" />
							<label className="form-label" htmlFor="data_extra">Data da extra</label>
							{errors.data_extra && <TextError text={errors.data_extra.message + ''} />}
						</div>
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input  {...register('data_solicitacao')} type="date" className="form-control text-uppercase valid" id="data_solicitacao" name="data_solicitacao" placeholder="Y-m-d" />
							<label className="form-label" htmlFor="data_extra">Data da solicitação</label>
							{errors.data_solicitacao && <TextError text={errors.data_solicitacao.message + ''} />}
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
				title='Horas extras'
				subTitle={`${Number(id) === 0 ? 'Cadastre ' : 'Atualize'}  horas extras`}
				formHtml={form}
				goBack={'/HorasExtrasLista'}
				handleSubmit={handleSubmit(onSubmit)}
				titleBtn={`${Number(id) === 0 ? 'Salvar' : 'Atualizar'}`}
			/>
			<ToastContainer/>
		</Box>
	);
};