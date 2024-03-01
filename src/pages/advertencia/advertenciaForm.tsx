import React, { useEffect, useState } from 'react';
import { TopBar } from '../../components/topBar/topBar';
import { Box } from '@mui/material';
import { Form } from '../../components/form/form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AdvertenciaSchema, advertenciaSchema } from './advertenciaSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'react-router-dom';
import { FuncionarioService } from '../../domain/funcionario/funcionarioService';
import { Funcionario } from '../../domain/funcionario/types';
import { AdvertenciaService } from '../../domain/advertencia/advertenciaService';
import { formatDateInput } from '../../utils/formatData';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdvertenciaForm = (): React.ReactNode => {
	const { id } = useParams();
	const [funcionarios,setFuncionarios] = useState<Funcionario[]>([]);
	const { register, handleSubmit, setValue, formState: { errors } } = useForm<AdvertenciaSchema>({
		resolver: zodResolver(advertenciaSchema),
		defaultValues: {
			funcionario_id: 0,
			responsavel_id: 0,
			advertencia: '',
			data: new Date().toISOString().split('T')[0]
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
						toast.error(error.data.message);
					});
			}
		)();
	}, []);
	useEffect(() => {
		(	
			async () => {	
				
				if (Number(id) !== 0) {
					AdvertenciaService.getById(Number(id))
						.then((response) => {
							
							const {
								funcionario_id,
								responsavel_id,
								advertencia,
								data
							} = response;	
							setValue(
								'funcionario_id',Number(funcionario_id)
							);
							setValue(
								'responsavel_id', Number(responsavel_id)
							);
							setValue(
								'advertencia', advertencia
							);
							setValue(
								'data', formatDateInput(data)
							);
						})
						.catch((error) => { 
							toast.error(error.data.message);
						});
				}
			}
		)();
	}, []);
	const TextError = ({ text }: { text: string }): React.ReactElement => (
		<p style={{ color: '#FF0000', textAlign: 'center', marginTop:5 }}	>{text}</p>
	);
	//const onSubmit: SubmitHandler<AdvertenciaSchema> = (data) => console.log(data);

	const onSubmit: SubmitHandler<AdvertenciaSchema> = (data) => {
		if (Number(id) === 0) {
			AdvertenciaService.post({ ...data, id: 0 })
				.then(() => { 
					toast.success('Salvo com sucesso');
				})
				.catch((error) => {
					toast.error(error.response.data.message);
				});
		} else {
			AdvertenciaService.put({ ...data, id: Number(id) })
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
						</div >
						
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<select {...register('responsavel_id')} defaultValue="0" onChange={(e) => setValue('responsavel_id', Number(e.target.value))} name="responsavel" className='form-select'>
								<option value="0" disabled>Selecione um responsavel</option>

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
							<label className="form-label" htmlFor="responsavel">Responsavel</label>
							{errors.responsavel_id && <TextError text={errors.responsavel_id.message + ''} />}

						</div >
					</div>
					<div className="col-lg-8 col-xl-4">
						<div className="form-floating mb-4 form-group">
							<input  {...register('data')} type="date" className="form-control text-uppercase valid" id="datePicker" name="datePicker" placeholder="Y-m-d"/>
							<label className="form-label" htmlFor="datePicker">Data</label>
							{errors.data && <TextError text={errors.data.message + ''} />}

						</div >
					</div>
				</div>
				<div className="col-lg-8 col-xl-12">
					<div className="form-floating mb-4 form-group">
						<textarea style={{ minHeight: 150,resize: 'none' }}  {...register('advertencia')} className="form-control" id="advertencia" name='advertencia' placeholder='Digite a sua advertencia'/>
						<label className="form-label" htmlFor='advertencia'>Advertencia</label> 
						{errors.advertencia && <TextError text={errors.advertencia.message + ''} />}
					</div >
				</div>
			</form>
		</div>
	);
	return (
		<Box style={{ backgroundColor: '#EDF0F7', minWidth: '100%', minHeight: '100vh' }}>
			<TopBar />
			<Form
				title='Advertencia'
				subTitle={`${Number(id) === 0 ? 'Cadastre uma nova' : 'Atualize uma' }  advertencia`}
				formHtml={form}
				goBack={'/AdvertenciaLista'}
				handleSubmit={handleSubmit(onSubmit)}
				titleBtn={`${Number(id) === 0 ? 'Salvar' : 'Atualizar'}`}
			/>
			<ToastContainer />
		</Box>
	);
};