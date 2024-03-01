import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Box } from '@mui/material';
import { Form } from '../../components/form/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { afastamentoSchema, AfastamentoSchema } from './afastamentoSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { FuncionarioService } from '../../domain/funcionario/funcionarioService';
import { Funcionario } from '../../domain/funcionario/types';
import { AfastamentoService } from '../../domain/afastamento/afastamentoService';
import { formatDateInput } from '../../utils/formatData';
import { TipoAfastamentoService } from '../../domain/tipoAfastamento/tipoAfastamentoService';
import { TipoAfastamento } from '../../domain/tipoAfastamento/types';
import { ToastContainer, toast } from 'react-toastify';

export const AfastamentoForm = (): React.ReactNode => {
	const { id } = useParams();
	const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
	const [tipoAfastamento, setTipoAfastamento] = useState<TipoAfastamento[]>([]);
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<AfastamentoSchema>({
		resolver: zodResolver(afastamentoSchema),
		defaultValues: {
			funcionario_id: 0,
			tipo_afastamento_id: '0',
			data_afastamento: new Date().toISOString().split('T')[0],
			data_retorno: new Date().toISOString().split('T')[0],
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
				TipoAfastamentoService.get()
					.then((response) => {
						setTipoAfastamento(response);
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
					AfastamentoService.getById(Number(id))
						.then((response) => {

							const {
								funcionario_id,
								motivo_afastamento,
								data_afastamento,
								data_retorno,
								tipo_afastamento_id
							} = response;
							setValue(
								'funcionario_id', Number(funcionario_id)
							);
							setValue(
								'motivo_afastamento', motivo_afastamento
							);
							setValue(
								'data_afastamento', formatDateInput(data_afastamento)
							);
							setValue(
								'data_retorno', formatDateInput(data_retorno)
							);
							setValue(
								'tipo_afastamento_id', tipo_afastamento_id + ''
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

	const onSubmit: SubmitHandler<AfastamentoSchema> = (data) => {
		const { tipo_afastamento_id } = data;
		if (Number(id) === 0) {
			AfastamentoService.post({ ...data, id: 0, tipo_afastamento_id: Number(tipo_afastamento_id)  })
				.then(() => {
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		} else {
			AfastamentoService.put({ ...data, id: Number(id), tipo_afastamento_id: Number(tipo_afastamento_id) })
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
					<div className="col-lg-8 col-xl-6">
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
					<div className="col-lg-8 col-xl-6">
						<div className="form-floating mb-4 form-group">
							<select {...register('tipo_afastamento_id')} defaultValue={0} onChange={(e) => setValue('tipo_afastamento_id', e.target.value)} name="tipo_afastamento_id" className='form-select'>
								<option value={0} disabled>Selecione um tipo de afastamento</option>

								{
									tipoAfastamento.map((afastamento) => {
										return (<option value={afastamento.id} key={afastamento.id}>{afastamento.tipo_afastamento} </option>);
									})
								}
							</select>
							<label className="form-label" htmlFor="tipo_afastamento_id">Afastamento</label>
							{errors.tipo_afastamento_id && <TextError text={errors.tipo_afastamento_id.message + ''} />}
						</div>
					</div>
					<div className="col-lg-8 col-xl-6">
						<div className="form-floating mb-4 form-group">
							<input  {...register('data_afastamento')} type="date" className="form-control text-uppercase valid" id="datePickerAfastamento" name="datePickerAfastamento" placeholder="Y-m-d" />
							<label className="form-label" htmlFor="datePickerAfastamento">Data afastamento</label>
							{errors.data_afastamento && <TextError text={errors.data_afastamento.message + ''} />}

						</div>
					</div>
					<div className="col-lg-8 col-xl-6">
						<div className="form-floating mb-4 form-group">
							<input  {...register('data_retorno')} type="date" className="form-control text-uppercase valid" id="datePickerReterno" name="datePickerReterno" placeholder="Y-m-d" />
							<label className="form-label" htmlFor="datePickerReterno">Data retorno</label>
							{errors.data_retorno && <TextError text={errors.data_retorno.message + ''} />}

						</div>
					</div>
				</div>
				<div className="col-lg-8 col-xl-12">
					<div className="form-floating mb-4 form-group">
						<textarea style={{ minHeight: 150, resize: 'none' }}  {...register('motivo_afastamento')} className="form-control" id="motivo_afastamento" name='motivo_afastamento' placeholder='Digite a sua afastamento' />
						<label className="form-label" htmlFor='motivo_afastamento'>Afastamento</label>
						{errors.motivo_afastamento && <TextError text={errors.motivo_afastamento.message + ''} />}
					</div >
				</div>
			</form>
		</div>
	);
	return (
		<Box style={{ backgroundColor: '#EDF0F7', minWidth: '100%', minHeight: '100vh' }}>
			<TopBar />
			<Form
				title='Afastamento'
				subTitle={`${Number(id) === 0 ? 'Cadastre uma nova' : 'Atualize uma'}  afastamento`}
				formHtml={form}
				goBack={'/AfastamentoLista'}
				handleSubmit={handleSubmit(onSubmit)}
				titleBtn={`${Number(id) === 0 ? 'Salvar' : 'Atualizar'}`}
			/>
			<ToastContainer />
		</Box>
	);
};